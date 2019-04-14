import React from 'react'

const Duration = props => {
    const { duration } = props

    //para tratar a formataçao de horas/minutos/segundos na tela

    const pad = num => num.toString().padStart(2, '0')
    let durationStr = ''
    // convertendo horas para segundos, 1 hora tem 360 segundos
    //100 segundos daria 0.alguma coisa. Com o floor arredondaria para 0
    const hour = Math.floor(duration / 3600)
    if (hour > 0) {
        durationStr = pad(hour) + ':'
    }

    const minutes = Math.floor((duration - (hour * 3600)) / 60)
    durationStr += pad(minutes)
    const seconds = duration - hour * 3600 - minutes * 60
    durationStr += ':' + pad(seconds)
    return <span>{durationStr}</span>
}

export default Duration