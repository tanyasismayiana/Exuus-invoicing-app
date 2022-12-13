import { BrowserRouter as Router, Route , Routes } from "react-router-dom";

import './App.css';
import Store from './context/Store';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Clients from './pages/Clients';
import Items from "./pages/Items";
import Payments from "./pages/Payments";
import InvoiceNew from "./pages/Invoice_new";
import ClientNew from "./pages/Client_new";
import ItemsNew from "./pages/Item_new";
import PaymentsNew from "./pages/Payment_new";

function App() {
  return (
    <Store>
      <div className="App">
        <Router>
          <Routes>
            <Route exact path ='/' element={<Login/>} />
            <Route exact path ='/register' element={<Register/>} /> 
            <Route exact path ='/home' element={<Home/>} />
            <Route exact path ='/clients' element={<Clients/>} />
            <Route exact path ='/items' element={<Items/>} />
            <Route exact path ='/payments' element={<Payments/>} />  
            <Route exact path ='/create-invoice' element={<InvoiceNew/>} />
            <Route exact path ='/create-client' element={<ClientNew/>} />
            <Route exact path ='/create-items' element={<ItemsNew/>} />
            <Route exact path ='/create-payments' element={<PaymentsNew/>} /> 
          </Routes>
        </Router>
      </div>
    </Store>
  );
}

export default App;
