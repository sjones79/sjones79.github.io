'use strict';

class TableSection extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        
        let tableSectionClassNames = 'widget widget-chart';
        let tableClassName = "table table-striped";
        
        if(this.props.playerStats !== undefined){
            if(this.props.playerStats.rows !== undefined){
                const playerStats = this.props.playerStats;
                                
                return (
                    <div className="col-12">
                        <section className={tableSectionClassNames}>
                            <header>
                                <h4> 2018 Week by Week <span className="fw-semi-bold">Stats</span></h4>
                            </header>
                            <div className="body">
                                <table className={tableClassName}>
                                    <thead>
                                        <tr>
                                            <th className="hidden-xs">Week</th>
                                            <th className="hidden-xs">VS</th>
                                            <th className="hidden-xs">Game Day</th>
                                            <th className="hidden-xs">Passing</th>
                                            <th className="hidden-xs">Cmp %</th>
                                            <th className="hidden-xs">Pass Yds</th>
                                            <th className="hidden-xs">Pass TDs</th>
                                            <th className="hidden-xs">Rushing</th>
                                            <th className="hidden-xs">Rsh Yds</th>
                                            <th className="hidden-xs">Rsh TDs</th>
                                            <th className="hidden-xs">Sacks</th>
                                            <th className="hidden-xs">Ints</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {playerStats.rows.map((row) => {
                                            return <TableRow weekData={row} key={row.week} />
                                        })}

                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </div>
                );
            }
        }
        return null;
    }
}
