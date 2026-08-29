import { Outlet } from "react-router";
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="app">
    
      <Navbar />
      <Outlet />
      <Footer />
    
    </div>
  );
}
export default App
