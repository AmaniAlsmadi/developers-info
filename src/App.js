import './App.css';
import DeveloperForm from './components/DeveloperForm';
import DeveloperList from './components/DeveloperList';
import { useReducer } from "react";
import { DeveloperReducer} from "./components/Developer.js";
function App() {

  const [ developer, dispatch ] = useReducer(DeveloperReducer,[]);

  return (
    <div className="App">
       <DeveloperForm dispatch={dispatch} />
       <DeveloperList DeveloperList={developer} dispatch={dispatch} />
    </div>
  );
}

export default App;
