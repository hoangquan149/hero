import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "../../commons/components/Loading";
import SideBar from "../../commons/components/Sidebar";
import Header from "../../commons/components/Header";
import { PRIVATE_ROUTES } from "../../routes";

function Index() {
   return (
      <>
         <div className="d-flex" id="wrapper">
            <SideBar />
            <div className="page-content-wrapper">
               <Header />
               <div className="main-body ">
                  <Suspense fallback={<Loading />}>
                     <Routes>
                        {PRIVATE_ROUTES.map((route, index) => {
                           const Page = route.component;
                           return Page ? (
                              <Route
                                 key={index}
                                 element={<Page />}
                                 path={route.path}
                              />
                           ) : null;
                        })}
                     </Routes>
                  </Suspense>
               </div>
            </div>
         </div>
      </>
   );
}

export default Index;
