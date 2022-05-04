import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';
import { ProtectedLayout } from './components/ProtectedLayout';
import { ToastContainer } from 'react-toastify';

import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <AuthProvider>
      <ToastContainer autoClose={3000} />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <ProtectedLayout>
              <Home />
            </ProtectedLayout>
          } />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
