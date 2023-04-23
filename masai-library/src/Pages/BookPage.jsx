import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllData } from '../Redux/DashboardRedux/action';
import "./BookPage.css";

export const BookPage = () => {

  const adminData = useSelector((store) => store.DashBoardReducer.adminData);
const dispatch=useDispatch();



  useEffect(() => {
    dispatch(getAllData);
  }, []);

  return (
    <div>
      {
        adminData.map((el)=>{
          return(
            <div className='container'>
              <div className='cards'>
                <div className='image'>
                  <img src={el.image_url} alt={el.book_name} />
                </div>
                <div className='info'>
                    <h1>{el.book_name}</h1>
                    <h3>{el.author}</h3>
                    <h5>{el.edition}</h5>
                    <h5>{el.genre}</h5>
                    <h5>{el.publisher}</h5>
                    <h3>{el.cost}</h3>
                    <button value={el.borrowed}>Borrowed</button>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
