import { Route, Routes } from 'react-router-dom';
import './App.css';
import EmailVerify from './Components/Pages/Authentications/EmailVerify';
import Login from './Components/Pages/Authentications/Login';
import Registration from './Components/Pages/Authentications/Registration';
import ResetPass from './Components/Pages/Authentications/ResetPass';
import Chat from './Components/Pages/Chat-Interface/Chat';
import ErrorPage from './Components/Pages/Other-Components/ErrorPage';
import RequireAuth from './Components/Pages/Other-Components/RequireAuth';

function App() {
  return (
    <section>

      <Routes>
        <Route path='/' element={<RequireAuth><Chat /></RequireAuth>} />
        <Route path='/create-a-new-account' element={<Registration />} />
        <Route path='/login' element={<Login />} />
        <Route path='/reset-your-password' element={<ResetPass />} />
        <Route path='/verify-your-email' element={<EmailVerify />} />
        <Route path='/conversations' element={<RequireAuth><Chat /></RequireAuth>} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>

    </section>
  );
}

export default App;
