"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import { SongTypes } from "@/types";
import { useSearchParams } from "next/navigation";
import { isYoutubeURL, getYouTubeId } from "@/lib/utils";
export default function Watch() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("v");
  const url = "https://youtube.com/watch?v=" + id;
  React.useEffect(() => {
    if (!isYoutubeURL(url) && !getYouTubeId(url)) {
      router.push("/");
    }
  });
  return (
    <div>
      Watch: {id} {url}
    </div>
  );
}

// async function getSong(url: string): Promise<SongTypes> {
//   if (!isYoutubeURL(url) && !getYouTubeId(url)) {
//     throw new Error("Invalid YouTube URL");
//   }

//   return fetch("/api/yt", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       url,
//     }),
//   }).then(async (res) => {
//     if (!res.ok) {
//       const body = await res.json();
//       if (body.message) {
//         throw new Error(body.message);
//       }
//       throw new Error(`Error downloading YouTube music (${res.statusText})`);
//     }

//     const blob = await res.blob();
//     const metadata = {
//       id,
//       title: decodeURI(res.headers.get("Title")),
//       author: decodeURI(res.headers.get("Author")),
//       coverUrl: decodeURI(res.headers.get("Thumbnail")),
//     };

//     const fileUrl = URL.createObjectURL(blob);
//     return { fileUrl, metadata };
//   });
// }
