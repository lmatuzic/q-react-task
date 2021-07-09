import { FC, useEffect } from 'react';
import { Post } from '../types';
import { Link } from 'react-router-dom'

type PostProps = {
  posts: Post[];
}

const Posts: FC<PostProps> = ({ posts }) => {
  useEffect(() => {
    console.log("hello from Posts component")
  }, []);

  return (
    <div className="container">
      <div className="posts">
        {
          posts && posts.map(post => {
            return (
              <Link className="post__link" to={`/posts/${post.id}`} key={post.id}>
                <div className="post">
                  <strong>Post title: </strong>{post.title}
                </div>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default Posts;
