const CommentsList = ({ comments }) => (
  <>
    <h3>Comments:</h3>
    {comments.map((comment, index) => (
      <div className="comment" key={`${comment.postedBy}-${index}`}>
        <h4>{comment.postedBy}</h4>
        <p>{comment.text}</p>
      </div>
    ))}
  </>
);

export default CommentsList;
