import React from 'react'
import {useState,useEffect} from 'react'
import './App.css'
function App() {
    const[idx,setIdx]=useState([1,2,3,4,5,6,7,8])
    const [count,setCount]=useState(0);
    const [active,setActive]=useState(0)
    
    const click=function(id){
        setActive(0)
        setCount(id)
    }
    
    useEffect(()=>{
        if(count===0){
            
        }else{
            
            for(let k=1;k<count;k++){
                document.getElementById(k).style.background="Gray"
            }
            for(let j=count+1;j<idx.length+1;j++){
                document.getElementById(j).style.background="Gray"
            }
            document.getElementById(count).style.background="Red"
            
        }
        
    })

    useEffect(()=>{
        console.log(active)
        if(active===1 && count===0){
            for(let i=1;i<idx.length+1;i++){
                document.getElementById(i).style.background="Yellow"
            }
        }else if(active===1 && count!==0){
            for(let i=1;i<count;i++){
                document.getElementById(i).style.background="Yellow"
            }
            
        }
    })
    

    
   
    const listItems=idx.map((id)=>
        <div id={id} className="box" onClick={()=>click(id)}></div>
    )
    return(
        <div>
            {listItems}
            <button onClick={()=>setActive(1)}>Click Here</button>
        </div>
    )
}

export default App;