import { FC, useEffect } from 'react';

type MessageProps = {
  propsMessage: string;
}

const Home: FC<MessageProps> = ({propsMessage}) => {
  const componentName = "Home component";

  useEffect(() => {
    console.log(`${propsMessage} ${componentName}`)
  }, [propsMessage]);

  return (
    <div className="container">
      <h1>Home</h1>
    </div>
  )
}

export default Home;
