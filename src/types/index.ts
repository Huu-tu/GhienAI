export interface BlogPayload {
  _id?: number;
  title?: string;
  paragraph?: string;
  content?: string;
  image?: File | null;
  type?: string;
}

export interface BlogPost {
  _id?: string;
  title?: string;
  paragraph?: string;
  image?: string;
  content?: string;
  type?: string;
  publishDate?: string
  estimatedTimeToRead?: string
}