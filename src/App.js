import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

function App() {


  
  return (
    <div className="App">
      <Provider store={appStore}>
        <BrowserRouter>
          <div>
            <div className="bg-slate-900 ">
              <Header />
            </div>

            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
