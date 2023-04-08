import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById('root'));
const authorName="Ayon Sinha";
const currDate=new Date().toLocaleDateString();
const currTime=new Date().toLocaleTimeString();
let time="";
for(let i=0;i<2;i++)
   {
     if(currTime[i]!=':')
       {
         time+=currTime[i];
       }
   }
let greeting;
const helloStyle={
  color:"yellow",
  marginRight:"20px"
}
const greetingStyle={
  color:"green"
}
const wrapperStyle={
backgroundColor:"orange",
margin:"100px auto",
display:"flex",
justifyContent:"center",
width:"50%",
borderRadius:"20px"
}
let hour=currTime.slice(currTime.length-2,currTime.length);
if(time>='1'&&time<='11'&&hour=="AM")
   {
      greeting="Good Morning";
      greetingStyle.color="green"
   } 
else if(time>='12'&&time<='3'&&hour=="PM"){
      greeting="Good afternoon";
      greetingStyle.color="yellow"
}  
else if(time>='4'&&time<='8'&&hour=="PM")
      {
        greeting="Good Evening";
        greetingStyle.color="Brown"
      } 
else{
        greeting="Good Night";
        greetingStyle.color="pink"
}

root.render(
  <>
    <div style={wrapperStyle}>
    <h2 style={helloStyle}>hello sir,👋 </h2>
    <h2 style={greetingStyle}>{greeting}</h2>
    </div>
    {/* <h2>current time is {currTime} </h2> */}
  </>
);

