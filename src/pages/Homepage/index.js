import React, { PureComponent } from 'react'
import Carousel from '../../components/Carousel'

export default class Homepage extends PureComponent {
    static propTypes = {

    }

    render() {
        return (
            <div>
                {/* <NavBar /> */}
                <Carousel />
            </div>
        )
    }
}
