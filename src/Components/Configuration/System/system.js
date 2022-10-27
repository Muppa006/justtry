import React, { useState, useEffect } from "react";
// import { useEffectX } from 'use-effect-x';
import Table from "./table.js";
import axios from "axios";

import { TiArrowUnsorted } from "react-icons/ti";
import { useSelector } from "react-redux";

//sytem component responsible for getting data and rendering data in table.js

const System = (props) => {
  
  const [tabler,set_Tabler]= useState();
  const [editd,set_Edited]=useState();
// const [abc,setabc] = useState({
// Sno : useSelector((state)=>state.systemdata.Sno),
// Scratches: useSelector((state)=>state.systemdata.Scratches)

// }); 

  const editdata=()=>{
    set_Edited(!editd)
  }

  useEffect( async()=>{ 
    
await axios
.get('/table')
.then(res=> {
  const x = []
  res.data.map(ele=>{
    x.push(<Table key={Math.random().toString()} itm={ele} editinf={editdata} />)
  })
  set_Tabler([...x])
})
.catch(err=>console.log(err))  

},[props.hsc,editd])

  return (
    <>
    
      <div className="tablecontainer">
        <h3>System Threshold </h3>
        <form className="form">
          <table className="table">
           
            <thead>
              <tr>  
              
                <th className="th">
                  S.no
                  <TiArrowUnsorted /> 
                </th>
                <th className="th">Scratches</th>
                <th className="th">Foreign Particles</th>
                <th className="th">Discoloration</th>
                {/* <th className="th">Cracks</th>*/}
                <th className="th">Bottle Cap</th>
                 <th className="th">Dent</th> 
                <th className="th">Others</th>
                <th className="th">Model Name</th>
                <th className="th">Action</th>
                
              </tr>
            </thead>
            
            <tbody>
              {tabler}
              <tr>
{/* {abc.Sno}{abc.Scratches} */}
                <td className="td">{useSelector((state)=>state.systemdata.Sno)}</td>

                <td className="td">{useSelector((state)=>state.systemdata.Scratches)}</td>

                <td className="td">{useSelector((state)=>state.systemdata.ForeignParticles)}</td>

                <td className="td">{useSelector((state)=>state.systemdata.Discoloration)}</td>
{/* 
                <td className="td">{useSelector((state)=>state.systemdata.Crack)}</td>*/}
                <td className="td">{useSelector((state)=>state.systemdata.Bottle_Cap)}</td>
                <td className="td">{useSelector((state)=>state.systemdata.Dent)}</td> 

                

                <td className="td">{useSelector((state)=>state.systemdata.Others)}</td>
                
                <td  style={{paddingLeft:"30px"}}>{useSelector((state)=>state.systemdata.Model)}</td>

              </tr>
            </tbody>
          </table>
        </form>
      </div>
     
    </>
  );
};
export default System;