import React from 'react'
import ReactCardFlip from "react-card-flip";
import { useDispatch, useSelector } from "react-redux"
import { addLikes } from "../reducer/likeSlice"
const CardStyle = {
  
    padding: "20px",
    margin: "20px",
    width: "200px",
    height: "300px",
   
};
function Card({ project }) {
   console.log(project,'po0')
    const dispatch = useDispatch()
    const [isFlipped, setIsFlipped] = React.useState(false);
    function handleClick(){
        dispatch(addLikes({id:project.id, name: project.name, status: project.status,image:project.image }))
    }
  return (
      <div className='gallery'>
          <div className='box'>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal"  >
       
          <div
              onMouseEnter={() => setIsFlipped((prev) => !prev)}               
          >
      <img  src={project.image} alt="" />    
          </div>
          <div
              style={CardStyle}
              onMouseLeave={() => setIsFlipped((prev) => !prev)}
          >
              <div>
                          <h4><span style={{color:'red'}}><b>Name:</b></span>{project.name}</h4>
                          <h4><span style={{ color: 'red' }}><b>Status:</b></span>{project.status}</h4>
                          <h4><span style={{ color: 'red' }}><b>Gender:</b></span>{project.gender}</h4>
                          <h4><span style={{ color: 'red' }}><b>Species:</b></span>{project.species}</h4>
                          <button onClick={handleClick} >Like</button>

              </div>
          </div>
             
      </ReactCardFlip>
          </div>
      </div>
  )
}

export default Card