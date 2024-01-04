import "./App.css";
import Cart from "./component/customer/Cart";
import Payment from "./component/customer/Payment";
import SubOption  from "./component/customer/SubOption";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App(){
  return(
    <Router>
      <Routes>
        <Route path="/sub" element={<SubOption /> } />
        <Route path="/pay" element={<Payment /> } />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}
export default App;



      
      
      




