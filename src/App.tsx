import './stylesheets/scss/global.scss';
import { FC, useEffect, useState } from 'react';
import { Switch, Route, useLocation } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Posts from './components/Posts';
import PostDetails from './components/PostDetails';
import { Post } from './types';

const App: FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  let location = useLocation();
  const propsMessage = "Hello from ";

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

  return (
    <div className="App">
      <Navbar />

      <main className="content">
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <Home propsMessage={propsMessage}  />
          </Route>

          {/* this route must have exact because if it doesn't, it won't open details of post */}
          <Route exact path="/posts">
            <Posts 
              posts={posts} 
              propsMessage={propsMessage} 
            />
          </Route>
          
          <Route path="/posts/:id">
            <PostDetails propsMessage={propsMessage} />
          </Route>
        </Switch>
      </main>
    </div>
  )
}

export default App;
