import { BrowserRouter, Route, Routes } from "react-router-dom";
import Restore from "./components/Restore/Restore";
import Food from "./components/Food/Food";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Restore />} />
        <Route path="/restore" element={<Restore />} />
        <Route path="/food/:id" element={<Food />} />
        <Route path="/*" element={<Restore />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
