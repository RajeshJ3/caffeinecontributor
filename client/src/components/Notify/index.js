import { useSelector, useDispatch } from "react-redux";
import { setNotify } from "../../redux/utils/utilsSlice";

import { Alert, Snackbar } from "@mui/material";

export default function CustomizedSnackbars() {
  const notify = useSelector((state) => state.utils.notify);
  const dispatch = useDispatch();

  return (
    <Snackbar
      open={notify.open}
      autoHideDuration={notify.autoHideDuration || 5000}
      anchorOrigin={{
        vertical: notify.vertical || "bottom",
        horizontal: notify.horizontal || "right",
      }}
      onClose={() =>
        dispatch(
          setNotify({
            open: false,
          })
        )
      }
    >
      <Alert severity={notify.severity || "success"} sx={{ width: "100%" }}>
        {notify.action}
      </Alert>
    </Snackbar>
  );
}
