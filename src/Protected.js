import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Protected = (props) => {
    const {Component} = props;
    const Navigate = useNavigate();

    useEffect(() => {
        let login = localStorage.getItem("user-info");
        if(!login) {
            Navigate("/");
        }
    })
    return(
        <div>
            <Component></Component>
        </div>
    )
}

export default Protected