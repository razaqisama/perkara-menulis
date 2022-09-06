import {
  Sidebar
} from './Components';

import {
  Home
} from './Pages';

function App() {
  return (
    <div className="flex flex-row w-screen h-screen bg-gray-900 text-white">
      <Sidebar />
      <div className="flex flex-col flex-auto overflow-y-auto">
        <Home />
      </div>
      <div className="h-full w-[260px]">

      </div>
    </div>
  );
}

export default App;
