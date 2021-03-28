import React, { PureComponent, Fragment } from 'react'
import Carousel from '../../components/Carousel'

export default class Homepage extends PureComponent {
    static propTypes = {

    }

    render() {
        return (
            <Fragment>
                {/* <NavBar /> */}
                <Carousel />
            </Fragment>
        )
    }
}
