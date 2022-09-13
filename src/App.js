import { useState, useEffect } from "react";
import logo from "./logo.svg";
import './App.css';


function App() {

// component lifecycle methods
// 1. component did mount 
// 2. component did update 
// 3. component did unmout
useEffect(()=>{
 
  console.log('use Effect run')
}, [])



  const [item, setItem] = useState("");
  // useState("") = initial state,
  // setItem= updated state
  //   item= current state 

  const [itemList, setItemlist] = useState([]);

  const addItems=()=>{
    
    setItemlist([...itemList, item])
    console.log(itemList)
    setItem('')

  }

  const removeItem=(index)=>{
    let allItems= [...itemList]
    allItems.splice(index,1)
    setItemlist(allItems)
  }

  return (
    <div className="container">
      <div className="App"> 
      <input
        type="text"
        placeholder=" Tasks ..."
        className="inputBox"
        value={item}
        onChange={(event)=>setItem(event.target.value) }
      ></input>

      <button name="add items" onClick={()=> addItems()} className="addButton">add</button>
      </div>
      <div className="itemList">
      {
        itemList.map((itr, index)=> 
        <div key={index}>
          <div  className="eachItem">
            <h3 >
            {itr}
            </h3>
            <button className="removeBtn" onClick={()=> removeItem(index)}>remove item</button>
          </div>
           
        </div>
          )
      }
      </div>
    </div>

  );
}

const style={

}
export default App;
