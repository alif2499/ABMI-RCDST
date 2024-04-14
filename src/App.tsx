import Message from "./Message";
import Homepage from "./Homepage";
import QuestionPage1 from "./QuestionPage1";
import { RightColumn } from "./RightColumn";
import logo from "./images/logo.png";
import { TopBar } from "./TopBar";
import { Button } from "./component/Button";
import ABMI from "./images/ABMI.png";

function App() {
  return (
    // <div className="max-h-screen flex flex-row">
    //   <hr></hr>
    //   <div>
    // <a href="/">
    //   <img src={logo} className="h-48" />
    // </a>
    //   </div>
    //   <RightColumn />
    // </div>

    <div className="flex">
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <span className="ms-3">
                <a href="/">
                  <img src={logo} className="h-48" />
                </a>
              </span>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white bg-blue-100 hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <p className="text-gray-900 items-center">Concept Library</p>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div className="p-0 sm:ml-64 w-screen bg-white">
        <div className="p-2 border-1 border-gray-200 rounded-lg dark:border-gray-900">
          <div className="grid grid-cols-2 h-24 mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <div className="flex items-center h-24 mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <TopBar />
            </div>
            {/* <div className="flex items-center justify-items-end">
            <a href="/">
              <img src={ABMI} className="h-14" />
            </a>
          </div> */}
          </div>
          <div className="flex h-screen mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <div className="justify-items-start">
              <p className="text-2xl text-gray-900 dark:text-gray-500">
                Welcome to the Remote Camera Decision Support Tool.
              </p>
              <p className="text-2xl text-gray-800 dark:text-gray-500">
                Get started by clicking answering the questions below.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



// function App(){
//   return <div>
//     <Homepage />
//   </div>;
// }

export default App;


