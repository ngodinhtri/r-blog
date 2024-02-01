import { Controller, useForm } from "react-hook-form";
import { CATEGORY_STATUS } from "@/utils/constant.js";
import { yupResolver } from "@hookform/resolvers/yup";
import slugify from "slugify";
import {
  db,
  getDocFromDB,
  isCategoryExisted,
} from "@/firebase/firebase-config.js";
import { doc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { Heading } from "@/components/heading/index.js";
import { Field } from "@/components/field/index.js";
import { Label } from "@/components/label/index.js";
import { InputForm } from "@/components/input/index.js";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { Button } from "@/components/button/index.js";
import styled from "styled-components";
import * as Yup from "yup";
import { validationField } from "@/firebase/validationField.js";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { LoadingSpinner } from "@/components/loading/index.js";

const validationSchema = Yup.object({
  name: validationField.name,
});

const UpdateCategoryPageStyled = styled.div`
  h2 {
    margin-top: 0;
  }

  .form-main {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 50px;
  }
`;

export default function UpdateCategoryPage() {
  const [params] = useSearchParams();
  const categoryId = params.get("id");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { isValid, isSubmitting, errors },
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues: {},
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    (async function getCategoryById() {
      const data = await getDocFromDB("categories", categoryId);
      if (data) {
        reset(data);
      } else {
        navigate("/404");
      }
      setLoading(false);
    })();
  }, [categoryId, reset, navigate]);

  async function handleOnSubmit(values) {
    if (!isValid) return;
    try {
      console.log(values);
      values.slug = slugify(values.slug || values.name, { lower: true });

      await isCategoryExisted(values.name, values.slug, categoryId);
      values.status = Number(values.status);

      const colRef = doc(db, "categories", categoryId);
      await updateDoc(colRef, values);
      toast.success("Updated category successfully! 🎉");
    } catch (e) {
      toast.error(e.message);
    }
  }

  if (loading) return <LoadingSpinner />;

  return (
    <UpdateCategoryPageStyled>
      <Heading>Update category</Heading>
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
              name={"status"}
              control={control}
              render={({ field }) => (
                <RadioGroup row {...field}>
                  <FormControlLabel
                    value={CATEGORY_STATUS.approved}
                    control={<Radio />}
                    label="Approved"
                  />
                  <FormControlLabel
                    value={CATEGORY_STATUS.unapproved}
                    control={<Radio />}
                    label="Unapproved"
                  />
                </RadioGroup>
              )}
            />
          </Field>
        </div>
        <Button
          isLoading={isSubmitting}
          type={"submit"}
          style={{ maxWidth: "33%", margin: "0 auto" }}
        >
          Update
        </Button>
      </form>
    </UpdateCategoryPageStyled>
  );
}
