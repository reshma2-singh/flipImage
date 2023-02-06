import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { addLikes, delLikes } from '../reducer/likeSlice'
function Screen() {
  const val = useSelector(state => state.like.likeList)
  const dispatch = useDispatch();
 console.log(val,'90')
  return (
    <div>
{
  val.map((item,index)=><div className='scrn'>
    <div>
      <img className='imgg' src={item.image} alt="error"/>
    </div>
    <h5 className='name'>{item.name}</h5>
    <h5 className='status'>{item.status}</h5>
    <div>
      <button className='btn3' onClick={() => dispatch(delLikes(index))}>dislike</button>
    </div>
  </div>)
}
     
    </div>
  )
}

export default Screen