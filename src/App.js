import { Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './components/Form/Form';
import Surprise from './components/Surprise/Surprise';

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<Form></Form>}></Route>
        <Route path='surprise' element={<Surprise></Surprise>}></Route>
      </Routes>
    </div>
  );
}

export default App;
