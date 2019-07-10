'use strict';

class StatSummary extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        
        let statCardSmallCol = 'col-md-6 col-lg-3';
        let statCardJumboCol = 'col-6 col-lg-6';
        
        if(this.props.playerStats !== undefined){
            if(this.props.playerStats.rows !== undefined){
                const singlePlayerStats = this.props.playerStats.rows[0];
                const qbStats = this.props.qbStats;

                return (
                    <div className="row">
                        <div className={statCardSmallCol}>
                            <StatCard title={'QB Rating'} teamImg={singlePlayerStats.teamImg} name={singlePlayerStats.name} qbStats={qbStats} />
                            <StatCard title={'Total Cmp %'} teamImg={singlePlayerStats.teamImg} name={singlePlayerStats.name} qbStats={qbStats} />
                        </div>
                        <div className={statCardJumboCol}>
                            <StatCardJumbo title={'2018 Season Summary'} subTitles={['Yds/Att','Cmp %','TD Pass %','Int %']} items={[qbStats.YdsPerAtt.toFixed(2),qbStats.totalCmpPct.toFixed(2),qbStats.tdPsPct.toFixed(2),qbStats.intPsPct.toFixed(2)]} />
                            <StatCardJumbo title={'2018 Season Totals'} subTitles={['Yds','TDs','Ints','Sacks']} items={[qbStats.totalYds,qbStats.totalTDs,qbStats.totalInts,qbStats.totalSacks]} />
                        </div>
                        <div className={statCardSmallCol}>
                            <StatCard title={'Total Carries'} teamImg={singlePlayerStats.teamImg} name={singlePlayerStats.name} qbStats={qbStats} />
                            <StatCard title={'Total Rsh Yds'} teamImg={singlePlayerStats.teamImg} name={singlePlayerStats.name} qbStats={qbStats} />
                        </div>
                    </div>
                );
            }
        }
        return null;
    }
}
