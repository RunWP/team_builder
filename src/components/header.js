
// ################################################################################

import React from "react";

import logo from './../assets/logo.svg';

// ################################################################################

export default function Header(props) {

    // Render
    return (
        <div className="Header">
            <div className="Header-Panel">
                <img src={logo} className="Header-logo" alt="logo" />
                <a className="Header-Btn greenBtn classShadow"
                    target="_self"
                    href="#selector"
                    rel="noreferrer"
                >Team selector</a>
                <a className="Header-Btn greenBtn classShadow"
                    target="_self"
                    href="#team"
                    rel="noreferrer"
                >Your team</a>
                <button className="Header-Btn blueBtn classShadow" onClick={props.randomTeam}>Random team</button>
                <button className="Header-Btn redBtn classShadow" onClick={props.clearTeam}>Clear team</button>
                <button className="Header-Btn yellowBtn classShadow" onClick={props.loadTeam}>Load team</button>
                <button className="Header-Btn orangeBtn classShadow" onClick={props.saveTeam}>Save team</button>
            </div>
            <h1 className="App-mainTitle classShadow">Team Builder</h1>
        </div>
    );
}

// ################################################################################
