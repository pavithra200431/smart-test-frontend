import React, { useState, useEffect } from 'react';

const AddQuestion = () => {
  const [formData, setFormData] = useState({
    question: '',
    optionA: '',
    optionB: '',
    optionC: '',
    optionD: '',
    answer: '',
    subject: ''
  });

  const [isVisible, setIsVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMessage) setErrorMessage(''); // Clear error on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { question, optionA, optionB, optionC, optionD, answer, subject } = formData;

    if (!question || !optionA || !optionB || !optionC || !optionD || !answer || !subject) {
      setErrorMessage('❌ All fields are required');
      return;
    }

    console.log('✅ Form submitted:', formData);
    // POST to backend here
  };

  const styles = {
    page: {
      minHeight: '100vh',
      background: 'linear-gradient(to right, #f3e5f5, #ede7f6)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px'
    },
    header: {
      width: '100%',
      height: '60px',
      backgroundColor: '#6a1b9a',
      borderRadius: '0 0 12px 12px',
      marginBottom: '30px'
    },
    container: {
      background: '#ffffff',
      padding: '30px',
      borderRadius: '16px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      width: '100%',
      maxWidth: '600px',
      transition: 'transform 0.4s ease, opacity 0.4s ease',
      transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
      opacity: isVisible ? 1 : 0
    },
    headingWrapper: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '10px'
    },
    heading: {
      fontSize: '26px',
      fontWeight: 'bold',
      color: '#4a148c',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    },
    error: {
      color: 'red',
      textAlign: 'center',
      marginBottom: '15px',
      fontWeight: '500'
    },
    label: {
      fontWeight: '500',
      marginTop: '14px',
      display: 'block'
    },
    input: {
      width: '100%',
      padding: '10px',
      marginTop: '6px',
      border: '1px solid #ccc',
      borderRadius: '8px'
    },
    buttonWrapper: {
      display: 'flex',
      justifyContent: 'center'
    },
    button: {
      marginTop: '25px',
      padding: '12px 24px',
      backgroundColor: '#6a1b9a',
      color: '#ffffff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontWeight: 'bold',
      fontSize: '15px',
      transition: 'transform 0.2s ease'
    }
  };

  return (
    <div style={styles.page}>
      {/* Top Header */}
      <div style={styles.header}></div>

      {/* Form Container */}
      <div style={styles.container}>
        {/* Title */}
        <div style={styles.headingWrapper}>
          <div style={styles.heading}>📝 Add New Question</div>
        </div>

        {/* Error Message */}
        {errorMessage && <div style={styles.error}>{errorMessage}</div>}

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <label style={styles.label}>Question</label>
          <input
            style={styles.input}
            type="text"
            name="question"
            value={formData.question}
            onChange={handleChange}
            placeholder="Enter your question"
          />

          <label style={styles.label}>Option A</label>
          <input
            style={styles.input}
            type="text"
            name="optionA"
            value={formData.optionA}
            onChange={handleChange}
            placeholder="Option A"
          />

          <label style={styles.label}>Option B</label>
          <input
            style={styles.input}
            type="text"
            name="optionB"
            value={formData.optionB}
            onChange={handleChange}
            placeholder="Option B"
          />

          <label style={styles.label}>Option C</label>
          <input
            style={styles.input}
            type="text"
            name="optionC"
            value={formData.optionC}
            onChange={handleChange}
            placeholder="Option C"
          />

          <label style={styles.label}>Option D</label>
          <input
            style={styles.input}
            type="text"
            name="optionD"
            value={formData.optionD}
            onChange={handleChange}
            placeholder="Option D"
          />

          <label style={styles.label}>Correct Answer</label>
          <select
            style={styles.input}
            name="answer"
            value={formData.answer}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="A">Option A</option>
            <option value="B">Option B</option>
            <option value="C">Option C</option>
            <option value="D">Option D</option>
          </select>

          <label style={styles.label}>Subject</label>
          <input
            style={styles.input}
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Eg: Mathematics"
          />

          <div style={styles.buttonWrapper}>
            <button
              type="submit"
              style={styles.button}
              onMouseOver={(e) => (e.target.style.transform = 'scale(1.05)')}
              onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
            >
              ➕ Add Question
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddQuestion;








