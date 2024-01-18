import styled from "styled-components";
import logo from "@/assets/logo.svg";
import { Label } from "@/components/label";
import { Input } from "@/components/input";
import { useForm } from "react-hook-form";
import { SearchIconSVG } from "@/assets/icons/index.js";

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

  .field {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export default function SignUpPage() {
  const {
    control,
    handleSubmit,
    formState: { isValid, isSubmitting, errors },
  } = useForm({});

  function handleOnSubmit() {}

  return (
    <SignUpPageStyles>
      <img src={logo} alt="logo" className={"logo"} />
      <h1>R - Blog</h1>
      <form>
        <div className="field" onSubmit={handleSubmit(handleOnSubmit)}>
          <Label htmlFor="fullname">Fullname</Label>
          <Input
            name="fullname"
            placeholder="Enter your fullname"
            control={control}
          />
        </div>
      </form>
    </SignUpPageStyles>
  );
}
