import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./pages/Test";
import AppLayout from "./pages/AppLayout";
import Magazine from "./pages/Magazine";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/tours">
            <Route path=":countryId" element={<Home />}>
              <Route path=":stateId" element={<Home />}>
                <Route path=":cityId" element={<Home />} />
              </Route>
            </Route>
          </Route>
          <Route path="test" element={<Test />} />
          <Route path="/magazine" element={<Magazine />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
