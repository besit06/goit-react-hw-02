import { useState, useEffect } from 'react';
import Feedback from './Feedback/Feedback.jsx'
import Options from './Options/Options.jsx'
import Notification from './Notification/Notification.jsx'
import Statistics from './Statistics/Statistics.jsx'
import './App.css'

const App = () => {
  const initFeedback = JSON.parse(localStorage.getItem('feedback')) || {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const [feedback, setFeedback] = useState(initFeedback);

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = feedbackType => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round(
    (feedback.good / totalFeedback) * 100
  );

  return (
    <div>
      <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} resetFeedback={resetFeedback} />
      {totalFeedback > 0 ? (
        <>
          <Feedback totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} />
          <Statistics feedback={feedback} />
        </>
      ) : (
        <Notification message="Unfortunately there are no reviews yet." />
      )}
    </div>
  );
};

          
export default App;
