
const Feedback = ({ totalFeedback, positiveFeedback }) => (
  <div>
    <h2>Feedback Summary</h2>
    <p>Total Feedback: {totalFeedback}</p>
    <p>Positive Feedback: {positiveFeedback}%</p>
  </div>
);

export default Feedback;