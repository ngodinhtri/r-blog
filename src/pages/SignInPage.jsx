import * as Yup from "yup";
import { validationField } from "@/firebase/validationField.js";
import { AuthPageLayout } from "@/layouts";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Field } from "@/components/field";
import { Label } from "@/components/label";
import { InputForm } from "@/components/input";
import { Button } from "@/components/button";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/firebase-config.js";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const validationSchema = Yup.object({
  email: validationField.email,
  password: validationField.password,
});

export function SignInPage() {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { isValid, isSubmitting, errors },
    reset,
  } = useForm({ resolver: yupResolver(validationSchema) });

  async function handleOnSubmit(values) {
    if (!isValid) return;
    const { email, password } = values;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Signed in successfully! 🎉", { autoClose: 800 });
      navigate("/");
      reset();
    } catch (e) {
      toast.error(e.code);
      console.log(e.message);
    }
  }

  useEffect(() => {
    document.title = "Sign In";
  }, []);

  return (
    <AuthPageLayout>
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <Field error={errors.email}>
          <Label htmlFor="email">Email</Label>
          <InputForm
            type={"email"}
            name="email"
            placeholder="Enter your emnail"
            control={control}
          />
        </Field>
        <Field error={errors.password}>
          <Label htmlFor="password">Password</Label>
          <InputForm
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
          Sign In
        </Button>
      </form>
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        Does not have an account ? <Link to={"/sign-up"}>Sign up!</Link>
      </div>
    </AuthPageLayout>
  );
}
