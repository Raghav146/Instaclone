import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './component/landing_page/landing_page';
import PostView from './component/post-view/post-view';
import Form from './component/form/form';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/post-view' element={<PostView/>}/>
        <Route path='/form' element={<Form/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
