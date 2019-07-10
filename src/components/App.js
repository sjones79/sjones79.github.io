'use strict';

class App extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            playerStats: {},
            performanceStats : {},
            playerID : 2543477
        }
        this.fetchData=this.fetchData.bind(this);  
    }

    componentDidUpdate(props){        
        if(props.playerID !== undefined){
            if(props.playerID != this.state.playerID){
                this.fetchData(props.playerID);
            }
        }
    }
       
    componentDidMount(){
        this.fetchData();
    }
    
    fetchData(id=2543477){
        //Default Id to Blake Bortles
        let quarterBack = new QuarterbackData(id);
        let qbDataSrc = quarterBack.DATA_PATH[id];        
        return fetch(qbDataSrc)
            .then(response => response.json())
            .then(parsedJSON => {
                let performanceStats = quarterBack.runTotalsCalculations(parsedJSON)
                this.setState({playerStats: parsedJSON, performanceStats: performanceStats, playerID: id})            
            })
            .catch(error => console.log(error));
    } 

    render(){
        const playerStats = this.state.playerStats
        const performanceStats = this.state.performanceStats;
     
        return (
            <React.Fragment>
                <PlayerHeader playerStats={playerStats} />
                <StatSummary playerStats={playerStats} qbStats={performanceStats} />
                <div className="row">
                    <LineChart key={'trends'} data={playerStats} title1="Yds/Att" title2="Cmp %" color1="orange" color2="aquamarine" headerTitle={'Yds/Att & Cmp%'} />
                    <BarChart key={'passing'} data={performanceStats} title="Totals" color="#fff" labels={Object.keys(performanceStats)} labelArr={['totalCmp','totalAtt','totalPsTD','totalInts', 'totalSacks']} headerTitle={'Passing Stat Comparisons'} />
                    <BarChart key={'rushing'} data={performanceStats} title="Totals" color="#fff" labels={Object.keys(performanceStats)} labelArr={['totalCarries','totalRshYds','totalRshTD']} headerTitle={'Rushing Stat Comparisons'} />
                </div>
                <div className="row">
                    <TableSection playerStats={playerStats} qbStats={performanceStats} />
                </div>
            </React.Fragment>
        )
    }
}
let appRoot = document.querySelector('#appRoot');
ReactDOM.render(<App key='initial'/>, appRoot);
