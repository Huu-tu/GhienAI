export interface BlogPayload {
  _id?: number;
  title?: string;
  shortDescription?: string;
  description?: string;
  image?: File | null;
  type?: string;
}

export interface BlogPost {
  _id?: string;
  title?: string;
  shortDescription?: string;
  image?: string;
  description?: string;
  type?: string;
  createdAt?: string
  estimatedTimeToRead?: string
}

export interface BlogCardProps {
  post: BlogPost;
  link?: string;
}

export interface BlogListProps {
  posts?: BlogPost[];
  page?: number;
  totalPages?: number
  onPageChange?: (page: number) => void
  type?: 'vertical' | 'horizontal';
  link?: string;
}

export interface CaseStudyPayload {
  title?: string;
  shortDescription?: string;
  description?: string;
  image?: File | null;
  type?: string;
}

export interface CaseStudyPost {
  _id?: string;
  title?: string;
  shortDescription?: string;
  image?: string;
  description?: string;
  type?: string;
  createdAt?: string
  estimatedTimeToRead?: string;
}

export interface Document{
  id: string
  name?: string
  fileUrl?: string
  fileType?: string
  fileSize?: string
}

export interface UploadFile{
  id: string
  name?: string
  size: number
  progress?: number
  status?: "uploading" | "success" | "error"
  file?: File
}

export type DownloadFile = {
  url?: string
  filename?: string
}

export interface UploadFilePayload {
  file?: File | null;
}

export interface  EditorProps {
  value?: string;
  onChange: (data: string) => void;
}

export interface BlogPagination {
  page: number
  limit: number
  total: number
  totalPages: number
}

export type GetBlogsResponse = {
  data: BlogPost[]
  pagination: BlogPagination
}

export type UseGetBlogsParams = {
  page: number
  limit: number
  q?: string
}