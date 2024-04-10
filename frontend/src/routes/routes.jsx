import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home'


const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/detect" element={<Detect/>} />
        <Route path="/get-result" element={<Result/>}/> */}
        {/* <Route path="/realtime-result" element={}/> */}
      </Routes>
  );
};

export default AppRoutes;