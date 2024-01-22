import { getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { toast } from "react-toastify";

export default function uploadImageToFirebase(file, path) {
  const storage = getStorage();
  // Upload file and metadata to the object 'images/mountains.jpg'
  const storageRef = ref(storage, `${path}/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);

  // Listen for state changes, errors, and completion of the upload.
  uploadTask.on(
    "state_changed",
    null,
    (error) => {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      toast(error.message);
    },
    () => {
      // Upload completed successfully, now we can get the download URL
      console.log("upload image complete");
    },
  );
}
