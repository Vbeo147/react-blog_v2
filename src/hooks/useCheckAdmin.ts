import { useEffect, useState } from "react";
import { authService } from "../firebase";

export const useCheckAdmin = () => {
  const [isAdmin, setAdmin] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setAdmin(user.providerData[0]?.uid === import.meta.env.VITE_ADMIN_ID);
      } else {
        setAdmin(false);
      }
    });
  }, []);
  return isAdmin;
};
