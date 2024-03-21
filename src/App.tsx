import "./App.css";
import MainPage from "./pages/mainPage";
import DetailPage from "./pages/detailPage";
import { Routes, Route, useLocation } from "react-router-dom";
import LoadingPage from "./pages/loadingPage";
import { useRecoilState } from "recoil";
import { isLoadingState } from "./recoil/loadingAtom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { createBrowserHistory } from "history";
import { useEffect } from "react";

function App() {
  const [isLoading, setIsLoading] = useRecoilState(isLoadingState);
  const location = useLocation();
  const history = createBrowserHistory();

  useEffect(() => {
    return history.listen(({ action }) => {
      if (action === "POP") {
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }
    });
  }, []);

  return (
    <div className="App">
      <TransitionGroup>
        <CSSTransition
          key={location.key + isLoading}
          classNames="page-transition"
          timeout={500}
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
