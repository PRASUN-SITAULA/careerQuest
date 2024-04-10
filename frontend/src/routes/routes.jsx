import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home'
import Landing from '../components/Landing';


const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/detect" element={<Detect/>} />
        <Route path="/get-result" element={<Result/>}/> */}
        <Route path="/jobs" element={<Landing />}/>
      </Routes>
  );
};

export default AppRoutes;