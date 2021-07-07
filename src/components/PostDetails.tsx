import { useParams } from "react-router";

const PostDetails: React.FC = () => {
  interface ParamTypes {
    id: string;
  }

  const { id } = useParams<ParamTypes>();

  return (
    <div>
      <h1>Post Details</h1>
      <div>Post - { id }</div>
    </div>
  )
}

export default PostDetails;
