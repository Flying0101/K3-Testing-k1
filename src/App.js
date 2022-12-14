import React from 'react';
import { createBrowserRouter, RouterProvider, Route, } from "react-router-dom";


import Overview from './pages/Overview';
import Calendar from './pages/Calendar';
import Timer from './pages/Timer';

import Projects from './contexts/ProjectContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Overview />,
  },
  {
    path: "/calendar",
    element: <Calendar />,
  },
  {
    path: "/timer",
    element: <Timer />,
  },
]);



function App() {
  return (
    <div className="App">
      <Projects>
        <RouterProvider router={router} />
      </Projects>
    </div>
  );
}

export default App;
