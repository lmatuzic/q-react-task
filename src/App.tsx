import './stylesheets/scss/global.scss';
import { FC, useState, useEffect } from 'react';
import { Switch, Route, useLocation, useParams } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Posts from './components/Posts';
import PostDetails from './components/PostDetails';
import { CommentType } from './types';


interface ParamTypes {
  id: string;
}

const App: FC = () => {
  const [comments, setComments] = useState<CommentType[]>([]);
  const propsMessage = "Hello from ";
  let location = useLocation();
  let { id } = useParams<ParamTypes>();

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/comments`);
        const commentsData = await commentsResponse.json();
        setComments(commentsData);
      } catch(err) {
        console.log(err.message);
      }
    };

    fetchComments();
  }, [id]);

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
              propsMessage={propsMessage} 
              comments={comments} 
            />
          </Route>
          
          <Route path="/posts/:id">
            <PostDetails 
              propsMessage={propsMessage} 
              comments={comments} 
            />
          </Route>
        </Switch>
      </main>
    </div>
  )
}

export default App;
