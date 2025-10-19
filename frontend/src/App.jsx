import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import LangdingPage from './pages/LandingPage/LangdingPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LangdingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Toaster
        toastOptions={{
          className: '',
          style: { fontSize: '16px' },
        }}
      />
    </>
  );
};

export default App;
