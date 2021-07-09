import { useEffect } from "react";
import { useParams } from "react-router";

const PostDetails: React.FC = () => {
  interface ParamTypes {
    id: string;
  }

  const { id } = useParams<ParamTypes>();

  useEffect(() => {
    console.log("hello from Post Details component")
  }, []);

  return (
    <div className="container">
      <h1>Post Details</h1>
      <div>Post - { id }</div>
    </div>
  )
}

export default PostDetails;
