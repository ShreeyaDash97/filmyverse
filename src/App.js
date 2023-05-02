import Header from "./components/Header";
import Cards from './components/Cards'
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import AddMovie  from './components/AddMovie'


function App(){
    return(
<div className = "App">
<Router>
<Header />
<Routes>
<Route path="/" element={<Cards />} />
<Route path="/addmovie" element={<AddMovie />} /> 

</Routes>
  </Router>
</div>
);
}
export default App;
