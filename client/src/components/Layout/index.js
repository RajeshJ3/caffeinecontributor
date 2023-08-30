// components
import Header from "../Header";
import Footer from "../Footer";
import Notify from "../Notify";

import { Container, Stack } from "@mui/material";

// Layout Component: Defines the structure of the application
export default function Layout({ children }) {
  return (
    <Container
      sx={{
        backgroundColor: "#f2f2f2",
        padding: "0px !important",
      }}
      maxWidth={false}
    >
      <Stack
        direction="column"
        spacing={0}
        justifyContent="space-between"
        sx={{
          minHeight: "100vh",
        }}
      >
        <Stack direction="column" spacing={0} justifyContent="flex-start">
          <Header />
          {children}
        </Stack>
        <Footer />
      </Stack>
      <Notify />
    </Container>
  );
}
