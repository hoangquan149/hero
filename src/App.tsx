import React, { Suspense, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Loading from "./commons/components/Loading";
import { PUBLIC_ROUTES } from "./routes";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";

function App() {
   return (
      <>
         <Suspense fallback={<Loading />}>
            <Routes>
               {PUBLIC_ROUTES.map((route, index) => {
                  if (!route.component) return null;
                  return (
                     <Route
                        key={index}
                        path={route.path}
                        element={<route.component />}
                     />
                  );
               })}
            </Routes>
         </Suspense>
         <ToastContainer />
      </>
   );
}

export default App;
