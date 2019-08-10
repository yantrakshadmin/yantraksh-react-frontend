import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div>
                <Link to={'/sign-in/'}>
                    Sign IN
                </Link>

                <br/>
                <br/>
                <br/>

                or &nbsp;
                <Link to={'/sign-up/'}>
                    Create a new account to access our awesome new services.
                </Link>
            </div>
        );
    }
}

export default Home;
