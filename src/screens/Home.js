import React from 'react'
import Header from '../Header'
import {Image} from 'semantic-ui-react'

const Home = props => {
    return (
        <div>
            <Header />
            <h1>Seja bem-vindo!</h1>
            <Image src='/logo-home.png' size='medium' spaced={true} centered={true} />
        </div>
    )
}

export default Home 