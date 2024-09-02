import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import reportWebVitals from './reportWebVitals';
import CountrySearch from './search/CountrySearch';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './search/About';
import PageHome from './mainpage/pagehome';
import CountryFilter from './search/CountryFilter';
import CountryDetail from './detail/CountryDetail';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home/>}>
        <Route path="Home" element={<PageHome/>} />
        <Route path="CountrySearch" element={<CountrySearch/>} /> 
        <Route path="CountryFilter" element={<CountryFilter/>} />
        <Route path="CountryDetail" element={<CountryDetail/>} /> 
        <Route path="About" element={<About/>} />
            {/* <Route path="pertemuanLima" element={<IndexLima/>} />
            <Route path="pertemuanEnam" element={<Enam/>} />
            <Route path="pertemuanEnam/:id/:name/:price/:year" element={<Detail/>} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
