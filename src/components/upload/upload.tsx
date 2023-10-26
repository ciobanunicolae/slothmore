"use client";

import * as React from "react";

import { FieldValues, useForm } from "react-hook-form";

import { isYoutubeURL, getYouTubeId } from "@/lib/utils";

import { Button } from "@/components";

import s from "./upload.module.scss";
import { useRouter } from "next/navigation";

export function Upload() {
  const { register, handleSubmit } = useForm();
  const [error, setError] = React.useState<null | "Invalid Youtube URL">(null);

  const router = useRouter();
  const onSubmit = (data: FieldValues) => {
    if (isYoutubeURL(data.url)) {
      setError(null);
      const id = getYouTubeId(data.url);
      router.push("/watch?v=" + id);
    } else {
      setError("Invalid Youtube URL");
    }
  };
  return (
    <form className={s.container} onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("url", { required: true })}
        placeholder="Enter YouTube URL"
      />
      <div>{error}</div>
      <Button type="submit">Submit</Button>
    </form>
  );
}
``;
