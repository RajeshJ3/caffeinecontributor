import { Close, GitHub, Language } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { CustomTextField } from "../../components/CustomTextField";

export default function User() {
  const DefaultCount = ({ value, selected }) => {
    return (
      <Box
        sx={{
          padding: "0px 10px",
          borderRadius: "50%",
          border: "1px solid orange",
          backgroundColor: selected ? "orange" : "#fff",
        }}
      >
        <Typography
          align="center"
          variant="subtitle1"
          sx={{
            width: "100%",
            color: selected ? "#fff" : "orange",
          }}
        >
          {value}
        </Typography>
      </Box>
    );
  };

  const CustomCount = () => (
    <input
      style={{
        width: "25px",
        height: "30px",
      }}
    />
  );

  return (
    <Container maxWidth={false}>
      <Stack>
        <Box
          sx={{
            minHeight: {
              xs: "200px",
              md: "300px",
            },
            backgroundColor: "#e2e2e2",
            borderRadius: "20px",
          }}
        ></Box>
        <Stack justifyContent="center" alignItems="center" spacing={2}>
          <img
            src="https://cdn.buymeacoffee.com/uploads/profile_pictures/2022/06/HRSW0988nOStDyt9.jpeg@300w_0e.webp"
            style={{
              height: "148px",
              width: "auto",
              borderRadius: "50%",
              marginTop: "-74px",
            }}
            alt="user"
          />
          <Typography variant="h5" fontWeight="bold">
            Rajesh Joshi
          </Typography>
          <Typography variant="body1" color="#666">
            27 supporters
          </Typography>
        </Stack>
        <Container maxWidth="md">
          <Grid container mt={4} columnSpacing={3} rowSpacing={3}>
            <Grid item xs={12} md={6}>
              <Stack spacing={3}>
                <Box
                  sx={{
                    borderRadius: "5px",
                    border: "1px solid #d2d2d2",
                  }}
                  px={2}
                  py={2}
                >
                  <Typography variant="body1">
                    Hey 👋 I created a page here. You can buy me a coffee ☕.
                  </Typography>
                  <Stack direction="row" spacing={2} mt={3}>
                    <GitHub fontSize="large" />
                    <Language fontSize="large" />
                  </Stack>
                </Box>
                <Stack spacing={2}>
                  <Typography variant="body1">Recent Supporters</Typography>
                  {[1].map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        borderRadius: "5px",
                        border: "1px solid #d2d2d2",
                      }}
                      px={2}
                      py={2}
                    >
                      <Stack
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        spacing={2}
                      >
                        <img
                          src={
                            "https://cdn.buymeacoffee.com/uploads/profile_pictures/2022/06/HRSW0988nOStDyt9.jpeg@300w_0e.webp"
                          }
                          style={{
                            height: "52px",
                            width: "auto",
                            borderRadius: "50%",
                          }}
                          alt="user"
                        />
                        <Stack spacing={1}>
                          <Typography variant="subtitle1" fontWeight="bold">
                            Hi, Rajesh Joshi
                          </Typography>
                          <Box
                            key={index}
                            sx={{
                              borderRadius: "5px",
                              border: "0.5px solid rgba(255,129,63,0.5)",
                              bgcolor: "rgba(255,129,63,0.05)",
                            }}
                            px={2}
                            py={2}
                          >
                            <Typography variant="body2">
                              found your dev.to for hitch and found it super
                              cool, would love to connect
                              https://calendly.com/paul-three30/google-meet-w-paul-from-moonbounce
                            </Typography>
                          </Box>
                          <Stack direction="row" spacing={2}>
                            <Typography
                              variant="caption"
                              sx={{ color: "#666" }}
                            >
                              Reply
                            </Typography>
                            <Typography
                              variant="caption"
                              sx={{ color: "#666" }}
                            >
                              Share
                            </Typography>
                          </Stack>
                        </Stack>
                      </Stack>
                    </Box>
                  ))}
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  borderRadius: "5px",
                  border: "1px solid #d2d2d2",
                }}
                px={2}
                py={2}
              >
                <Typography variant="h6" fontWeight="bolder">
                  Become a{" "}
                  <span
                    style={{
                      color: "#666",
                    }}
                  >
                    Caffeine Contributor
                  </span>
                </Typography>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={3}
                  mt={2}
                >
                  <Typography variant="h4">☕</Typography>
                  <Close
                    fontSize="small"
                    sx={{
                      color: "#d2d2d2",
                    }}
                  />
                  <DefaultCount value={1} selected />
                  <DefaultCount value={3} />
                  <DefaultCount value={5} />
                  <CustomCount />
                </Stack>
                <CustomTextField
                  multiline
                  fullWidth
                  minRows={3}
                  maxRows={6}
                  variant="filled"
                  type="text"
                  sx={{
                    marginTop: "10px",
                  }}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Send privately"
                />
                <Button
                  fullWidth
                  variant="contained"
                  disableElevation
                  color="inherit"
                >
                  Support $5
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Stack>
    </Container>
  );
}
