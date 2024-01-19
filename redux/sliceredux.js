import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    value :0,
    kategori :"",
    search:"",
    file :"",
    id : []
}

const counteslice = createSlice({
    name : "counter",
    initialState,
    reducers :{
        addvalue :(state,action)=>{
           state.value =  state.value + action.payload 
        },
        addsearch : (state,action)=>{
            state.search = action.payload
        },
        addkategori : (state,action)=>{
            state.kategori = action.payload
        },
        addfile : (state,action)=>{
            state.file = [...state.file,action.payload]
        },
        addid : (state,action)=>{
            state.id = [...state.id ,action.payload]
        }
    }

})
 export const {addvalue,addsearch,addfile,addid,addkategori} = counteslice.actions
 export default counteslice.reducer