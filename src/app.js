
// ################################################################################

import React from "react";
import axios from "axios";

import Header from './components/header';
import User from './components/user';
import Counter from './components/counter';

import logo from './assets/logo.svg';

// ################################################################################

const RANDOM_USER_API = "https://random-data-api.com/api/users/random_user";
const TEAM_SIZE = 6;  // Default team size
const TEAM_SIZE_MIN = 2;  // Default team size min
const TEAM_SIZE_MAX = 12;  // Default team size max

export default function App() {

    // Use State
    const [user, setUser] = React.useState(null);
    const [users, setUsers] = React.useState([]);
    const [usersCount, setUsersCount] = React.useState(0);
    const [incomMsg, setIncomMsg] = React.useState(true);
    const [teamSize, setTeamSize] = React.useState(TEAM_SIZE);
    const [hasMsg, setHasMsg] = React.useState(false);

    // ------------------------------------------------------------

    // Component Did Mount
    React.useEffect(() => {
        randomUserRequest();
        setTimeout(() => { setIncomMsg(false); }, 3000);
    }, []);

    // ------------------------------------------------------------

    // Functions
    const randomUserRequest = () => {
        axios.get(RANDOM_USER_API)
            .then(res => { setUser(res.data); })
            .catch(err => { console.log(err.message); });
    }

    const addUserToTeam = () => {
        if (users.length < teamSize) {
            let tmp = users;
            tmp.push(user);
            setUsers(tmp);
            setUsersCount(tmp.length);  // Force component reload
            randomUserRequest();
        }
    }

    const targetId = elm => elm.target.id.split("_").pop();

    const removeUser = (elm) => {
        if (users.length > 0) {
            let tmp = users;
            tmp.splice(targetId(elm), 1);
            setUsers(tmp);
            setUsersCount(tmp.length);  // Force component reload
        }
    }

    const randomTeam = () => {

        axios.get(`${RANDOM_USER_API}?size=${teamSize}`)
            .then(res => {
                setUsers(res.data);
                setUsersCount(res.data.length);
            })
            .catch(err => { console.log(err.message); });

    }

    const clearTeam = () => {
        setUsers([]);
        setUsersCount(0);
    }

    const loadTeam = () => {

        let tmp = JSON.parse(localStorage.getItem("MyTeam"));
        if (tmp) {
            setUsers(tmp);
            setUsersCount(tmp.length);
            setHasMsg({ text: "Team was successfuly loaded from local storage", color: "#40C040" });
        } else {
            setHasMsg({ text: "No data in local storage", color: "#F04040" });
        }
        setTimeout(() => { setHasMsg(false); }, 2000);
    }

    const saveTeam = () => {

        if (users.length) {
            localStorage.setItem("MyTeam", JSON.stringify(users));
            setHasMsg({ text: "Team was successfuly saved to local storage", color: "#40C040" });
        } else {
            setHasMsg({ text: "No data to save in local storage", color: "#F04040" });
        }
        setTimeout(() => { setHasMsg(false); }, 2000);
    }

    // ------------------------------------------------------------

    // Render
    if (incomMsg) {

        return (
            <div className="App-Incom">

                <h1>Welcome to</h1>
                <h2>Team Builder</h2>
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Developed with ReactJS</h2>

            </div>
        );

    } else {

        const selector = [<User key={0} user={user} />, null, null];

        selector[1] = user ? <button className="classBtn blueBtn classShadow" key={1} onClick={addUserToTeam}>Add</button> : null;
        selector[2] = user ? <button className="classBtn purpleBtn classShadow" key={2} onClick={randomUserRequest}>Next</button> : null;

        let members = [];
        for (let i in users) {
            members.push(<User user={users[i]} key={i} removeUser={removeUser} idx={"rem_" + i} />);
        }

        return (
            <div>

                <Header randomTeam={randomTeam} clearTeam={clearTeam} loadTeam={loadTeam} saveTeam={saveTeam} />

                {hasMsg ? <p className="App-Msg" style={{ color: `${hasMsg.color}` }}>{hasMsg.text}</p> : null}

                <div id="selector" className="App-Selector">
                    <h2 className="App-Title">Selector</h2>
                    <p className="App-Label">Team size</p>
                    {user ? <Counter key={0} value={teamSize} min={TEAM_SIZE_MIN} max={TEAM_SIZE_MAX} setValue={setTeamSize} /> : null}
                    {usersCount < teamSize ? selector : <p>Your team is complete</p>}
                </div>

                {members.length ? <h2 className="App-Title">Your team ({usersCount}/{teamSize})</h2> : null}
                <div id="team" className="App-Team">
                    {members}
                </div>

                <div className="Footer">
                    <h6 className="Footer-Text">
                        Team Builder &copy; 2021 / <a target="_blank" href="https://random-data-api.com" rel="noreferrer">Random Data API</a>
                    </h6>
                </div>
            </div>
        );
    }
}

// ################################################################################
