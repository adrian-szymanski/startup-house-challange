import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from "./components/Header";
import Posts from "./components/Posts";
import Comments from "./components/Comments";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Header />
    <Posts />
    <Comments />
  </React.StrictMode>,
  document.getElementById('root')
);
