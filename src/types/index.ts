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
  publishDate?: string
  estimatedTimeToRead?: string
}

export interface BlogCardProps {
  post: BlogPost;
  link?: string;
}

export interface BlogListProps {
  posts: BlogPost[];
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
  publishDate?: string
  estimatedTimeToRead?: string
}