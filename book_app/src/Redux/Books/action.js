import axios from "axios"
import { GET_BOOKS_FAILURE, 
         GET_BOOKS_REQUEST, 
         GET_BOOKS_SUCCESS } from "./actionType"

   export const getBookRequestAction=()=>{
    return {type:GET_BOOKS_REQUEST}
   }
   export const getBookSuccessAction=(payload)=>{
    return {type:GET_BOOKS_SUCCESS,payload}
   }
   export const getBookFailureAction=()=>{
    return {type:GET_BOOKS_FAILURE}
   }

  export const getBooks=(param)=>(dispatch)=>{
   dispatch(getBookRequestAction());
    axios
    .get("http://localhost:3030/books",param)
    .then((res)=>{
      dispatch(getBookSuccessAction(res.data))
      // console.log(res)
    })
    .catch((err)=>{
      dispatch(getBookFailureAction())
    })

  }