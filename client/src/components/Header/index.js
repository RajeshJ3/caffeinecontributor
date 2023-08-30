import { useSelector } from "react-redux";

import { Container, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import urls from "../../utils/urls.json";
import logo from "../../assets/192.png";
import { OpenInNew, Menu } from "@mui/icons-material";

export default function Header() {
  const auth = useSelector((state) => state.auth);

  return (
    <Container
      maxWidth="md"
      sx={{
        paddingTop: "20px",
        paddingBottom: "30px",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          backgroundColor: "#fff",
          borderRadius: "25px",
        }}
        px={4}
        py={1.5}
      >
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={3}
        >
          <Typography component={Link} to={urls.home.path} mr={1.5}>
            <img src={logo} alt="logo" style={{
              height: "52px",
              width: "52px",
            }} />
          </Typography>
          <Typography
            variant="subtitle1"
            component={Link}
            to={urls.dashboard.path}
            fontWeight={500}
            sx={{
              color: "#141E30",
              display: {
                xs: "none",
                md: "block",
              },
            }}
          >
            Dashboard
          </Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={3}
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
          }}
        >
          {auth.isAuthenticated ? (
            <Typography
              variant="subtitle1"
              component={Link}
              to={urls.settings.path}
              fontWeight={500}
              sx={{
                color: "#141E30",
              }}
            >
              Settings
            </Typography>
          ) : (
            <Typography
              variant="subtitle1"
              component={Link}
              to={urls.login.path}
              fontWeight={500}
              sx={{
                color: "#141E30",
              }}
            >
              Login
            </Typography>
          )}
          {auth.isAuthenticated ? (
            <Typography
              variant="subtitle1"
              fontWeight={500}
              sx={{
                backgroundColor: "#141E30",
                color: "#fff",
                borderRadius: "20px",
              }}
              px={2}
              py={0.5}
            >
              View page
              <OpenInNew
                sx={{
                  color: "#fff",
                  fontSize: "14px",
                  marginTop: "-5px",
                  marginLeft: "5px",
                }}
              />
            </Typography>
          ) : (
            <Typography
              variant="subtitle1"
              fontWeight={500}
              component={Link}
              to={urls.signup.path}
              sx={{
                backgroundColor: "#141E30",
                color: "#fff",
                borderRadius: "20px",
              }}
              px={2}
              py={0.5}
            >
              Sign up
            </Typography>
          )}
        </Stack>
        <Menu
          sx={{
            display: {
              xs: "block",
              md: "none",
            },
          }}
        />
      </Stack>
    </Container>
  );
}
