import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Accueil from './pages/Accueil';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './component/Login';
// import Timer from './HW/useEffect';
// import Count from './HW/useRef';
// import Component1 from './HW/useContext';
// import Memos from './HW/useMemo';
import Login2 from './component/Login2';
import Layout from './component/Layout';
import App from './App';
import Header from './component/Header';
import Corps from './component/Corps';
import { BrowserRouter } from 'react-router-dom';
import Register from './component/Register';
// import App from './todo/Todo';
import Ajout from './component/Ajout';
import ToApp from './todo/ToApp';
import store from './app/store'
import { Provider } from 'react-redux'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
      <Provider store={store}>
        <App/>
      </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
