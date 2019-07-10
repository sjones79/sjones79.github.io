'use strict';

class FetchData extends React.Component{
    constructor(){
        super();
        this.state = {
            playerStats: {},
            performanceStats : {},
            defaultPlayerId : ''
        }
        this.fetchData=this.fetchData.bind(this);
    }
       
    componentDidMount(){
        this.fetchData();
    }

    componentDidUpdate(prevProps){
        this.fetchData(newplayerId);
    }

    fetchData(id=2543477){
        //Default Id to Blake Bortles
        let quarterBack = new QuarterbackData(id);
        let qbDataSrc = quarterBack.DATA_PATH[id];
        
        return fetch(qbDataSrc)
            .then(response => response.json())
            .then(parsedJSON => {
                let performanceStats = quarterBack.runTotalsCalculations(parsedJSON)
                this.setState({playerStats: parsedJSON, performanceStats: performanceStats})            
            })
            .catch(error => console.log(error));
    }
    
    render(){
        const playerStats = this.state.playerStats
        const performanceStats = this.state.performanceStats;
        return (
            <App playerStats={playerStats} performanceStats={performanceStats} />    
        )
    }
}
