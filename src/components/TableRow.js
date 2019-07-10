'use strict';

class TableRow extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        if(this.props !== undefined){
            const weekData = this.props.weekData;
                        
            let cellHiddenMutedClassName = 'hidden-xs text-muted';
            let date = weekData.gameDate.split(" ")[0];
            date = moment(date).format("MM/DD/YYYY");
            let cmpPct = (weekData.Cmp / weekData.Att) * 100;
            let yardsPerCarry = weekData.Rush > 0 ? (weekData.RshYds/ weekData.Rush) : 0;

            return (
                    
                <tr>
                    <td className="hidden-xs">{weekData.week}</td>
                    <td><img className="img-rounded" title={weekData.opponentTeamName} src={weekData.opponentTeamImg} alt={weekData.opponentTeamName} height="50"/></td>
                    <td className={cellHiddenMutedClassName}>{date}</td>
                    <td className="hidden-xs">
                        <p className="no-margin">
                            <small>
                                <span className="fw-semi-bold">Att:  </span>
                                <span className="text-muted">{weekData.Att}</span>
                            </small>
                        </p>
                        <p>
                            <small>
                                <span className="fw-semi-bold">Cmp:  </span>
                                <span className="text-muted">{weekData.Cmp}</span>
                            </small>
                        </p>
                    </td>
                    <td className={cellHiddenMutedClassName}>{cmpPct.toFixed(2)}</td>
                    <td className={cellHiddenMutedClassName}>{weekData.PsYds}</td>
                    <td className={cellHiddenMutedClassName}>{weekData.PsTD}</td>
                    <td className="hidden-xs">
                        <p className="no-margin">
                            <small>
                                <span className="fw-semi-bold">Carries:  </span>
                                <span className="text-muted">{weekData.Rush}</span>
                            </small>
                        </p>
                        <p>
                            <small>
                                <span className="fw-semi-bold">Yds/Carry:  </span>
                                <span className="text-muted">{yardsPerCarry > 0 ? yardsPerCarry.toFixed(2) : yardsPerCarry}</span>
                            </small>
                        </p>
                    </td>
                    <td className={cellHiddenMutedClassName}>{weekData.RshYds}</td>
                    <td className={cellHiddenMutedClassName}>{weekData.RshTD}</td>                                    
                    <td className={cellHiddenMutedClassName}>{weekData.Sack}</td>
                    <td className={cellHiddenMutedClassName}>{weekData.Int}</td>
                </tr>
            ); 
        }
        return null;
    }
}