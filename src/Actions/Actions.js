import {ADD} from"./Actionstypes"
import {DELETE} from"./Actionstypes"
import {EDIT} from"./Actionstypes"
import {CHANGE} from"./Actionstypes"

export function change(e){
    return{type:CHANGE, e:e.target.value}
}

export function add(text){
    return{type:ADD,text}
}

export function del (index){
    return{type:DELETE,index}
}

export function edit (value,index){
    return{type:EDIT,value,index}
}

export function setinput (el){
    return{type:EDIT,el}
}


