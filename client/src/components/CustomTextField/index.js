import { Edit } from "@mui/icons-material";
import { Input, InputLabel, Stack, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CustomTextField = styled(TextField)(({ theme }) => ({
  marginBottom: "20px",
  "label + &": {
    marginTop: theme.spacing(2),
  },
  "& .MuiInputBase-input": {
    borderBottom: "0px",
    fontSize: 16,
    padding: "10px 12px",
  },
}));

export const CustomInput = styled(Input)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(2),
  },
  "& .MuiInputBase-input": {
    borderBottom: "0px",
    fontSize: 16,
    padding: "10px 12px",
  },
}));

export const CustomInputLabel = ({ label, editAction }) => (
  <InputLabel
    variant="standard"
    style={{
      marginTop: "0px",
      width: "100%",
    }}
  >
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Typography
        style={{
          fontSize: "14px",
          fontWeight: "400",
          lineHeight: "19px",
          letterSpacing: "0em",
          textAlign: "left",
          color: "#4A4A4A",
        }}
      >
        {label}
      </Typography>
      {editAction && (
        <Edit
          onClick={editAction}
          color="primary"
          style={{
            height: "16px",
            width: "16px",
            cursor: "pointer",
          }}
        />
      )}
    </Stack>
  </InputLabel>
);
