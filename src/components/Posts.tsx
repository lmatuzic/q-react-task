import { FC, useEffect, useState } from 'react';
import { PostType, UserType, CommentType } from '../types';
import Post from '../components/Post';


type PostProps = {
  propsMessage: string;
  comments: CommentType[];
  users: UserType[];
}

export const getData = () => {
  console.log('test get data');
}

const Posts: FC<PostProps> = ({ propsMessage, comments, users }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [posts, setPosts] = useState<PostType[]>([]);
  const componentName = "Posts component";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
        const postsData = await postsResponse.json();
        setPosts(postsData);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
    console.log(`${propsMessage} ${componentName}`)
  }, [propsMessage]);

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
          )).map(post => (
            <Post
              key={post.id}
              post={post}
              users={users} 
              comments={comments}
              propsMessage={propsMessage}
            />
          ))
        }
      </div>
    </div> 
  )
}

export default Posts;
