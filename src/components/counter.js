
// ################################################################################

import React from "react";

// ################################################################################

export default function Counter(props) {

    // Functions
    const incHandler = () => {

        let tmp = props.value;
        tmp++;
        if (tmp <= props.max) { props.setValue(tmp); }
    }

    const decHandler = () => {

        let tmp = props.value;
        tmp--;
        if (tmp >= props.min) { props.setValue(tmp); }
    }

    // ------------------------------------------------------------

    // Render
    return (
        <div className="Counter">
            <button className="Counter-Item" onClick={decHandler}>{"<"}</button>
            <p className="Counter-Item">{props.value}</p>
            <button className="Counter-Item" onClick={incHandler}>{">"}</button>
        </div>
    );
}

// ################################################################################
