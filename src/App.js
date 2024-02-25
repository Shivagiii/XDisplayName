
import { useState } from 'react';
import './App.css';

function App() {

  const [fullName,setFullName] = useState({
    firstName:'',
    lastName:''
  })
  const [display,setDisplay]= useState(null);
  function handleChange(e){
    setDisplay('')
    setFullName({
      ...fullName,
      [e.target.name]:e.target.value,
     

    })
console.log(fullName);
  }
 

  function handleSubmit(e){
    e.preventDefault();
    setDisplay(fullName.firstName+" "+fullName.lastName)
    
    

  }

  return (
    <div className="App">
      <h2>Full Name Display</h2>
      <form onSubmit={handleSubmit}  >
        <div><label for='firstName'>First Name:</label>
          <input type="text" id='firstName' name='firstName' value={fullName.firstName} onChange={handleChange} required/>       
        </div>
        <div>
        <label for='lastName'>Last Name:</label>
        <input type="text" id='lastName' name='lastName'  value={fullName.lastName} onChange={handleChange} required/>
        </div>
        <button type='submit'>Submit</button>
      </form>
       {display ? (<p>Full Name: {display}</p>):(<></>) }
    </div>
  );
}

export default App;
