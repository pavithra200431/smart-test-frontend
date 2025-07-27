import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddQuestion from './pages/Admin/AddQuestion';
import ViewQuestions from './pages/Admin/ViewQuestions';

function App() {
  return (
    <Router>
      <div>
        {/* Optional Navbar */}
        <nav style={{ padding: '10px' }}>
          <Link to="/add" style={{ marginRight: '10px' }}>Add Question</Link>
          <Link to="/view">View Questions</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/add" element={<AddQuestion />} />
          <Route path="/view" element={<ViewQuestions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;














