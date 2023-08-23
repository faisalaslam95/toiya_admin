import React from "react";
import { Grid, Typography, Box, Menu } from "@mui/material";
import { Controller } from "react-hook-form";
import CustomTextfield from "../../../../../components/CustomTextfield";
import CustomButton from "../../../../../components/CustomButton";
import useMedicationForm from "../../../hooks/useMedicationForm";
import { ReactComponent as LinkIcon } from "../../../../../assets/icons/link.svg";
import { ReactComponent as CDIcon } from "../../../../../assets/icons/cd.svg";

export const MedicationForm = (props) => {
  const {
    onSubmit,
    handleSubmit,
    control,
    isLoading,
    onDelete,
    isEdit,
    isLoadingDelete,
  } = useMedicationForm(props);
  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Grid container>
        <Grid item xs={12} mb={3}>
          {" "}
          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <CustomTextfield
                label="Medication Name"
                EndIcon={CDIcon}
                placeholder="Enter Medication Name"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} mb={3}>
          {" "}
          <Controller
            name="url"
            control={control}
            render={({ field }) => (
              <CustomTextfield
                label="Medication Url"
                EndIcon={LinkIcon}
                placeholder="Enter URL to Medication Information"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <CustomButton variant="contained" type="submit">
            {isLoading ? "Adding..." : "Add Medication"}
          </CustomButton>
        </Grid>
        {isEdit && (
          <Grid item xs={12} mt={3}>
            <CustomButton variant="outlined" onClick={onDelete}>
              {isLoadingDelete ? "Deleting..." : "Delete Group Session"}
            </CustomButton>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};
