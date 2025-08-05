"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/button";
import { toast } from "react-toastify";
import styles from "./styles.module.scss";
import { useUserData } from "@/hooks/useUserData";

const Dashboard = () => {
  const router = useRouter();
  const { isAuthenticated, user, logout } = useUserData();
  const toastShownRef = useRef(false);
  const pfpRef = useRef<HTMLImageElement>(null);
  const [pfpTopPosition, setPfpTopPosition] = useState<number | undefined>(
    undefined
  );

  useEffect(() => {
    if (!isAuthenticated && !toastShownRef.current) {
      toast.error("You must be logged in to view the dashboard.");
      toastShownRef.current = true;
      router.push("/auth");
    }
  }, [isAuthenticated, router]);

  const handleImageLoad = () => {
    if (!pfpRef.current) return;
    const topPosition = (pfpRef.current.height / 100) * 60;
    setPfpTopPosition(topPosition);
  };

  const handleLogout = () => {
    toastShownRef.current = true;
    toast.info("You have been logged out.");
    logout();
    router.push("/auth");
  };

  if (!isAuthenticated || !user) {
    return null;
  }

  const username = `${user.name.title}. ${user.name.first} ${user.name.last}`;

  return (
    <div
      className={styles["dashboard-container"]}
      style={{
        paddingTop:
          pfpTopPosition !== undefined ? `${pfpTopPosition}px` : undefined,
      }}
    >
      <h1
        style={{
          marginBottom:
            pfpTopPosition !== undefined
              ? `${pfpTopPosition + 20}px`
              : undefined,
        }}
        className={styles["title"]}
      >
        Welcome to the Dashboard, {user.name.first} {user.name.last}!
      </h1>

      <div
        className={styles["general-details-section"]}
        style={{
          paddingTop:
            pfpTopPosition !== undefined ? `${pfpTopPosition}px` : undefined,
        }}
      >
        <img
          src={user.picture.large}
          alt="User"
          className={styles["user-pfp"]}
          ref={pfpRef}
          onLoad={handleImageLoad}
          style={{
            top:
              pfpTopPosition !== undefined ? `-${pfpTopPosition}px` : undefined,
          }}
        />

        <div className={styles["details-section"]}>
          <span>username: {username}</span>
          <span>email: {user.email}</span>
        </div>

        <div className={styles["details-section"]}>
          <span>city: {user.location.city}</span>
          <span>state: {user.location.state}</span>
          <span>country: {user.location.country}</span>
        </div>
      </div>

      <div style={{ width: "200px" }}>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </div>
  );
};

export default Dashboard;
