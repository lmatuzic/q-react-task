import { FC } from 'react';
import { CommentType } from '../types';

type CommentProps = {
  comment: CommentType;
}

const Comment: FC<CommentProps> = ({comment}) => {
  return (
    <div className="comment">
      "{comment.body}"
    </div>
  )
}

export default Comment;
