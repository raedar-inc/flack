import React, {Component} from 'react';
import {SideBar} from "./SideBar";
import {ChartBoard} from "./ChartBoard";

export class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userLoggedIn: props.location.state.user,
        }
    }
    //this is the dashborad
    render() {
        return(
            <div>
                {/* <Navbar name={this.props.location.state.user}/> "this.props.location.state.user" gets you information of the user who is redirected here(his name appears on top) */}
                <nav className="navbar navbar-default navbar-fixed-top bg-dark">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <h1 className="text-white">FLACK</h1>
                            <div className="text-center">
                                <ul className="list-inline text-white">
                                    <li className="list-inline-item">Home</li>
                                    <li className="list-inline-item">Profile</li>
                                    <li className="list-inline-item">About</li>
                                </ul>
                            </div>
                        </div>
                        <div className="text-white">
                            <span> logged in as : <b>{ this.state.userLoggedIn} </b></span>
                        </div>
                    </div>
                </nav>
               {/* <div className="container-fluid text-center">
                    <h1>Welcome to Flack</h1>
                </div>*/}
                <div>
                    <SideBar/>
                </div>
                    <div>
                        <ChartBoard name={this.state.userLoggedIn}/>
                    </div>
                 </div>
        )
    }
}

