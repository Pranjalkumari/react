import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState ={
    todos:[ ]

   
}


//write them(state, reducers, and actions) together in one file using createSlice
//state- updated state value in the store milta h 
export const todoSlice = createSlice({  // need three (name, initialState, reducer)
        name:"todo",
        initialState,
        reducers:{  // reducers is a functionality and here we can write the defination of function  but api context we only declare the function 
              addTodo:(state, action)=>{
                const todo ={
                    id:nanoid(),
                    text: action.payload
                }
                state.todos.push(todo)
              },


              removeTodo:(state, action)=>{
                state.todos = state.todos.filter((todo)=> todo.is !== action.payload)
              },

              updateTodo:(state, action)=>{
                const {id, updatedtodo} = action.payload;
                const ind = state.todos.findIndex((todo)=> todo.id === id);
                if(ind!== -1)
                {
                    state.todos[ind] = {
                        ...state.todos[ind], //  This spreads the existing properties of the todo into a new object.(“Keep everything this todo already has.”)

                         ...updatedtodo, //This spreads the new values you want to update on top of the existing todo.
                         }
                }
              }
        }
})

//export all functionality
export const {addTodo, removeTodo, updateTodo} = todoSlice.actions
export default todoSlice.reducer