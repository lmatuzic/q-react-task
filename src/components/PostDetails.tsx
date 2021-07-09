import { FC, useEffect } from "react";
import { useParams } from "react-router";

type MessageProps = {
  propsMessage: string;
}

const PostDetails: FC<MessageProps> = ({propsMessage}) => {
  const componentName = "PostDetails Component"
  
  interface ParamTypes {
    id: string;
  }
  const { id } = useParams<ParamTypes>();

  useEffect(() => {
    console.log(`${propsMessage} ${componentName}`)
  }, [propsMessage]);

  return (
    <div className="container">
      <h1>Post Details</h1>
      <div>Post - { id }</div>
    </div>
  )
}

export default PostDetails;
