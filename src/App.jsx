import { BrowserRouter, Routes, Route } from "react-router-dom";
import {About} from './views/About';
import {Accueil} from './views/Accueil';
import {Service} from './views/Service';
import {PageNotFound} from './views/PageNotFound';
import {Layout} from './views/Layout';

function App() {

  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
         <Route path="/" element={<Layout/>}>
              <Route index element={<Accueil/>}/>
              <Route path="about" element={<About />} />
              <Route path="service" element={<Service />} />
              <Route path="*" element={<PageNotFound />} />
         </Route>
      </Routes>
      </BrowserRouter>
    </div>
    

  )
  
}
export default App
