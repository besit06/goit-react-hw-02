const Statistics = ({ feedback }) => (
  <div>
    <h2>Statistics</h2>
    <p>Good: {feedback.good}</p>
    <p>Neutral: {feedback.neutral}</p>
    <p>Bad: {feedback.bad}</p>
  </div>
);

export default Statistics;