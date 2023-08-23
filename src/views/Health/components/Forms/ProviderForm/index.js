import React from "react";
import { Grid, Typography, Box, Menu } from "@mui/material";
import { Controller } from "react-hook-form";
import CustomTextfield from "../../../../../components/CustomTextfield";
import CustomButton from "../../../../../components/CustomButton";
import useProviderForm from "../../../hooks/useProvidersForm";
import { ReactComponent as ProfileIcon } from "../../../../../assets/icons/profile.svg";
import { ReactComponent as BriefcaseIcon } from "../../../../../assets/icons/briefcase.svg";
import { ReactComponent as LocationIcon } from "../../../../../assets/icons/location.svg";
import { ReactComponent as FacebookIcon } from "../../../../../assets/icons/facebook.svg";
import { ReactComponent as LinkedinIcon } from "../../../../../assets/icons/linkedin.svg";
import { ReactComponent as TwitterIcon } from "../../../../../assets/icons/twitter.svg";
import { ReactComponent as InstagramIcon } from "../../../../../assets/icons/instagram.svg";


export const ProviderForm = (props) => {
  const { onSubmit, handleSubmit, control, isLoading, isEdit } =
    useProviderForm(props);
  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Grid container>
        <Grid item xs={12} mb={3}>
          {" "}
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <CustomTextfield
                label="Provider Name"
                EndIcon={ProfileIcon}
                placeholder="Enter Provider's Name"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} mb={3}>
          {" "}
          <Controller
            name="position"
            control={control}
            render={({ field }) => (
              <CustomTextfield
                label="Position"
                EndIcon={BriefcaseIcon}
                placeholder="Enter Provider's Position"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} mb={3}>
          {" "}
          <Controller
            name="address"
            control={control}
            render={({ field }) => (
              <CustomTextfield
                label="Address"
                EndIcon={LocationIcon}
                placeholder="Enter Provider's Address"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} mb={3}>
          <Typography
            fontWeight={500}
            sx={{ fontSize: "18px", fontFamily: "DM Sans" }}
          >
            Social Media links
          </Typography>
        </Grid>
        <Grid item xs={12} mb={3}>
          {" "}
          <Controller
            name="socialLinks.facebook"
            control={control}
            render={({ field }) => (
              <CustomTextfield
                label="Facebook"
                EndIcon={FacebookIcon}
                placeholder="Enter Facebook URL"
                {...field}
              />
            )}
          />
        </Grid>

        <Grid item xs={12} mb={3}>
          {" "}
          <Controller
            name="socialLinks.linkedIn"
            control={control}
            render={({ field }) => (
              <CustomTextfield
                label="LinkedIn"
                EndIcon={LinkedinIcon}
                placeholder="Enter LinkedIn URL"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} mb={3}>
          {" "}
          <Controller
            name="socialLinks.twitter"
            control={control}
            render={({ field }) => (
              <CustomTextfield
                label="Twitter"
                EndIcon={TwitterIcon}
                placeholder="Enter Twitter URL"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} mb={3}>
          {" "}
          <Controller
            name="socialLinks.instagram"
            control={control}
            render={({ field }) => (
              <CustomTextfield
                label="Instagram"
                EndIcon={InstagramIcon}
                placeholder="Enter Instagram URL"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <CustomButton variant="contained" type="submit">
            {isLoading
              ? "Loading..."
              : isEdit
              ? "Edit Provider"
              : "Add Provider"}
          </CustomButton>
        </Grid>
      </Grid>
    </Box>
  );
};
