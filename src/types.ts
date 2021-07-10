export type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
  [key: string]: any;
}

export type Comment = {
  postId: number;
  id: number;
  email: string;
  body: string;
  [key: string]: any;
}

export type User = {
  id: number;
  name: string;
  email: string;
  website: string;
  [key: string]: any;
}
