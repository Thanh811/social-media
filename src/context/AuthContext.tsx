import { getCurrentUser } from "@/lib/appwrite/api";
import { IUser } from "@/types";
import React, { useEffect, useState } from "react";
import { AuthContext, INITIAL_USER } from "./useContext";
import { useNavigate, useSearchParams } from "react-router-dom";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [param] = useSearchParams();
  const [user, setUser] = useState<IUser>(INITIAL_USER);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()

  const checkAuthUser = async () => {
    setIsLoading(true);
    try {
      const currentAccount = await getCurrentUser();
      if (!currentAccount) {
        return false;
      }
      setUser({
        id: currentAccount.$id,
        name: currentAccount.name,
        username: currentAccount.username,
        email: currentAccount.email,
        imageUrl: currentAccount.imageUrl,
        bio: currentAccount.bio,
      });
      setIsAuthenticated(true);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect((() => {
    if (param.get("userId") && param.get("secret")) return
    const cookieFallback = localStorage.getItem("cookieFallback");
    if (!!cookieFallback && cookieFallback !== "[]") {
      checkAuthUser()
      return
    }
    navigate("/sign-in");
  }), [])

  const value = {
    user,
    setUser,
    isLoading,
    isAuthenticated,
    setIsAuthenticated,
    checkAuthUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
