import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewQuestions = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/questions/")
      .then(res => setQuestions(res.data))
      .catch(err => console.error("Error:", err));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>📄 All Questions</h2>
      {questions.length === 0 ? (
        <p>No questions found.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {questions.map((q) => (
            <li
              key={q.id}
              style={{
                border: '1px solid #ccc',
                borderRadius: '10px',
                padding: '15px',
                marginBottom: '15px',
                boxShadow: '0 0 10px rgba(0,0,0,0.1)'
              }}
            >
              <p><strong>Q:</strong> {q.question}</p>
              <p>A. {q.option_a}</p>
              <p>B. {q.option_b}</p>
              <p>C. {q.option_c}</p>
              <p>D. {q.option_d}</p>
              <p><strong>Answer:</strong> {q.correct_answer}</p>
              <p><strong>Subject:</strong> {q.subject}</p>
              <p><strong>Topic:</strong> {q.topic}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ViewQuestions;

