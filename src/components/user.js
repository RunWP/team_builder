
/*
Useful user info structure (json)
uid:........................ "81208b7a-7383-4840-beb4-d7714690e0bc"
first_name:................. "Anthony"
last_name:.................. "Padberg"
avatar:..................... "https://robohash.org/nobisculpatemporibus.png?size=300x300&set=set1"
gender:..................... "Genderqueer"
date_of_birth:.............. "1998-08-08"
employment.key_skill:....... "Problem solving"
address.country:............ "United States"
*/
// ################################################################################

import React from "react";

// ################################################################################

export default function User(props) {

    // Embeded component
    const RemoveButton = () => (
        <button
            className="classBtn redBtn"
            id={"btn_" + props.idx}
            onClick={props.removeUser}
        >Remove</button>
    );
    
    // ------------------------------------------------------------

    let itmClass = props.removeUser ? "User Selected" : "User Success";

    // Render
    if (!props.user) {

        return (
            <div className="User Warn">
                <h2>Sorry no user was found</h2>
                <h3>Maybe the public</h3>
                <a className="classBtn whiteBtn"
                    target="_blank"
                    href="https://random-data-api.com"
                    rel="noreferrer"
                >Random Data API</a>
                <h3>is shut down</h3>
            </div>
        );

    } else {

        return (
            <div className={itmClass} title={props.user.uid}>
                <h1 className="User-Text">{props.user.first_name}</h1>
                <h3 className="User-Text">{props.user.last_name}</h3>
                <img className="User-Img" src={props.user.avatar} width="200" alt="User Avatar"/>
                <p className="User-Text">{props.user.gender}</p>
                <p className="User-Text">{props.user.date_of_birth}</p>
                <p className="User-Text">{props.user.employment.key_skill}</p>
                {props.removeUser ? <RemoveButton /> : null}
            </div>
        );
    }
}

// ################################################################################
