import React, { useState } from "react";
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import "./Form.css";


function Todoform() {
  const [inputs, setInputs] = useState([]);
  const [id, setId] = useState("");
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  const [input5, setInput5] = useState("");
  const handleChange = (e) => {
    setId(e.target.value);
  };
  const handleChange1 = (e) => {
    setInput1(e.target.value);
  };
  
  const handleChange2 = (e) => {
    setInput2(e.target.value);
  };
  const handleChange3 = (e) => {
    setInput3(e.target.value);
  };
  const handleChange4 = (e) => {
    setInput4(e.target.value);
  };
  const handleChange5 = (e) => {
    setInput5(e.target.value);
  };
  

  const handleSubmit1 = (e) => {
    
    e.preventDefault();
    

    const newInputs = [
      { id: id,name: input1, skills: input2,men: input3,days: input4,budget: input5},
      ...inputs,
    ];
    setInputs(newInputs);
    console.log(newInputs);
  };


  return (
    
    <div className="box">
      
      <form onSubmit={handleSubmit1}>
        <input
          type="text"
          placeholder="Enter Phone Number"
          value={id}
          name="text"
          className='todo-input'
          onChange={handleChange}
        ></input>

        <input
          type="text"
          placeholder="Enter Name"
          value={input1}
          name="text"
          className='todo-input'
          onChange={handleChange1}
        ></input>
          <select
          type="text"
          placeholder="Enter Skills Required "
          
          name="text"
          className='todo-input'
          onChange={handleChange2}
        >
            <option value="N/A">Size</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>

        <select
          type="text"
          placeholder="Enter No Of Men"
          value={input3}
          name="text"
          className='todo-input'
          onChange={handleChange3}
        ><option value="N/A">Flavour</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option></select>
    
        <input
          type="text"
          placeholder="Enter No of Days"
          value={input4}
          name="text"
          className='todo-input'
          onChange={handleChange4}
        ></input>
        <input
          type="text"
          placeholder="Budget"
          value={input5}
          name="text"
          className='todo-input'
          onChange={handleChange5}
        ></input>

        <button className="todo-button"> Order Item </button>
      </form>

      <Link to="/products"><Button variant="contained" color="primary">
  Back
</Button>
</Link> 
         </div>
    
  );
}

export default Todoform;