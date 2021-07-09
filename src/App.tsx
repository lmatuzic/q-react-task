import './stylesheets/scss/global.scss';
import { FC } from 'react';
import { Switch, Route, useLocation } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Posts from './components/Posts';
import PostDetails from './components/PostDetails';

const App: FC = () => {
  let location = useLocation();
  const propsMessage = "Hello from ";

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
