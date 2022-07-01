import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormUi from '../../pages/sign-in/components/form-ui';

function RoutesManager() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormUi />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesManager;
