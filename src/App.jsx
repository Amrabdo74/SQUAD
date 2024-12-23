import { RouterProvider } from "react-router-dom";
import router from "./router";
import Aos from "aos";
import 'aos/dist/aos.css'
import React from 'react';

import { useEffect } from "react";
function App() {
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
