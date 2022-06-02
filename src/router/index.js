import { Route, Routes } from 'react-router-dom';

import Header from '../components/AppBar';
import NotFound from '../components/NotFound';
import Products from '../pages/Products';
import Sales from '../pages/Sales';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;