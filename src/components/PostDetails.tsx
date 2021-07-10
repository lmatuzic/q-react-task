import { FC, useEffect, useState } from "react";
import { useParams } from "react-router";
import { PostType, Comment } from '../types';

type PostProps = {
  propsMessage: string;
  comments: Comment[];
}

interface ParamTypes {
  id: string;
}

const PostDetails: FC<PostProps> = ({ propsMessage, comments }) => {
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
          <h2 className="post__title">{post && post.title}</h2>
          <div className="post__id">Post ID - { id }</div>
          <p className="post__body">{post && post.body}</p>
        </div>

        <div className="comments">
          <h2 className="comments__title">Comments</h2>
          {
            comments && comments.filter(comment => comment.postId === post?.id).map(comment => (
              <div className="comment" key={comment.id}>
                "{comment.body}"
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default PostDetails;
