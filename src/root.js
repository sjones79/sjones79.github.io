function refreshAppComponent(playerID){
    const appRoot = document.querySelector('#appRoot');
    ReactDOM.render(<App playerID={playerID} key={playerID} />, appRoot);
}