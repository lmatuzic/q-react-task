import { FC, useEffect, useState } from 'react';
import { Post, User } from '../types';
import { Link, useParams } from 'react-router-dom';

type PostProps = {
  propsMessage: string;
}

interface ParamTypes {
  id: string;
}

const Posts: FC<PostProps> = ({ propsMessage }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const componentName = "Posts component";
  let { id } = useParams<ParamTypes>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
        const usersResponse = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const postsData = await postsResponse.json();
        const usersData = await usersResponse.json();
        console.log(usersData);
        setPosts(postsData);
        setUsers(usersData);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
    console.log(`${propsMessage} ${componentName}`)
  }, [propsMessage, id]);

  return (
    <div className="container">
      <div className="posts">
        {
          posts.map(post => {
            return (
              <Link className="post__link" to={`/posts/${post.id}`} key={post.id}>
                <div className="post">
                  <strong>Post title: </strong>{post.title}
                  {
                    users && users.filter(user => user.id === post.userId).map(user => (
                      <div key={user.id}>
                        Associated user: {user.name}
                      </div>
                    ))
                  }
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
