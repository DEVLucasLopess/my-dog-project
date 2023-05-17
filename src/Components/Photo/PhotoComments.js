import React, { useState } from "react";
import { UserContext } from "../../UserContext";
import PhotoCommentsPhoto from "./PhotoCommentsPhoto";
import styles from "./PhotoComments.module.css";

const PhotoComments = (props) => {
  const [comments, setComments] = useState(() => props.comments);
  const { login } = React.useContext(UserContext);
  return (
    <>
      <ul className={styles.comments}>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}:</b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>

      {login && <PhotoCommentsPhoto id={props.id} setComment={setComments} />}
    </>
  );
};

export default PhotoComments;
