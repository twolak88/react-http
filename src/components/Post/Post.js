import classes from './Post.module.css';

const Post = (props) => (
  <article className={classes.Post}>
    <h1>{props.title}</h1>
    <div className={classes.Info}>
      <div className={classes.Author}>Author</div>
    </div>
  </article>
);

export default Post;