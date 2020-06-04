import React from 'react';

import GoodList from './GoodList';
import OrderBox from './OrderBox';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <div className="app-container">
        <h1>Take Your Drinks</h1>
        <GoodList />
        <OrderBox />
      </div>
    </div>
  );
}
