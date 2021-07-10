import { FC, useEffect, useState } from 'react';
import { PostType, User, Comment } from '../types';
import { Link, useParams } from 'react-router-dom';

type PostProps = {
  propsMessage: string;
  comments: Comment[];
}

interface ParamTypes {
  id: string;
}

const Posts: FC<PostProps> = ({ propsMessage, comments }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [posts, setPosts] = useState<PostType[]>([]);
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
      <div className="input__wrapper">
        <input 
          type="text" 
          placeholder="Search"
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="posts">
        {
          posts.filter((post) => (
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.body.toLowerCase().includes(searchTerm.toLowerCase())
          )).map(post => {
            return (
              <Link className="post__link" to={`/posts/${post.id}`} key={post.id}>
                <div className="post">
                  {
                    users && users.filter(user => user.id === post.userId).map(user => (
                      <div key={user.id} className="post__user">
                        {user.name}
                      </div>
                    ))
                  }
                  <strong className="post__title">{post.title}</strong>
                  <p className="post__body">{post.body}</p>

                  <div className="comments__title">Comments</div>
                  <div className="comments">
                    {
                      comments && comments.filter(comment => comment.postId === post.id).map(comment => (
                        <div className="comment" key={comment.id}>
                          "{comment.body}"
                        </div>
                      ))
                    }
                  </div>
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
