'use strict';

class StatCard extends React.Component{
    constructor(props){
        super(props);    
    }
    
    render(){        
        //stat card data
        let mainTitle = this.props.title;
        let subTitle1;
        let subTitle2;
        let subStat1;
        let subStat2;
        let mainStat;
        
        let sectionTagClassNames = 'widget widget-stat-card';
        let flexRowDivClassNames = "flex-nowrap row";
        let h2TagClassNames = "m-0 fw-normal";
        
        
        if(this.props !== undefined){
            let stats = this.props.qbStats;
            if(mainTitle === "QB Rating"){
                mainStat = stats.qbRating.toFixed(2);
                subTitle1 = "Passing Yds";
                subTitle2 = "Passing TDs";
            
                subStat1 = stats.totalPsYds;
                subStat2 = stats.totalPsTD;
            }
        
            if(mainTitle === "Total Cmp %"){
                mainStat = stats.totalCmpPct.toFixed(2);
                subTitle1 = "Total Att";
                subTitle2 = "Total Cmp";
            
                subStat1 = stats.totalAtt;
                subStat2 = stats.totalCmp;
            }
        
            if(mainTitle === "Total Carries"){
                mainStat = stats.totalCarries;
                subTitle1 = "Yds/Carry";
                subTitle2 = "Rushing TD";

                subStat1 = stats.YdsPerCarry.toFixed(2);
                subStat2 = stats.totalRshTD;
            }
            if(mainTitle === "Total Rsh Yds"){
                mainStat = stats.totalRshYds;
                subTitle1 = "Rushing TD";
                subTitle2 = "TD Rsh %";

                subStat1 = stats.totalRshTD;
                subStat2 = stats.tdRshPct.toFixed(2);
            }
        
            return (
                <section className={sectionTagClassNames}>
                    <div className="widget-body">
                        <div className="clearfix"></div>
                        <div className={flexRowDivClassNames}>
                            <div className="col-3">
                                <TeamImg src={this.props.teamImg} name={this.props.name} />
                            </div>
                            <div className="col-9">
                                <h4 className="m-0">{mainTitle}</h4>
                                <h2 className={h2TagClassNames}>{mainStat}</h2>
                            </div>
                        </div>
                        <br/>
                        <div className={flexRowDivClassNames}>
                            <StatCardMiniItem subtitle={subTitle1} item={subStat1} />
                            <StatCardMiniItem subtitle={subTitle2} item={subStat2} />
                        </div>
                    </div>
                </section>
            );
        }
        return null;
    }
    
}

