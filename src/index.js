import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
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
        <Route path="/" element={<Home />}>
          <Route path="Home" element={<PageHome />} />
          <Route path="CountrySearch" element={<CountrySearch />} /> 
          <Route path="CountryFilter" element={<CountryFilter />} />
          <Route path="CountryDetail/:name" element={<CountryDetail />} />

          <Route path="About" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

