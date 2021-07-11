import { FC } from 'react';
import { PostType, UserType } from '../types';


type UserNameProps = {
  users: UserType[];
  post: PostType | undefined;
  propsMessage: string;
}

const UserName: FC<UserNameProps> = ({users, post}) => {
  return (
    <>
      {
        users.filter(user => user.id === post?.userId).map(user => (
          <div key={user.id} className="post__user">
            {user.name}
          </div>
        ))
      }
    </>
  )
}

export default UserName;
