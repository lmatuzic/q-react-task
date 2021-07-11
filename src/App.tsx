import './stylesheets/scss/global.scss';
import { FC, useState, useEffect } from 'react';
import { Switch, Route, useLocation } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Posts from './components/Posts';
import PostDetails from './components/PostDetails';
import { CommentType, UserType } from './types';


const App: FC = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [comments, setComments] = useState<CommentType[]>([]);
  const propsMessage = "Hello from ";
  let location = useLocation();

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/comments`);
        const usersResponse = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const commentsData = await commentsResponse.json();
        const usersData = await usersResponse.json();
        setComments(commentsData);
        setUsers(usersData);
      } catch(err) {
        console.log(err.message);
      }
    };

    fetchComments();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main className="content">
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <Home propsMessage={propsMessage} />
          </Route>

          <Route exact path="/posts">
            <Posts 
              users={users}
              comments={comments} 
              propsMessage={propsMessage} 
            />
          </Route>
          
          <Route path="/posts/:id">
            <PostDetails 
              users={users}
              comments={comments} 
              propsMessage={propsMessage} 
            />
          </Route>
        </Switch>
      </main>
    </div>
  )
}

export default App;
