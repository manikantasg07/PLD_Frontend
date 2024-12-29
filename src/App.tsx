import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Sigin from './auth/Signin';
import Sigup from './auth/Signup';
import ProtectRoute from './ProtectRoute';
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query';
  import { ToastContainer } from 'react-toastify';
import Layout from './goals/Layout';
import Dashboard from './goals/Dashboard';
import Students from './goals/Students';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
       <BrowserRouter>
      <ToastContainer />
          <Routes>
            <Route path="signin" element={<Sigin />}></Route>
            <Route path='signup' element={<Sigup />}></Route>
            <Route path="app" element={<ProtectRoute><Layout /></ProtectRoute>}>
                <Route index element={<Dashboard />}></Route>
                <Route path='students' element={<Students />}></Route>
            </Route>

          </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
