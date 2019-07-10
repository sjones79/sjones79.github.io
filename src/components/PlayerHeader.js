'use strict';

class PlayerHeader extends React.Component{
    
    constructor(props){
        super(props);

        this.state = {
            playerStats: props
        };
    }
    
    render(){
        
        if(this.props.playerStats !== undefined){
            if(this.props.playerStats.rows !== undefined){                
                let playerInfo = this.props.playerStats.rows[0];
                let firstName = playerInfo.name.split(' ')[0];
                let lastName = playerInfo.name.split(' ')[1];
                let playerNumber = '#'+playerInfo.jerseyNumber;
        
                return(
                    <h1 className="page-title">
                        <PlayerImg src={playerInfo.playerImg} alt={playerInfo.name} />
                        {playerNumber + ' '+firstName}
                        <span className="fw-semi-bold">{' '+lastName}</span>
                    </h1>
        
                )
            }
        }
        return null;
    }
}
