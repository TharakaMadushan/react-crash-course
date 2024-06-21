import classes from "./Post.module.css";

function Post({ author, body }) {
  return (
    <div className={classes.post}>
      <h2 className={classes.author}>{author}</h2>
      <p className={classes.text}>{body}</p>
    </div>
  );
}

export default Post;
