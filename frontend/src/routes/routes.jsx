import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Search from '../pages/Search'

const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/jobs' element={<Search />} />
      </Routes>
  )
}
export default AppRoutes;
