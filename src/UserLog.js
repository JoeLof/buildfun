//UserLog.js

function UserLog(props){
    return (
      <div>
        {props.user ? <h1>Huzzah! You've arrived!!!</h1> : <h1>Who the heck are you?</h1>}
        <button onClick={props.logOut}>Log Out Here!</button>
        <button onClick={props.logIn}>Log BACK in!!</button>
      </div>
    );
}

export default UserLog;