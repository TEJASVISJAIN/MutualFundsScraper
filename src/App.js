import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FundInfo from './FundInfo';
import FundsList from './FundsList';

function MainRouter() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<FundsList />}  />
        <Route exact path="/fund-info" element={<FundInfo />} />
      </Routes>
    </div>
  );
}

export default MainRouter;
