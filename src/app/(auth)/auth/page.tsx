"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, TLoginSchema } from "@/lib/schema";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import styles from "./styles.module.scss";
import useWindowWidth from "@/hooks/useWindowWidth";
import { useUserData } from "@/hooks/useUserData";

const Login = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const formElementsWidth = useWindowWidth("50%", "90%");
  const { login } = useUserData();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<TLoginSchema> = async (data) => {
    setIsLoading(true);
    setApiError(null);
    console.log("Form submitted with:", data);

    try {
      const response = await fetch(
        "https://randomuser.me/api/?results=1&nat=us"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch user data.");
      }
      const userData = await response.json();
      const user = userData.results[0];
      login(user);

      router.push("/dashboard");
    } catch (error) {
      console.error("Login process failed:", error);
      setApiError("An error occurred while logging in. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles["login-page-container"]}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles["login-form"]}>
        <h1 className={styles["form-title"]}>
          <strong>Login</strong>
        </h1>

        <Input
          label={"phone number"}
          type="tel"
          {...register("phoneNumber")}
          error={errors.phoneNumber?.message}
          width={formElementsWidth}
        />

        <Input
          label={"password"}
          type="password"
          {...register("password")}
          error={errors.password?.message}
          width={formElementsWidth}
        />

        {apiError && <p className={styles["api-error"]}>{apiError}</p>}

        <Button
          type="submit"
          disabled={!isValid || isLoading}
          isLoading={isLoading}
          width={formElementsWidth}
        >
          submit
        </Button>
      </form>

      <div className={styles["login-page-image"]}>
        <img
          src={"/images/login/people.svg"}
          alt="people svg"
          className={styles["page-image"]}
        />
      </div>
    </div>
  );
};

export default Login;
