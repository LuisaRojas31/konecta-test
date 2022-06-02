import { Route, Routes } from 'react-router-dom';

import Header from '../components/AppBar';
import NotFound from '../components/NotFound';
import Products from '../pages/Products';
import Sales from '../pages/Sales';
import { defaultRoute, salesRoute } from '../utils/constants';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path={defaultRoute} element={<Products />} />
        <Route path={salesRoute} element={<Sales />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;