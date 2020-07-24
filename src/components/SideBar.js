import React, {Component} from 'react'
import {ChartBoard} from "./ChartBoard";
import Friend from "./charts.JSON"

export class SideBar extends Component{
    constructor(props) {
        super(props);


    }
    render() {

        let asideDesign = {
            position: "absolute",
            width: "25%",
            height: "80%",
            padding: "20px",
        }
        let notificationDesign = {
            position: "absolute",
            width: "70%",
            top: "90px",
            "overflow-y": "scroll",
            height: "82%",
        }

        return (
                <aside   style={asideDesign}>
                    <div>
                      <SearchPad/>
                    </div>
                     <section  style={notificationDesign}>
                         <ChartPad name= "shema" message = "How are u?" number = "3"/>
                         <ChartPad name= "usama" message = "How are u?" number = "1"/>
                         <ChartPad name= "abdallah" message = "How are u?" number = "1"/>
                         <ChartPad name= "usama" message = "How are u?" number = "4"/>
                         <ChartPad name= "kakumba" message = "How are u?" number = "3"/>
                         <ChartPad name= "lutaaya" message = "How are u?" number = "1"/>
                         <ChartPad name= "usama" message = "How are u?" number = "2"/>

                     </section>
                </aside>
        )
    }
}

export class SearchPad extends Component{
    constructor(props) {
        super(props);
        this.state = {}
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render() {
            let searchButton = {
                position: "absolute",
                left: "200px",
                borderRadius: "10px",
                width: "20%",
                height: "35px",
                visibility: "hidden"
            }

            let textInputDesign = {
                position: "absolute",
                width: "65%",
                height: "35px",
                marginRight: "5px",
                marginLeft: "2px",
                borderRadius: "10px",
            }
        return (
            <div>
                <form>
                 <input placeholder= "search to start a chart" type = "text" style={textInputDesign} autoComplete="off"/>
                 <input type = "submit" value = "search" style={searchButton} onClick={this.handleSubmit}/>
                </form>
            </div>
    )
    }
    handleSubmit(event) {
        event.preventDefault();

    }
}

export class  ChartPad extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        let design = {
            width: "70%",
            fontWeight: "bold",
        }
        let numDesign = {
            fontSize: "10px",
            position: "absolute",
            left: "65%",
            color: "green",
            border: "1px grooved green",
            borderRadius: "40px",
            padding: "5px 5px",
        }
        return (
                 <div  style={design} >
                        {this.props.name}
                     <span style={numDesign}>
                         {this.props.number}
                     </span>
                     <div>
                         <p style={{color: "darkgrey", fontWeight: "normal"}}>
                             {this.props.message}
                         </p>
                         <hr size = "1px" style={{color: "grey"}}/>
                     </div>
                </div>
        )
    }
}

