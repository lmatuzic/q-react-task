export type Post = {
  userID: number;
  id: number;
  title: string;
  body: string;
  [key: string]: any 
}

export type Comment = {
  postId: number;
  id: number;
  email: string;
  body: string;
  [key: string]: any 
}
