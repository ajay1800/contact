import ContactContainer from "./pages/contact/contact-list/contactContainer";
import MapContainer from "./pages/map/mapContainer";
import SideBar from "./uiLibrary/sideBar/sideBar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className='flex flex-row bg-slate-200'>
      <SideBar />
      <Routes>
        <Route path='/contact' element={<ContactContainer />} />
        <Route path='/chart-and-maps' element={<MapContainer />} />
      </Routes>
    </div>
  );
}

export default App;
