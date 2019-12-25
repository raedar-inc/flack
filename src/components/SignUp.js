import React, { Component } from 'react';
import {Redirect ,Link} from "react-router-dom";

class SignUp extends Component{

    constructor(props) {
        super(props);
        //this is the state
        this.state = {

            firstName :"",
            lastName :"",
            userName :"",
            email :"",
            Password: "",
            validation: false

        }
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    //this handles input from the form.and updates the state accordingly
    handleInput(e){
        this.setState({[e.target.name] : e.target.value})
    }
    // component did mount is a lifecycle method.it is called first when ever you visit this page.
    componentDidMount() {
        // here simply check in browser to see if there is a local storage of App_users,if so it does nothing if not then its makes it/creates it
        if(localStorage.getItem("App_users")){
            let users = JSON.parse(localStorage.getItem("App_users"))
        }
        else{
            localStorage.setItem("App_users","[]")
        }
    }
    //this handles submission of data to the local storage.first checks to see if the username provided and the email aren't used already
    handleSubmit(event){
        event.preventDefault()
        let storage = JSON.parse(localStorage.getItem("App_users"))

        for(let x of storage) {
            if (x.userName === this.state.userName) {
                return alert("username " + x.username + "is already taken")
            }
            else if (x.email === this.state.email){
                return alert(x.email + "is already taken")
            }

        }
        storage.push(this.state);
        localStorage.setItem("App_users",JSON.stringify(storage));
        console.log(storage);
        this.setState({validation:true})// the validation state is changed to true after sending the data to local storage.


    }


   

    render(){
        //when the validation is set to true(meaning you are done with sign up), then is redirects you to the login
        if(this.state.validation){
            return (
                <Redirect to="/SignIn"/>
            )
        }
        //this is simply a design on the form
        let design ={
            width: 700
        }
        //this is the form.only rendered when validation is false.which is false initially.

        return(
            <div>
                {/*this is the top banner*/}
                <div className='text-xl-center bg-dark text-white jumbotron'>
                    <h1 className='text-white' >Welcome to flack</h1>
                    <p className='lead'>The number one chat app</p>
                    <p className='lead'>Please Sign up to continue. if You Already have an account,Please login</p>
                </div>

                {/*Form starts from here-signUp form*/}
                <div className='container  ' style={design}>
                    <form className='form' >
                        <legend className='font-weight-bolder'>Sign Up Here</legend>

                        {/* First Name input*/}
                        <div className="form-group">
                            <label>First Name</label>
                            <input
                            type='text'
                            className="form-control form-control-lg"
                            name = 'firstName'
                            value={this.state.firstName}
                            onChange={this.handleInput}
                            required
                            />
                        </div>

                        {/* Last name input*/}
                        <div className="form-group">
                            <label>Last Name</label>
                            <input
                                type='text'
                                className="form-control form-control-lg"
                                name = 'lastName'
                                value={this.state.lastName}
                                onChange={this.handleInput}
                                required
                            />
                        </div>

                        {/* the Username input*/}
                        <label>Username</label>
                        <div className="form-group">
                            <input
                                type='text'
                                className="form-control form-control-lg"
                                name = 'userName'
                                value={this.state.userName}
                                onChange={this.handleInput}
                                required
                            />
                        </div>

                        {/*the Email input*/}
                        <label>Email</label>
                        <div className="form-group">
                            <input
                                type='email'
                                className="form-control form-control-lg"
                                name = 'email'
                                value={this.state.email}
                                onChange={this.handleInput}
                                required
                            />
                        </div>

                        {/*Pass word input*/}
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type='password'
                                className="form-control form-control-lg form-inline"
                                name = 'Password'
                                value={this.state.Password}
                                onChange={this.handleInput}
                                required
                            />
                        </div> <br/>

                        {/*the submit button*/}
                        <button onClick={this.handleSubmit} className='btn bg-success' > Sign Up</button>

                    </form>
                    <div className='text-sm-right container-fluid '>
                        {/*this text is alink to the sign in route/page*/}
                        <Link to='/'>Already have an account? sign In here</Link>

                    </div>
                    <br/>
                    <br/>

                </div>
            </div>
        )
    }
}
export default SignUp;
