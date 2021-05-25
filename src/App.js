import React, {  useState } from 'react'

function App(){
    
    
    const[idSearch]=useState("mySearch")
    
    
    const myObject=[
        {name:"sub Microsystem",id:1},
        {name:"Apache Software Foundation",id:2},
        {name:"Oracle Cooperation",id:3},
        {name:"International Bussiness Machines",id:4},
        {name:"Microsoft Cooperaton",id:5},
        {name:"Apple incs",id:6},
        {name:"Sap Ag",id:7},
        {name:"Accenture",id:8},
        {name:"Computer Sciences Coorperation",id:9},
        {name:"Google",id:10},
        {name:"SoftBank",id:11},
        {name:"Yahoo",id:12}
    ]
   
 
    const changeColor=function(){
        var str = ""
        
            
            for (let i = 0; i < myObject.length; i++) {
                str = myObject[i].name
                var x = document.getElementById("mySearch").value
                var n = str.toLowerCase().search(x.toLowerCase())
                let str1 = ""

                for (let j = 0; j < str.length; j++) {
                    
                    if (n === -1) {
                        str1 = str1 + str[j]
                    } else if (j >= n && j < n + x.length) {
                        str1 = str1 + str[j].fontcolor("red")
                    } else {
                        str1 = str1 + str[j]
                    }
                }
                document.getElementById(i+1).innerHTML=str1 
               
                
            }
    }
  const renderData=myObject.map((idx)=>
      
      <p id={idx.id}>{idx.name}</p>
  )
    return(
        <div>
            <input type="search" id={idSearch}  onChange={()=>changeColor()} />
            {renderData}
        </div>
    )
}

export default App