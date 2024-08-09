import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
function App() {
  return (
    <div className='min-h-screen bg-slate-950'>
    <BrowserRouter>
      <Routes>
        <Route element={<Homepage/>} path='/'></Route>
        <Route element={<Login/>} path='/login'></Route>
        <Route element={<Register/>} path='/register'></Route>
        <Route element={<Dashboard/>} path='/dashboard'></Route>
      </Routes>
    </BrowserRouter>

    </div>
    
    
  );
}

export default App;
