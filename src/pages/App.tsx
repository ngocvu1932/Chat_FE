import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import LoginPage from './login';
import {useSelector} from 'react-redux';

const App = () => {
  const user = useSelector((state: any) => state.user.user);

  return (
    <Router>
      <Routes>
        {user ? (
          <>
            <Route path="/" element={<div className="text-red-400">Home page</div>} />
            <Route path="/login" element={<Navigate to="/" />} />
            <Route path="/profile" element={<div>Profile Page</div>} />
            <Route path="*" element={<div>Page not found</div>} />
          </>
        ) : (
          <>
            {/* Mọi route sẽ chuyển về login nếu chưa có user */}
            <Route path="*" element={<Navigate to="/login" />} />
            <Route path="/login" element={<LoginPage />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
