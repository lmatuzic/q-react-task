export type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export type CommentType = {
  postId: number;
  id: number;
  email: string;
  body: string;
}

export type UserType = {
  id: number;
  name: string;
  email: string;
  website: string;
}
