import React ,{ Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// layouts
import Nav from "./layouts/Navbar/Navbar";
import Footer from "./layouts/Footer/Footer";
// import MobileNav from "./components/header/MobileHeader";

// // pages
const Home = React.lazy(() => import("./pages/Home/Home"));
// const About = React.lazy(() => import("./pages/About/About"));
const Contact = React.lazy(() => import("./pages/Contact/Contact"));
const EventCards = React.lazy(() => import("./components/EventCards/EventCards"));

// const EventCards1 = React.lazy(() => import("./components/EventCards/EventCards-1"));

// const EventCards2 = React.lazy(() => import("./components/EventCards/EventCards-2"));
// const EventCardsModal = React.lazy(() => import("./components/EventCards/EventCardModal2"));

const SignUP = React.lazy(() => import ( "./pages/SignUp/SignUP"));
const Socialpage=React.lazy(()=>import("./pages/SocialMedia/SocialMedia"))

// // microInteraction
import Loading from "./microInteraction/Load/Load";

// import { Alert } from "./MicroInteraction/Alert";

// // state
// import AuthContext from "./context/auth-context";

// // axios
// import axios from "axios";


function App() {

  return (
    <>
    <Router>
      <Nav />

      <div className="page">
        <div className="pageExt">
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<Loading />}>
                  <Home />
                </Suspense>
              }
            />

            <Route
              path="/EventCards"
              element={
                <Suspense fallback={<Loading />}>
                  <EventCards />
                </Suspense>
              }
            />
              <Route
                    path="/Register"
                    element={
                      <Suspense fallback={<Loading />}>
                        <SignUP />
                      </Suspense>
                    }
                  />

            <Route
              path="/Contact"
              element={
                <Suspense fallback={<Loading />}>
                  <Contact />
                </Suspense>
              }
            />
            <Route
              path="/social"
              element={
                <Suspense fallback={<Loading />}>
                 <Socialpage />
                </Suspense>
              }
            />

            <Route
              path="*"
              element={
                <Suspense fallback={<Loading />}>
                  <h1>Not Found</h1>
                </Suspense>
              }
            />  
          </Routes>
        </div>
      </div>

      <Footer />
    </Router>
  
  </>
  
  );

}

export default App;
