export type SongTypes = {
  fileUrl: string;
  metadata: {
    id: string | null;
    title: string;
    author: string;
    coverUrl: string;
  };
};
