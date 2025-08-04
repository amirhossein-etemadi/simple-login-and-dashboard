"use client";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/button";
import { toast } from "react-toastify";
import { useUserData } from "@/hooks/useUserData";

const Dashboard = () => {
  const router = useRouter();
  const { isAuthenticated, user, logout } = useUserData();
  const toastShownRef = useRef(false);

  useEffect(() => {
    if (!isAuthenticated && !toastShownRef.current) {
      toast.error("برای مشاهده داشبورد باید وارد سیستم شوید.");
      toastShownRef.current = true;
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  const handleLogout = () => {
    logout();
    toast.info("You have been logged out.");
  };

  if (!isAuthenticated || !user) {
    return null;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        gap: "2rem",
      }}
    >
      <img
        src={user.picture.large}
        alt="User"
        style={{ borderRadius: "50%" }}
      />
      <h1>
        Welcome to the Dashboard, {user.name.first} {user.name.last}!
      </h1>
      <p>Your email is: {user.email}</p>
      <div style={{ width: "200px" }}>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </div>
  );
};

export default Dashboard;
