import './App.css';
// import Login from './components/Login';
// import Signup from './components/Signup';
// import Products from './components/Products';
import { BrowserRouter } from 'react-router-dom'
import AllRouting from './components/AllRouting';
import NavBar from './components/NavBar'; // Make sure the capitalization matches the file name

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar /> {/* Add the NavBar component here */}
        <AllRouting />
      </BrowserRouter>
    </>
  )
}

export default App