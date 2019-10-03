
import React from "react";
import Dashboard from './Components/Dashboard';
import "semantic-ui-css/semantic.min.css"; 
import { Card } from 'semantic-ui-react'
import './App.css';


function App() {

return (
  <div className="App">
 <Card fluid color='red'>
<Dashboard/>
</Card>
</div>
)
}

export default App;