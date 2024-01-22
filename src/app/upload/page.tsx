"use client";

import { useState } from "react";
import axios from "axios";

const NewPage = () => {
  console.log("NEXT_PUBLIC_API", process.env.NEXT_PUBLIC_API);
  const apiurl = process.env.NEXT_PUBLIC_API;
  const [file, setFile] = useState<File>();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(file);
    if (!file) return;

    try {
      const res = await axios.post(`${apiurl}/storage/presigned`, {
        filename: file.name,
      });
      // handle the error
      console.log("presign response", res);

      // TODO next PUT
      const data = new FormData();
      data.set("file", file);
      const resPut = await axios.putForm(res.data.data, data, {
        onUploadProgress: (e) => console.log(e),
      });

      console.log("put res", resPut);
    } catch (e: any) {
      // Handle errors here
      console.error(e);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="file"
        name="file"
        onChange={(e) => {
          console.log(e.target.files?.[0]);
          setFile(e.target.files?.[0]);
        }}
      />
      <input type="submit" value="Upload" />
    </form>
  );
};

export default NewPage;
