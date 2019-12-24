import React, {Component} from 'react';
import Navbar from "./Navbar";

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }
    //this is the dashborad
   render() {
        return(
       <div>
           <Navbar name={this.props.location.state.user}/>{/* "this.props.location.state.user" gets you information of the user who is redirected here(his name appears on top) */}
           <div className="container-fluid text-center">
               <h1>Welcome to Flack</h1>
           </div>
       </div>

   )}
}
export default Dashboard;
