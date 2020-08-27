import React from 'react';
import {connect} from "react-redux"
import {del} from "../Actions/Actions"
import {edit} from "../Actions/Actions"
import {setinput} from "../Actions/Actions"


function Listtask({tab,del,edit,setinput}) {


  
    return (
    <div className="list-container">
        {tab.map((val,i)=>
        <p>
        <input type="text" value={val}/>
        <i class="fas fa-trash-alt" onClick={()=>del(i)} ></i>
        <i class="fas fa-pen" onClick={()=>{setinput(val)}}></i>
        </p>
        )}
    </div>
    )
}
//1
const mapStateToProps =state=>{
    return {tab:state.tab}
}

//2 
const mapDispatchToProps=dispatch=>{
    return {
       del:(i)=>{dispatch(del(i))},
       edit:(val,i)=>{dispatch(edit(val,i))},
       setinput:(val)=>{dispatch(setinput(val))}
    }
}
export default connect (mapStateToProps,mapDispatchToProps) (Listtask)