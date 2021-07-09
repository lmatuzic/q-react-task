import { FC, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Post, Comment } from '../types';

type PostProps = {
  propsMessage: string;
}

interface ParamTypes {
  id: string;
}

const PostDetails: FC<PostProps> = ({propsMessage}) => {
  const [post, setPost] = useState<Post>();
  const [comments, setComments] = useState<Comment[]>([]);
  const componentName = "PostDetails Component";
  let { id } = useParams<ParamTypes>();

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const postDetailsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
        const commentsData = await commentsResponse.json();
        const postDetails = await postDetailsResponse.json();
        setPost(postDetails);
        setComments(commentsData);
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
        <h2 className="post__title">{post && post.title}</h2>
        <div className="post__id">Post ID - { id }</div>
        <p className="post__body">{post && post.body}</p>


        <h2 className="comments__title">Post comments</h2>
        <div className="comments">
          {
            comments && comments.map(comment => {
              return (
                <div className="comment" key={comment.id}>
                  "{comment.body}"
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default PostDetails;
