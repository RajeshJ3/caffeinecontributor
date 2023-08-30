import {
  Avatar,
  Box,
  Container,
  Divider,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { MoreHoriz, Square } from "@mui/icons-material";

export default function Dashboard() {
  const logs = [1, 2, 3, 4, 5, 6];

  return (
    <Container maxWidth="md">
      <Stack spacing={3}>
        {/* Stats */}
        <Box
          px={2.5}
          py={2}
          sx={{
            backgroundColor: "#fff",
            borderRadius: "25px",
          }}
        >
          <Stack spacing={2}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={4}
              >
                <Avatar
                  alt="User"
                  src={
                    "https://cdn.buymeacoffee.com/uploads/profile_pictures/2022/06/HRSW0988nOStDyt9.jpeg@300w_0e.webp"
                  }
                  style={{
                    height: "64px",
                    width: "64px",
                  }}
                />
                <Stack>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Hi, Rajesh Joshi
                  </Typography>
                  <Typography component={Link} to="/RajeshJ3" variant="body2">
                    caffeinecontributor.com/RajeshJ3
                  </Typography>
                </Stack>
              </Stack>
              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={3}
              ></Stack>
            </Stack>
            <Divider />
            <Stack>
              <Stack direction="row" spacing={3} alignItems="center">
                <Typography variant="h6" fontWeight="bold">
                  Earnings
                </Typography>
                <Select value={1} size="small">
                  <MenuItem value={1}>Last 7 days</MenuItem>
                  <MenuItem value={2}>Last 30 days</MenuItem>
                  <MenuItem value={3}>Last 90 days</MenuItem>
                  <MenuItem value={4}>All time</MenuItem>
                </Select>
              </Stack>
            </Stack>
            <Typography variant="h4" fontWeight="bolder">
              $1,250
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              {[
                {
                  color: "#FFE3B0",
                  title: "Donations",
                  amount: "1,125",
                },
                {
                  color: "#AEFBFF",
                  title: "Subscriptions",
                  amount: "125",
                },
                {
                  color: "#AEFBFF",
                  title: "Refunds",
                  amount: "0",
                },
              ].map((item, index) => (
                <Stack key={index} direction="row" spacing={1}>
                  <Square
                    sx={{
                      fontSize: "16px",
                      color: item.color,
                    }}
                  />
                  <Typography variant="body2">
                    <b>${item.amount}</b> {item.title}
                  </Typography>
                </Stack>
              ))}
            </Stack>
            <Divider />
            <Stack spacing={3}>
              {logs.length ? (
                <>
                  {logs.map((item, index) => (
                    <Stack
                      key={index}
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Stack
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                        spacing={2}
                      >
                        <Avatar
                          alt="User"
                          src={
                            "https://cdn.buymeacoffee.com/uploads/profile_pictures/default/FF813F/HT.png"
                          }
                          style={{
                            height: "52px",
                            width: "52px",
                          }}
                        />
                        <Stack>
                          <Typography variant="body1" fontWeight="bold">
                            Harshita Arya
                          </Typography>
                          <Typography variant="caption">
                            aryaharshita448@gmail.com
                          </Typography>
                        </Stack>
                      </Stack>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          display: {
                            xs: "none",
                            md: "block",
                          },
                        }}
                      >
                        $5
                      </Typography>
                      <Stack
                        direction="row"
                        justifyContent="flex-end"
                        alignItems="center"
                        spacing={3}
                      >
                        <Typography
                          variant="subtitle1"
                          sx={{
                            display: {
                              xs: "none",
                              md: "block",
                            },
                          }}
                        >
                          5hrs ago
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          fontWeight="bold"
                          sx={{
                            display: {
                              xs: "block",
                              md: "none",
                            },
                          }}
                        >
                          $5
                        </Typography>
                        <MoreHoriz />
                      </Stack>
                    </Stack>
                  ))}
                  <Stack justifyContent="center" alignItems="center">
                    <Typography
                      variant="subtitle1"
                      fontWeight={500}
                      sx={{
                        backgroundColor: "#141E30",
                        color: "#fff",
                        borderRadius: "20px",
                      }}
                      px={5}
                      py={0.5}
                    >
                      Load more
                    </Typography>
                  </Stack>
                </>
              ) : (
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  py={10}
                >
                  <Typography align="center" width={"100%"}>
                    <b>Oops!</b> no payments.
                  </Typography>
                </Stack>
              )}
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}
