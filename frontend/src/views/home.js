import React from 'react'
import Navbar from '../components/common/navbar'
import CarousalHighlight from '../components/carousel_home/CarousalHighlight';

class Home extends React.Component {
    render = () => {
        return (<div>
            <Navbar />
            <CarousalHighlight />
        </div>)
    }
}

export default Home