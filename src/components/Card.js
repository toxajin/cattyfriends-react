import React from 'react'
import './Card.css'

const Card = ({name,email,id}) =>
{
    return(
    <div className='tc newColor dib br3 pa3 ma2 grow bw2 shadow-5'>
        <img src = {`https://robohash.org/${id}?size=200x200;set=set4`} alt='robots'/>
        <div>
            <h2 className>{name}</h2>
            <p className>{email}</p>
        </div>
    </div>
    );
}

export default Card;