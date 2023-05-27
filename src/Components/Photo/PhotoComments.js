import React, { useState } from "react";
import { UserContext } from "../../UserContext";
import PhotoCommentsPhoto from "./PhotoCommentsPhoto";
import styles from "./PhotoComments.module.css";

const PhotoComments = (props) => {
  const [comments, setComments] = useState(() => props.comments);
  const commentsSection = React.useRef(null)
  const { login } = React.useContext(UserContext);

  React.useEffect(() => {
    commentsSection.current.screllTop = commentsSection.current.scrollHeight
  }, [comments])

  return (
    <>
      <ul ref={commentsSection} className={`${styles.comments} ${props.single ? styles.single : ''}`}>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>

      {login && <PhotoCommentsPhoto id={props.id} single={props.single} setComments={setComments} />}
    </>
  );
};

export default PhotoComments;