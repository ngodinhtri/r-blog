import styled from "styled-components";
import logo from "@/assets/logo.svg";
import { Label } from "@/components/label";
import { Input } from "@/components/input";
import { useForm } from "react-hook-form";
import { Field } from "@/components/field";
import { Button } from "@/components/button";

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
  } = useForm({});

  function handleOnSubmit(values) {
    if (!isValid) return;

    return new Promise((resolve) => setTimeout(() => resolve(), 5000));
  }

  return (
    <SignUpPageStyles>
      <img src={logo} alt="logo" className={"logo"} />
      <h1>R - Blog</h1>
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <Field>
          <Label htmlFor="fullname">Fullname</Label>
          <Input
            name="fullname"
            placeholder="Enter your fullname"
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
