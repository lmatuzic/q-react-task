import { FC, useEffect, useState } from "react";
import { useParams } from "react-router";
import { PostType, CommentType, UserType } from '../types';
import UserName from "./UserName";
import Comment from './Comment';


type PostProps = {
  users: UserType[];
  comments: CommentType[];
  propsMessage: string;
}

interface ParamTypes {
  id: string;
}

const PostDetails: FC<PostProps> = ({ propsMessage, comments, users }) => {
  const [post, setPost] = useState<PostType>();
  const componentName = "PostDetails Component";
  let { id } = useParams<ParamTypes>();

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const postDetailsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const postDetails = await postDetailsResponse.json();
        setPost(postDetails);
      } catch(err) {
        console.log(err.message);
      }
    };

    fetchPostDetails();
  }, [id]);

  useEffect(() => {
    console.log(`${propsMessage} ${componentName}`);
  }, [propsMessage]);

  return (
    <div className="container">
      <div className="post__details">
        <div className="post__info">
          <UserName 
            users={users}
            post={post}
            propsMessage={propsMessage}
          />
          <h2 className="post__title">{post && post.title}</h2>
          <div className="post__id">Post ID - { post?.id }</div>
          <p className="post__body">{post && post.body}</p>
        </div>

        <div className="comments">
          <h2 className="comments__title">Comments</h2>
          {
            comments.filter(comment => comment.postId === post?.id).map(comment => (
              <Comment 
                key={comment.id}
                comment={comment}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default PostDetails;
