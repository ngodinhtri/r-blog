import styled from "styled-components";
import { Heading } from "@/components/heading";
import { Label } from "@/components/label";
import { InputForm } from "@/components/input";
import { Field } from "@/components/field";
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/button/index.js";
import slugify from "slugify";
import uploadImageToFirebase from "@/firebase/uploadImageToFirebase.js";
import { ImagePaths } from "@/firebase/ImagesPaths.js";
import PostImage from "@/components/post/PostImage.jsx";
import UploadSVG from "@/assets/icons/UploadSVG.jsx";
import { useCategories } from "@/hooks/useCategories.js";
import Select from "react-select";
import { toast } from "react-toastify";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "@/firebase/firebase-config.js";
import * as Yup from "yup";
import { validationField } from "@/firebase/validationField.js";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "@/contexts/useAuth.jsx";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

const validationSchema = Yup.object({
  title: validationField.title,
});

const AddPostPageStyles = styled.div`
  h2 {
    margin-top: 0;
  }

  .form-main {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 50px;
  }

  .preview-image {
    background: ${(props) => props.theme.mainColor};
    display: grid;
    place-content: center;
    height: 300px;
    border-radius: 8px;

    svg {
      width: 40px;
      height: 40px;
    }
  }
`;
export default function AddPostPage() {
  const [image, setImage] = useState(null);
  const { categories } = useCategories();
  const { user } = useAuth(true);

  const {
    watch,
    setValue,
    control,
    handleSubmit,
    formState: { isValid, isSubmitting, errors },
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      title: "",
      slug: "",
      status: 2,
      category: "",
      image: "",
      hot: false,
    },
    resolver: yupResolver(validationSchema),
  });

  const watchHot = watch("hot");

  function handleOnChangeFeaturePost(e, value) {
    setValue("hot", value);
  }

  function onSelectImage(e) {
    const file = e.target.files[0];
    if (!file) return;
    setImage({
      preview: URL.createObjectURL(file),
      file: file,
    });
  }

  async function handleOnSubmit(values) {
    if (!isValid) return;
    try {
      values.slug = slugify(values.slug || values.title);
      values.image = image ? image.file.name : "";
      if (image) uploadImageToFirebase(image.file, ImagePaths.post);
      values.category = values.category?.value;
      values.status = Number(values.status);
      values.createdAt = serverTimestamp();
      values.author = user.uid;

      const colRef = collection(db, "posts");
      await addDoc(colRef, values);
      toast.success("Add post successfully! 🎉");
      reset();
      setImage(null);
    } catch (e) {
      toast(e.message);
    }
  }

  useEffect(() => {
    document.title = "Add new post";
  }, []);

  if (user === null) return null;
  return (
    <AddPostPageStyles>
      <Heading>Add new post</Heading>
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <div className="form-main">
          <Field error={errors.title}>
            <Label htmlFor="title">Title</Label>
            <InputForm
              name="title"
              placeholder="Enter title"
              control={control}
            />
          </Field>
          <Field>
            <Label htmlFor="slug">Slug</Label>
            <InputForm name="slug" placeholder="Enter slug" control={control} />
          </Field>

          <Field>
            <Label>Category</Label>
            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={[
                    ...categories.map((item) => {
                      return { value: item.id, label: item.name };
                    }),
                  ]}
                />
              )}
            />
          </Field>
          <Field>
            <Label htmlFor="image">
              Image
              <input
                id={"image"}
                name="image"
                type="file"
                onChange={onSelectImage}
                style={{ visibility: "hidden" }}
              />
              {image ? (
                <PostImage
                  url={image.preview}
                  size={"l"}
                  alt={"preview image"}
                />
              ) : (
                <div className={"preview-image"}>
                  <UploadSVG />
                </div>
              )}
            </Label>
          </Field>
          <Field>
            <Label htmlFor="hot">Feature post</Label>
            <ToggleButtonGroup
              exclusive
              color="primary"
              value={watchHot}
              onChange={handleOnChangeFeaturePost}
            >
              <ToggleButton value={true}>True</ToggleButton>
              <ToggleButton value={false}>False</ToggleButton>
            </ToggleButtonGroup>
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
                    label="Pending"
                  />
                  <FormControlLabel
                    value={3}
                    control={<Radio />}
                    label="Reject"
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
          Add new Post
        </Button>
      </form>
    </AddPostPageStyles>
  );
}
