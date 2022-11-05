import React from 'react';
import { BrowserRouter, Route,Routes,Switch } from 'react-router-dom';
import FirstStep from '../Component/FirstStep';
import Header from '../Component/Header';
import SecondStep from '../Component/SecondStep';
const AppRouter = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      {/*<FirstStep />
      <SecondStep />*/}
     <Routes>
      <Route Component={FirstStep} path="/" exact={true} />
      <Route Component={SecondStep} path="/second"  />
      </Routes>
      {/*<Switch>
        <Route component={FirstStep} path="/" exact={true} />
        <Route Component={SecondStep} path="/second"  />
     </Switch>*/}

    </div>
  </BrowserRouter>
);

export default AppRouter;