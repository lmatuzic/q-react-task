import { FC, useEffect } from 'react';
import { UserType, CommentType, PostType } from '../types';
import { Link } from 'react-router-dom';
import UserName from "./UserName";
import Comment from './Comment';

type PostProps = {
  comments: CommentType[];
  users: UserType[];
  post: PostType;
  propsMessage: string;
}

const Post: FC<PostProps> = ({users, comments, post, propsMessage}) => {
  const componentName = "Post component";

  useEffect(() => {
    console.log(`${propsMessage} ${componentName}`)
  }, [propsMessage]);

  return (
    <Link className="post__link" to={`/posts/${post.id}`} key={post.id}>
      <div className="post">
        <UserName 
          users={users}
          post={post}
          propsMessage={propsMessage}
        />
        <strong className="post__title">{post.title}</strong>
        <p className="post__body">{post.body}</p>

        <div className="comments__title">Comments</div>
        <div className="comments">
          {
            comments.filter(comment => comment.postId === post.id).map(comment => (
              <Comment 
                key={comment.id}
                comment={comment}
              />
            ))
          }
        </div>
      </div>
    </Link>
  )
}

export default Post;
