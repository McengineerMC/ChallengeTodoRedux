
import { ADD } from "../Actions/Actionstypes"
import { DELETE,EDIT,CHANGE } from "../Actions/Actionstypes"


const initialState={
    tab:["task1","task2"],
    inputvalue:""
}


const TaskReducer=(state=initialState,action)=>{
switch(action.type){
    case ADD :
        return {tab:[...state.tab,action.text],inputvalue:""}
    case DELETE:
        return {tab:state.tab.filter ((e,i)=> i!== action.index)}
        case EDIT:
            return {tab:state.tab.filter ((e,i)=> i!== action.index),inputvalue:action.el}
         case CHANGE:
             return {tab:state.tab,inputvalue:action.e}   

    default:
    return state;
}
}

export default TaskReducer