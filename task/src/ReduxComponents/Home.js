import { useState, useEffect } from 'react'
import Card from './Card'
import { useSelector, useDispatch } from "react-redux";
function Home() {
    const userInformation = useSelector(state => state.user)
   
    return (
        <div>
        {
           userInformation.user.map((item, index) => (
                <Card project={item} key={`card-${index}`} />
            ))
        }
        
        </div >
        )
}
export default Home;
