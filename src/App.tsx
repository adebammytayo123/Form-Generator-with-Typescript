import React from 'react';
import './App.css';
import FormGenerator from "./components/FormGenerator";
import 'bootstrap/dist/css/bootstrap.min.css';


const App: React.FC = () =>{
  return (
    <div className="App">
      <FormGenerator />
    </div>
  );
}

export default App;
