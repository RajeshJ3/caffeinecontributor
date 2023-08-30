import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "#141E30",
      }}
      mt={5}
      px={2}
      py={5}
    >
      <Typography
        align="center"
        variant="body2"
        sx={{
          width: "100%",
          color: "#e2e2e2",
        }}
      >
        Build for the community by @RajeshJ3
      </Typography>
    </Box>
  );
}
