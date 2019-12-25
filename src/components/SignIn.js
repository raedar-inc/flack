import React, { Component } from 'react';
import {Redirect ,Link} from "react-router-dom";
class SignIn extends Component{
    constructor(props) {
        super(props);
        this.state={
            userName:"",
            Password: "",
            Authorise:false
        }
        this.handleInput = this.handleInput.bind(this)
        this.logIn = this.logIn.bind(this)
    }
    //this handles the login.checks if the user is there
    logIn(event) {
        event.preventDefault()//this prevents the page from refreshing when you submit the form
        let users = JSON.parse(localStorage.getItem("App_users"))
        for(let x of users) {
            if(x.userName.trim() === this.state.userName.trim() && x.Password.trim() === this.state.Password.trim()){
                this.setState({Authorise:true})
                return(
                    console.log(x.userName + "is found ")
                )
            }
        }
        return alert(this.state.userName + " is not found please sign up")
    }
    //this handles the input and updates the state
    handleInput(e){
        this.setState({[e.target.name] : e.target.value})
    }
    render(){
        let c =  this.state.userName;
        let design ={
            width: 700
        }
        if(this.state.Authorise){
            return (
                //this redirects you to the dashboard after signing in .ie if Authorise is true.
                <Redirect to={{
                    pathname:'/Dashboard', //these props are passed in when redirecting you to dashboard
                    state:{user: this.state.userName}
                }}/>

            )
        }

        return(
            //this is the banner
            <div>
                <div className='text-xl-center bg-dark text-white jumbotron'>
                    <h1 className='text-white' >Welcome to flack</h1>
                    <p className='lead'>The number one chat app</p>
                </div>
                <div className='container ' style={design}>
                    <form className='form'>
                        <legend className='font-weight-bolder'>Welcome back, sign in to continue</legend>
                        <div className="form-group">
                            <label>Username</label>
                            <input
                                type='text'
                                className="form-control form-control-lg"
                                name = 'userName'
                                value={this.state.userName}
                                onChange={this.handleInput}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type='password'
                                className="form-control form-control-lg form-inline"
                                name = 'Password'
                                value={this.state.password}
                                onChange={this.handleInput}
                                required
                            />
                        </div> <br/>
                        <button className='btn bg-success' onClick={this.logIn}> Sign In</button>

                    </form>
                    <div className='text-sm-right '>
                        {/*this text is alink to the sign in route/page*/}
                        <Link to='/SignUp'>You dont have an account? sign Up here</Link>
                    </div>
                    <br/>
                    <br/>

                </div>
            </div>
        )
    }
}
export default SignIn;
