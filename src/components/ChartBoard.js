import React,{Component} from "react"

export class ChartBoard extends Component{
    constructor(props) {
        super(props);
        this.state = {
                message: "",
        }
        this.TypedMessage = this.TypedMessage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render() {
        let padDesign = {
            overflow: "hidden",
            position: "absolute",
            left: "20%",
            width: "80%",
            height: "80%",
            borderLeft: "5px solid grey",
            padding: "20px"
        }
        let inputPart = {
            position: "absolute",
            width: "75%",
            top: "450px",
        }
        let textInputDesign = {
            width: "100%",
            height: "45px",
           // marginLeft: "5%",
            borderRadius: "10px",
        }
        let sendButton = {
            position: "absolute",
            left: "105%",
            top: "1px",
            borderRadius: "5px",
            width: "20%",
            height: "45px"
        }
        let messageDesign = {
            position: "absolute",
            width: "98%",
        }
        let chartingDesign = {
            overflowY: "auto",
            position: "absolute",
            width: "98%",
            height: "75%",
        }
        return (
            <div style={padDesign}>
                <div style={
                            {   textAlign: "center",
                                fontSize: "20px",
                                fontWeight: "bolder"}
                }>
                    {this.props.name}
                    <hr size= "2px" color= "black"/>
                </div>
                <div  style={chartingDesign}>
                      <div style={messageDesign}>
                          <ReceivedMessage
                              message = "hello"
                          />
                          <SentMessage
                              username={this.props.name}
                              message ={(2+3)}
                          />
                      </div>
                </div>
                <form>
                <div style={inputPart}>
                    <input
                        type = "text" style={textInputDesign}
                        value={this.state.message}
                        name = "message"
                        onChange={this.TypedMessage}
                        placeholder="Type your message here"/>
                    <input style={sendButton}  onClick={this.handleSubmit} type = "submit" value="send" autoComplete="off"/>
                </div>
                </form>
            </div>
        )

    }
    handleSubmit(event) {
        event.preventDefault();

    }
    TypedMessage(event) {
        this.setState({message: event.target.value});
        return (<p>{this.state.message}</p>)
    }
}

class SentMessage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let SentDesign = {
            color: "green",
            paddingLeft: "3%",
            width: "98%",
        }
        return (<div style={SentDesign}>
            <h5>
                {this.props.username}
            </h5>
            <p>
                {this.props.message}
            </p>
            <hr size = "1px" style={{color: "grey"}}/>
        </div>);
    }
}

class ReceivedMessage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let ReceivedDesign = {
            color: "black",
            paddingLeft: "3%",
            width: "98%",
        }

        return (<div style={ReceivedDesign}>
            <h5>
                Usama
            </h5>
            <p>
                {this.props.message}
            </p>
            <hr size = "1px" style={{color: "grey"}}/>
        </div>);
    }
}
