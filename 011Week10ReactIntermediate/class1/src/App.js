import "./App.css";
import {useState} from 'react';
function App() {

  //   function changeHandler(event){
  //   console.log(event.target.value);
  // }
  //  function changelastNameHandler(event){
  //   console.log(event.target.value);
  //  }

// way -2 
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // function changeHandler(event){
  //   setFirstName(event.target.value);
  // }
  //  function changelastNameHandler(event){
  //   setLastName(event.target.value);
  //  }
  //  console.log(firstName);
  //  console.log(lastName);
  // way:-3
 const [formData, setFormData] = useState({firstName:"", lastName:"",email:"",comments:"",isVisible:true,mode:"",favCar:""});


 function changeHandler(event){
  const {name,value,checked,type} = event.target 
  setFormData(prevFormData =>{
    return{
      ...prevFormData,
      [name] : type === "checkbox"? checked:value
    }
  });
 }

 function submitHandler(event){
  event.preventDefault();
  console.log("Finally printing the entireform ka data......")
  console.log(formData)
 }
  return(
  <div className="App">
  <form onSubmit={submitHandler}>
  <br/>
    <input type='text'
    placeholder='first name'
    // onChange={changeHandler}
    onChange={changeHandler}
    name="firstName"
    value={formData.firstName}
    />
<br/><br/>
<input type='text'
    placeholder='last name'
    // onChange={changelastNameHandler} 
    onChange={changeHandler}
    name="lastName" 
    value={formData.lastName}
    />
    <br/><br/>
    <input 
    type="email"
    placeholder="Enter your email here"
    onChange={changeHandler}
    name="email"
    value={formData.email}/>
    <br/><br/>
    <textarea 
    placeholder="enter your comments here"
    onChange={changeHandler}
    name="comments"
    value={formData.comments}/>
    <br/><br/>
    <input 
    type="checkbox"
    onChange={changeHandler}
    name='isVisible'
    id="isVisible"
    checked={formData.isVisible}/>
    <label htmlFor='isVisible'>Am I Visible ?</label>
    <br/><br/>
    <fieldset>
      <legend>Mode:</legend>
      <input type="radio"
      onChange={changeHandler}
      name="mode"
      value="Online-Mode"
      checked={formData.mode === "Online-Mode"}/>
      <label htmlFor='Online-mode'>Online Mode</label>
      <input type="radio"
      onChange={changeHandler}
      name="mode"
      value="Offline-Mode"
      id="Offline-Mode"
      checked={formData.mode === "Offline-Mode"}/>
       <label htmlFor='Offline-mode'>Offline Mode</label>
    </fieldset>
    <label htmlFor='favCar'> Tell me your Favourite Car </label>
    <select
    name="favCar"
    id="favCar"
    value={formData.favCar}
    onChange={changeHandler}>
      <option value="scarpio">Scarpio</option>
      <option value="fartuner">fartuner</option>
          <option value="Tharrr">Tharrr</option>
          <option value="Legender">Legender</option>
          <option value="Defender">Defender</option>
          <br/><br/>
          <input type="submit" value="submit"/>
    </select>
  </form>
  </div>
);
}

export default App;
