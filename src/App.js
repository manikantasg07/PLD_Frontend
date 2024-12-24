import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Sigin from './auth/Signin';
import Sigup from './auth/Signup';
import Dashboard from './goals/Dashboard';
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
      <ToastContainer />
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/signin" element={<Sigin />}></Route>
            <Route path='/signup' element={<Sigup />}></Route>
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
    </div>
    </QueryClientProvider>
  );
}

export default App;
