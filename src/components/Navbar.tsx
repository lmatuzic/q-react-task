import { FC } from 'react';
import { Link } from "react-router-dom";

const Home: FC = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/posts">Posts</Link>
        </li>
      </ul>
   </nav>
  )
}

export default Home
