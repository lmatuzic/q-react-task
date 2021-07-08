import { FC } from 'react';
import { Post } from '../types';

type PostProps = {
  posts: Post[];
}

const Posts: FC<PostProps> = ({ posts }) => {
  return (
    <div className="container">
      <div className="posts">
        {
          posts && posts.map(post => {
            return (
              <div className="card" key={post.id}>
                <div>
                  <strong>Post title: </strong>
                  {post.title}
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Posts;
