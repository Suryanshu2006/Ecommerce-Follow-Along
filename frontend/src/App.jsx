import './App.css';
import { BrowserRouter } from 'react-router-dom'
import AllRouting from './components/AllRouting';
import NavBar from './components/NavBar'; // Make sure the capitalization matches the file name
import { Provider } from "react-redux";
import store from './redux/store'; 
function App() {
  return (
    <>
      <Provider store={store}>
      <BrowserRouter>
        <NavBar /> {/* Add the NavBar component here */}
        <AllRouting />
      </BrowserRouter>
      </Provider>
    </>
  )
}

export default App