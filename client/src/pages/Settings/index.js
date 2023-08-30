import { Box, Button, Container, Stack, Typography } from "@mui/material";
import {
  CustomInputLabel,
  CustomTextField,
} from "../../components/CustomTextField";

export default function Settings() {
  return (
    <Container maxWidth="md">
      <Stack spacing={3}>
        {/* Personal Info */}
        <Box
          px={2.5}
          py={2}
          sx={{
            backgroundColor: "#fff",
            borderRadius: "25px",
          }}
        >
          <form autoComplete="off">
            <Stack direction="column" spacing={2} px={2} py={2}>
              <Typography variant="subtitle1" fontWeight="bold">
                Personal Info
              </Typography>
              <Stack spacing={1}>
                <CustomInputLabel label="Name" />
                <CustomTextField variant="filled" type="text" />
              </Stack>
              <Stack spacing={1}>
                <CustomInputLabel label="Email" />
                <CustomTextField variant="filled" type="email" />
              </Stack>
              <Stack spacing={1}>
                <CustomInputLabel label="Bio" />
                <CustomTextField
                  multiline
                  minRows={3}
                  maxRows={6}
                  variant="filled"
                  type="text"
                />
              </Stack>
              <Stack spacing={1}>
                <CustomInputLabel label="Country" />
                <CustomTextField variant="filled" type="text" />
              </Stack>
              <Stack spacing={1}>
                <CustomInputLabel label="Timezone" />
                <CustomTextField variant="filled" type="text" />
              </Stack>
              <Button
                fullWidth
                variant="contained"
                color="inherit"
                disableElevation
              >
                Save Changes
              </Button>
            </Stack>
          </form>
        </Box>
        {/* Password */}
        <Box
          px={2.5}
          py={2}
          sx={{
            backgroundColor: "#fff",
            borderRadius: "25px",
          }}
        >
          <form autoComplete="off">
            <Stack direction="column" spacing={2} px={2} py={2}>
              <Typography variant="subtitle1" fontWeight="bold">
                Password
              </Typography>
              <Stack spacing={1}>
                <CustomInputLabel label="Current Password" />
                <CustomTextField variant="filled" type="text" />
              </Stack>
              <Stack spacing={1}>
                <CustomInputLabel label="New Password" />
                <CustomTextField variant="filled" type="password" />
              </Stack>
              <Stack spacing={1}>
                <CustomInputLabel label="Confirm New Password" />
                <CustomTextField variant="filled" type="password" />
              </Stack>
              <Button
                fullWidth
                variant="contained"
                color="inherit"
                disableElevation
              >
                Save Changes
              </Button>
            </Stack>
          </form>
        </Box>
        {/* Payment */}
        <Box
          px={2.5}
          py={2}
          sx={{
            backgroundColor: "#fff",
            borderRadius: "25px",
          }}
        >
          <form autoComplete="off">
            <Stack direction="column" spacing={2} px={2} py={2}>
              <Typography variant="subtitle1" fontWeight="bold">
                Payment
              </Typography>
              <Stack spacing={1}>
                <CustomInputLabel label="Stripe Test Client ID (Optional)" />
                <CustomTextField variant="filled" type="text" />
              </Stack>
              <Stack spacing={1}>
                <CustomInputLabel label="Stripe Test Secret Key (Optional)" />
                <CustomTextField variant="filled" type="password" />
              </Stack>
              <Stack spacing={1}>
                <CustomInputLabel label="Stripe Client ID" />
                <CustomTextField variant="filled" type="text" />
              </Stack>
              <Stack spacing={1}>
                <CustomInputLabel label="Stripe Secret Key" />
                <CustomTextField variant="filled" type="password" />
              </Stack>
              <Button
                fullWidth
                variant="contained"
                color="inherit"
                disableElevation
              >
                Save Changes
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Container>
  );
}
