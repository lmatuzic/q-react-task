import { FC, useEffect, useState } from 'react';
import { Post } from '../types';
import { Link } from 'react-router-dom'

type PostProps = {
  propsMessage: string;
}

const Posts: FC<PostProps> = ({propsMessage}) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const componentName = "Posts component";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
    console.log(`${propsMessage} ${componentName}`)
  }, [propsMessage]);

  return (
    <div className="container">
      <div className="posts">
        {
          posts.map(post => {
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
