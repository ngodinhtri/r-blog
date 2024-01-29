import { Heading } from "@/components/heading/index.js";
import styled from "styled-components";
import { Field } from "@/components/field/index.js";
import { Label } from "@/components/label/index.js";
import { InputForm } from "@/components/input/index.js";
import * as Yup from "yup";
import { validationField } from "@/firebase/validationField.js";
import slugify from "slugify";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, isCategoryExisted } from "@/firebase/firebase-config.js";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/button/index.js";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

const AddPostCategoryStyles = styled.div`
  h2 {
    margin-top: 0;
  }

  .form-main {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 50px;
  }
`;

const validationSchema = Yup.object({
  name: validationField.name,
});
export default function AddCategoryPage() {
  const {
    control,
    handleSubmit,
    formState: { isValid, isSubmitting, errors },
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      slug: "",
      status: 2,
    },
    resolver: yupResolver(validationSchema),
  });

  async function handleOnSubmit(values) {
    if (!isValid) return;
    try {
      values.slug = slugify(values.slug || values.name, { lower: true });

      await isCategoryExisted(values.name, values.slug);

      values.status = Number(values.status);
      values.createdAt = serverTimestamp();

      const colRef = collection(db, "categories");
      await addDoc(colRef, values);
      toast.success("Add category successfully! 🎉");
      reset();
    } catch (e) {
      toast.error(e.message);
    }
  }

  return (
    <AddPostCategoryStyles>
      <Heading>Add new category</Heading>
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <div className="form-main">
          <Field error={errors.name}>
            <Label htmlFor="name">Name</Label>
            <InputForm name="name" placeholder="Enter name" control={control} />
          </Field>
          <Field>
            <Label htmlFor="slug">Slug</Label>
            <InputForm name="slug" placeholder="Enter slug" control={control} />
          </Field>
          <Field>
            <Label htmlFor="radio-buttons">Status</Label>
            <Controller
              render={({ field }) => (
                <RadioGroup row defaultValue={2} {...field}>
                  <FormControlLabel
                    value={1}
                    control={<Radio />}
                    label="Approved"
                  />
                  <FormControlLabel
                    value={2}
                    control={<Radio />}
                    label="Unapproved"
                  />
                </RadioGroup>
              )}
              name={"status"}
              control={control}
            />
          </Field>
        </div>
        <Button
          isLoading={isSubmitting}
          type={"submit"}
          style={{ maxWidth: "33%", margin: "0 auto" }}
        >
          Add new category
        </Button>
      </form>
    </AddPostCategoryStyles>
  );
}
