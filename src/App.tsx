import './stylesheets/scss/global.scss';
import { FC, useEffect, useState } from 'react';
import { Switch, Route, useLocation, Link } from "react-router-dom";
import Posts from './components/Posts';
import PostDetails from './components/PostDetails';
import { Post } from './types';

const App: FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  let location = useLocation();

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
  }, []);

  const showAllPosts = () => {
    console.log(posts);
  }
  showAllPosts();

  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
      </nav>

      <main className="content">
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <h1>Home</h1>
          </Route>

          <Route path="/posts">
            <Posts posts={posts}/>
          </Route>
          
          <Route path="/posts/:id">
            <PostDetails />
          </Route>
        </Switch>
      </main>
    </div>
  )
}

export default App;
