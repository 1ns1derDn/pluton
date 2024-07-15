"use client";
// react
import React, { createContext, useState, useContext, useEffect } from "react";

// utils
import { getTokenFromStorage, removeTokenFromStorage } from "@/core/utils";
import { useRouter, usePathname } from "next/navigation";

const accessPage = ["/courses", "/meditation-of-meeting", "/pluton-meditation"];

const AuthContext = createContext<{
  isAuth: boolean;
  logout: () => void;
  setIsAuth: (value: boolean) => void;
  loading: boolean;
}>({
  isAuth: false,
  logout: async () => console.log("logout"),
  setIsAuth: () => console.log("setIsAuth"),
  loading: true,
});

export const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (getTokenFromStorage()) {
      setIsAuth(true);
    }

    if (!getTokenFromStorage() && accessPage.includes(pathname)) {
      router.push("/lk");
    }

    setLoading(false);
  }, [pathname, router]);

  const logout = async () => {
    removeTokenFromStorage();
    setIsAuth(false);
    router.push("/lk");
  };

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
