import React from 'react'


//aqui é uma outra forma de trabalhar com destruct assignment 
const Distance = ({ distance, metric }) => {
    let distanceStr = ''
    if (metric === 'metric') {
        distanceStr = distance + ' km'
    } else {
        //1km = 0,621371 mi
        const distanceMi = distance * 0.621371
        distanceStr = distanceMi.toFixed(2) + ' Mi'
    }
    //consideramos o padrao como sistema metrico
    return <span>{distanceStr}</span>

}

export default Distance