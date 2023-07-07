import { createContext, useContext, useEffect, useState } from "react";
import { baseUrl } from "../helpers/helper";
import { useNavigate } from "react-router-dom";

const authProvider = createContext(false);

export const Authentications = ({ children }) => {
  const [controller, setcontroller] = useState(false);
  const [admin, setAdmin] = useState(false);
  const Url = baseUrl;
  const token = localStorage.getItem("token");
  const navigator = useNavigate();

  useEffect(() => {
    if (token === null || undefined) {
      localStorage.removeItem("token");
      navigator("/");
    } else {
      const fetchingAuth = async () => {
        await fetch(Url + "admin/auth", {
          method: "get",
          headers: { "content-type": "application/json", ADMIN_HEADER: token },
        })
          .then((res) => res.json())

          .then((data) => {
            if (data.success) {
              setAdmin(true);
              setcontroller(true)
            } else {
              setAdmin(false);
              setcontroller(false)
              localStorage.removeItem("token");
            }
          });
      };
      fetchingAuth();
    }
  }, [Url]);

  return (
    <authProvider.Provider value={{ admin, controller }}>{children}</authProvider.Provider>
  );
};
export const Auth = () => {
  return useContext(authProvider);
};
