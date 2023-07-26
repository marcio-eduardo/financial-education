//import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import { HomePage } from "./Pages/HomePage";
import { HeaderPartial } from "./partials/HeaderPartial";
import { FormPesquisa } from "./Pages/FormPesquisa";

function App() {
  return (
    <div className='App'>
      <HeaderPartial />

      <FormPesquisa />
    </div>
  );
}

export default App;
