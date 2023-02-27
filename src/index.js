import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
// import Accueil from './pages/Accueil';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
// import Login from './component/Login';
import Timer from './HW/useEffect';
import Count from './HW/useRef';
import Component1 from './HW/useContext';
import Memos from './HW/useMemo';
// import Login2 from './component/Login2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Memos />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
