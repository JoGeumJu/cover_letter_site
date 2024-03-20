import "./App.css";
import MainPage from "./pages/mainPage";
import DetailPage from "./pages/detailPage";
import { Routes, Route, useLocation } from "react-router-dom";
import LoadingPage from "./pages/loadingPage";
import { useRecoilValue } from "recoil";
import { isLoadingState } from "./recoil/loadingAtom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function App() {
  const isLoading = useRecoilValue(isLoadingState);
  const location = useLocation();

  return (
    <div className="App">
      <TransitionGroup>
        <CSSTransition
          key={location.key + isLoading}
          classNames="page-transition"
          timeout={500}
          unmountOnExit
        >
          <Routes location={location}>
            <Route
              path="/"
              element={isLoading ? <LoadingPage /> : <MainPage />}
            />
            <Route
              path="/detail"
              element={isLoading ? <LoadingPage /> : <DetailPage />}
            />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
