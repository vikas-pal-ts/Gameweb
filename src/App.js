import './App.css';
import Banner from './components/Banner/Banner';
import SuggestCard from './components/Card/SuggestCard';
import RightSideBar from './components/RightSideBar';
import { Sidebar } from './components/SideBar/Sidebar';

function App() {
  return (
    <div >
    <Sidebar className="flex-col">
      <div>
        <div className="flex rounded-xl w-full">
          <Banner />
          <RightSideBar />
        </div>
        <SuggestCard />
      </div>
    </Sidebar>
    </div>
  );
}

export default App;
