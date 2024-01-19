import styled from "styled-components";
import logo from "@/assets/logo.svg";
import { Label } from "@/components/label";
import { Input } from "@/components/input";
import { useForm } from "react-hook-form";
import { Field } from "@/components/field";
import { Button } from "@/components/button";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const validationSchema = Yup.object({
  fullname: Yup.string()
    .required("Required")
    .max(20, "Must be 20 characters or less!"),
  email: Yup.string().email("Email is invalid").required("Required"),
  password: Yup.string()
    .required("Required")
    .matches(
      /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gm,
      "Password must contain 0-9, A-z & special letter. Length 8 - 16",
    ),
});

const SignUpPageStyles = styled.div`
  height: 100dvh;
  padding: 40px;

  .logo {
    margin: 0 auto;
    width: 150px;
    height: 150px;
  }

  h1 {
    text-align: center;
    font-size: 40px;
    font-weight: 600;
  }

  form {
    max-width: 800px;
    margin: 0 auto;
  }
`;

export default function SignUpPage() {
  const {
    control,
    handleSubmit,
    formState: { isValid, isSubmitting, errors },
    reset,
  } = useForm({ resolver: yupResolver(validationSchema) });

  function handleOnSubmit(values) {
    if (!isValid) return;

    return new Promise((resolve) => setTimeout(() => resolve(), 5000));
  }

  return (
    <SignUpPageStyles>
      <img src={logo} alt="logo" className={"logo"} />
      <h1>R - Blog</h1>
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <Field error={errors.fullname}>
          <Label htmlFor="fullname">Fullname</Label>
          <Input
            name="fullname"
            placeholder="Enter your fullname"
            control={control}
          />
        </Field>
        <Field error={errors.email}>
          <Label htmlFor="email">Email</Label>
          <Input
            type={"email"}
            name="email"
            placeholder="Enter your emnail"
            control={control}
          />
        </Field>
        <Field error={errors.password}>
          <Label htmlFor="password">Password</Label>
          <Input
            type={"password"}
            name="password"
            placeholder="Enter your password"
            control={control}
          />
        </Field>
        <Button
          isLoading={isSubmitting}
          type={"submit"}
          style={{ maxWidth: "33%", margin: "0 auto" }}
        >
          Sign Up
        </Button>
      </form>
    </SignUpPageStyles>
  );
}
