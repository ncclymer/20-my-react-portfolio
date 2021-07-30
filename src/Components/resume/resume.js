import React, { Component } from "react";
import Resume from "../../assets/img/resume.pdf"

class MyResume extends Component {
    render() {
        return (
            <div className="resume">
                <a href={Resume} target="_blank" rel="noreferrer">Download Resume</a>
            </div>
        )
    }
}

export default MyResume