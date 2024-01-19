import { Label } from "@/components/label";
import { InputForm } from "@/components/input";
import { useForm } from "react-hook-form";
import { Field } from "@/components/field";
import { Button } from "@/components/button";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "@/firebase/firebase-config.js";
import { toast } from "react-toastify";
import { AuthPageLayout } from "@/layouts";
import { validationField } from "@/firebase/validationField.js";
import { Link, useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  fullname: validationField.fullname,
  email: validationField.email,
  password: validationField.password,
});

export default function SignUpPage() {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { isValid, isSubmitting, errors },
    reset,
  } = useForm({ resolver: yupResolver(validationSchema) });

  async function handleOnSubmit(values) {
    if (!isValid) return;
    const { fullname, email, password } = values;

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName: fullname });

      const colRef = collection(db, "users");
      await addDoc(colRef, {
        fullname,
        email,
        password,
      });

      toast.success("Signed up successfully! 🎉");
      await auth.signOut();
      navigate("/sign-in");
      reset();
    } catch (e) {
      toast.error(e.code);
      console.log(e.message);
    }
  }

  return (
    <AuthPageLayout>
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <Field error={errors.fullname}>
          <Label htmlFor="fullname">Fullname</Label>
          <InputForm
            name="fullname"
            placeholder="Enter your fullname"
            control={control}
          />
        </Field>
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
          Sign Up
        </Button>
      </form>
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        Already have an account ? <Link to={"/sign-up"}>Sign in!</Link>
      </div>
    </AuthPageLayout>
  );
}
