import React, { useState, useEffect } from 'react';



const ReactList = () => {

    const reactStuffArr = [
        {title:'ReAcT', id:"1"},
        {title:'recoil is awesome', id:"2"},
        {title:'Props are not good and should never been developed', id:"3"}
]


    return (
        <div className="reactlist" >
            <ul data-testid="react-list">
                {reactStuffArr?.map((data)=>(
                    <li key={data.id} >{data.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default ReactList;
