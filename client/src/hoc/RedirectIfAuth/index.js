import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { login } from "../../redux/auth/authSlice";

import { getUserCredentials } from "../../utils/helpers";
import urls from "../../utils/urls.json";

export default function RedirectIfAuth({ children }) {
  const [loading, setLoading] = useState(true);

  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    const credentials = getUserCredentials();
    if (
      credentials.accessToken &&
      credentials.refreshToken &&
      credentials.user
    ) {
      dispatch(login(credentials));
      navigate(urls.dashboard.path);
    }
    setLoading(false);
  }, [dispatch, navigate]);

  return loading ? <>Loading..</> : !auth.isAuthenticated ? children : null;
}
