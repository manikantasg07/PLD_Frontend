import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Sigin from './auth/Signin';
import Sigup from './auth/Signup';
import Dashboard from './goals/Dashboard';
import ProtectRoute from './ProtectRoute';
import AuthContextProvider from './contexts/user';
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query';
  import { ToastContainer } from 'react-toastify';

const queryClient = new QueryClient()

function App() {
  return (

    <QueryClientProvider client={queryClient}>
       <BrowserRouter>
      <AuthContextProvider>
      <ToastContainer />
      <div className="App">
          <Routes>
            <Route path="/signin" element={<Sigin />}></Route>
            <Route path='/signup' element={<Sigup />}></Route>
            <Route path="/dashboard" element={<ProtectRoute><Dashboard /></ProtectRoute>} />
          </Routes>
      </div>
      </AuthContextProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
