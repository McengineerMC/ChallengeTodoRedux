import React from 'react'
import {connect} from "react-redux"
import {add} from "../Actions/Actions"
import {change} from "../Actions/Actions"



function Formtask({change,add,inputvalue}) {


    


    return (
        <form>
        <input  value={inputvalue} onChange={(e)=>change(e)} type="text" placeholder="add a new todo ..."/>
        <button onClick={(e)=>{e.preventDefault();inputvalue.trim()!==""?add(inputvalue):alert("type a todo")}}>ADD</button>
        </form>    
    )
}

//1
const mapStateToProps =state=>{
    return {inputvalue:state.inputvalue}
}
//2 
const mapDispatchToProps=dispatch=>{
    return {
       add:(inputvalue)=>{dispatch(add(inputvalue))},
       change:(e)=>{dispatch(change(e))}
    }
}





//connect react to redux
export default connect (mapStateToProps,mapDispatchToProps) (Formtask)