import { createSlice } from "@reduxjs/toolkit"
export const likeSlice=createSlice({
    name:'like',
    initialState:{
        likeList:[]
    },
    reducers:{
        addLikes:(state,action)=>{
            console.log(action.payload,'adding')
            const itemInCart = state.likeList.find((item) => item.id === action.payload.id);
            if (!itemInCart) {
                state.likeList.push({ ...action.payload })
            }
        },
        delLikes:(state,actions)=>{
            return{
                likeList:[...state.likeList.slice(0,actions.payload),...state.likeList.slice(actions.payload+1)]  
            }
        }
    }
})
export const { addLikes, delLikes } = likeSlice.actions;
export const selectProduct = (state) => state.like.likeList;
export default likeSlice.reducer;