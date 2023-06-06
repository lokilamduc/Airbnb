import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout";
import Loading from "./components/Loading/Loading";

const Home = lazy(() => import("./modules/Home/Home"));
const RoomDetails = lazy(() => import("./modules/RoomDetails/RoomDetails"));
function App() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/roomdetails/:maViTri" element={<RoomDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
