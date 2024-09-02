import{BrowserRouter, Routes,Route} from "react-router-dom";
import Add from "./pages/Add";
import Books from "./pages/Books.jsx";
import "./style.css";

import Update from "./pages/Update.jsx";

function App() {
  //return(<div className="App">hello</div>);
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<Books/>} />
         <Route path="/add" element={<Add/>} />
          <Route path="/update/:id" element={<Update/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
