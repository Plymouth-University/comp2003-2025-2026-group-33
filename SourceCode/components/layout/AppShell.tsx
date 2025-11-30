// components/layout/AppShell.tsx
"use client";

import { ReactNode, useEffect, useState } from "react";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Modal } from "@/components/ui/Modal";
import { Input } from "@/components/ui/Input";
import { Select, Option } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { useForm, Controller } from "react-hook-form";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useModalContext } from "@/context/ModalContext";

interface AppShellProps {
  children: ReactNode;
}

interface LoginForm {
  email: string;
  password: string;
}

interface SignupForm {
  contactPerson: string;
  email: string;
  password: string;
  contactNumber: string;
  companyName: string;
  industry: string;
}

export function AppShell({ children }: AppShellProps) {
  const [showMenu, setShowMenu] = useState(false);
  const isMobile = useMediaQuery("(max-width: 767px)");

  const {
    handleSubmit: handleSubmitLogin,
    control: controlLogin,
    reset: resetLogin,
  } = useForm<LoginForm>({
    defaultValues: { email: "", password: "" },
  });

  const {
    handleSubmit: handleSubmitSignup,
    control: controlSignup,
    reset: resetSignup,
  } = useForm<SignupForm>({
    defaultValues: {
      contactPerson: "",
      email: "",
      password: "",
      contactNumber: "",
      companyName: "",
      industry: "Others",
    },
  });

  const { modalName, setModalName } = useModalContext();
  const [signupTitle, setSignupTitle] = useState<string | undefined>(undefined);

  useEffect(() => {
    setSignupTitle(undefined);
    switch (modalName) {
      case "signup2":
        setSignupTitle("Register Now!");
        break;
      default:
        break;
    }
  }, [modalName]);

  const isLoginOpen = modalName === "login";
  const isSignupOpen = modalName === "signup" || modalName === "signup2";

  const onSubmitLogin = handleSubmitLogin((data) => {
    console.log("Login data:", data);
    // TODO: replace with real login API call
    resetLogin();
    setModalName(undefined);
  });

  const onSubmitSignup = handleSubmitSignup((data) => {
    console.log("Signup data:", data);
    // TODO: replace with real signup API call
    resetSignup();
    setModalName(undefined);
  });

  return (
    <div className="flex h-screen flex-1 flex-col">
      <Navbar
        isOpen={showMenu && isMobile}
        onClickLogin={() => setModalName("login")}
        onClickStartFreeTrial={() => setModalName("signup")}
        onToggleShowMenu={() => setShowMenu(!showMenu)}
      />

      <div
        className={
          "flex flex-1 flex-col" + (showMenu ? "" : " overflow-auto")
        }
      >
        <div id="top" />
        {children}
        <Footer />
      </div>

      {/* LOGIN MODAL */}
      <Modal
        open={isLoginOpen}
        onClose={() => setModalName(undefined)}
        title="Log In"
      >
        <form onSubmit={onSubmitLogin}>
          <Controller
            name="email"
            control={controlLogin}
            rules={{ required: "Email is required" }}
            render={({ field, fieldState }) => (
              <Input
                {...field}
                type="email"
                label="Email"
                placeholder="you@example.com"
                error={fieldState.error?.message}
              />
            )}
          />

          <Controller
            name="password"
            control={controlLogin}
            rules={{ required: "Password is required" }}
            render={({ field, fieldState }) => (
              <Input
                {...field}
                type="password"
                label="Password"
                placeholder="••••••••"
                error={fieldState.error?.message}
              />
            )}
          />

          <div className="mt-4 flex justify-end gap-2">
            <Button
              type="button"
              variant="ghost"
              onClick={() => setModalName(undefined)}
            >
              Cancel
            </Button>
            <Button type="submit">Log In</Button>
          </div>
        </form>
      </Modal>

      {/* SIGNUP MODAL */}
      <Modal
        open={isSignupOpen}
        onClose={() => setModalName(undefined)}
        title={signupTitle ?? "Start Free Trial"}
      >
        <form onSubmit={onSubmitSignup}>
          <Controller
            name="contactPerson"
            control={controlSignup}
            rules={{ required: "Contact person is required" }}
            render={({ field, fieldState }) => (
              <Input
                {...field}
                label="Contact person"
                placeholder="Full name"
                error={fieldState.error?.message}
              />
            )}
          />

          <Controller
            name="email"
            control={controlSignup}
            rules={{ required: "Email is required" }}
            render={({ field, fieldState }) => (
              <Input
                {...field}
                type="email"
                label="Email"
                placeholder="you@example.com"
                error={fieldState.error?.message}
              />
            )}
          />

          <Controller
            name="password"
            control={controlSignup}
            rules={{ required: "Password is required" }}
            render={({ field, fieldState }) => (
              <Input
                {...field}
                type="password"
                label="Password"
                placeholder="Create a password"
                error={fieldState.error?.message}
              />
            )}
          />

          <Controller
            name="contactNumber"
            control={controlSignup}
            render={({ field, fieldState }) => (
              <Input
                {...field}
                label="Contact number"
                placeholder="+44 1234 567890"
                error={fieldState.error?.message}
              />
            )}
          />

          <Controller
            name="companyName"
            control={controlSignup}
            render={({ field, fieldState }) => (
              <Input
                {...field}
                label="Company name"
                placeholder="Company Ltd"
                error={fieldState.error?.message}
              />
            )}
          />

          <Controller
            name="industry"
            control={controlSignup}
            render={({ field, fieldState }) => (
              <Select
                {...field}
                label="Industry"
                error={fieldState.error?.message}
              >
                <Option value="Retail">Retail</Option>
                <Option value="FoodAndBeverage">
                  Food &amp; Beverage
                </Option>
                <Option value="Tech">Tech</Option>
                <Option value="Others">Others</Option>
              </Select>
            )}
          />

          <div className="mt-4 flex justify-end gap-2">
            <Button
              type="button"
              variant="ghost"
              onClick={() => setModalName(undefined)}
            >
              Cancel
            </Button>
            <Button type="submit">Create Account</Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
