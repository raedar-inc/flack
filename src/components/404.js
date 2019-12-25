import React from "react";
function err404(){
    //this is simply a component to be shwon whenever one makes a wrong route/request
    return(
        <div className="container jumbotron bg bg-dark">
            <div className=" text-center jumbotron bg-dark">
                <h1 className="text-danger">404</h1>
                <h2 className="text-white">The page you are looking for cannot be found</h2>
            </div>
        </div>
    )

}

export default err404;
