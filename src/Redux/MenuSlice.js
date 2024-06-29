import { createSlice } from "@reduxjs/toolkit";

const menuSlice=createSlice({
    name:"menuSlice",
    initialState:{
        isMenuVisible:false
    },
    reducers:{
        changeMenuVisibility(state){state.isMenuVisible=!state.isMenuVisible;}
    }
})

export const {changeMenuVisibility}=menuSlice.actions
export default menuSlice.reducer