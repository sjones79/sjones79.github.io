// LineChart
'use strict';

class LineChart extends React.Component {
    constructor(props) {
      super(props);
      this.canvasRef = React.createRef();
    }
  
    componentDidUpdate() {

        this.lineChart.data.labels = this.props.data.rows.map((stat) => {
            let gameDay = stat.gameDate.split(" ")[0];
            gameDay = moment(gameDay).format("MM/DD/YYYY");
            return gameDay;
        });

        this.lineChart.data.datasets[0].data = this.props.data.rows.map((stat) =>{
            //Yards/Att
            let yardsPerAtt = (stat.PsYds / stat.Att);
            return yardsPerAtt.toFixed(2);
        })

        this.lineChart.data.datasets[1].data = this.props.data.rows.map((stat) =>{
            //Cmp %
            let cmpPct = (stat.Cmp / stat.Att) * 100;
            return cmpPct.toFixed(2);
        })

        this.lineChart.update();
    }
  
    componentDidMount() {
        if(this.props !== undefined){
            if(this.props.data !== undefined){
                this.lineChart = new Chart(this.canvasRef.current, {
                    type: 'line',
                    options: {
                        legend: {
                            labels : {
                                fontColor: '#ffffff'
                            }
                        },
                        maintainAspectRatio: false,
                        scales: {
                            xAxes: [{
                                    ticks: {
                                        padding: 10,
                                        fontColor: '#e6e6e6'
                                    }
                                }],
                            yAxes: [{
                                ticks: {
                                    min: 0,
                                    padding: 10,
                                    fontColor: '#e6e6e6'
                                }
                            }]
                        }
                    },
                    data: {
                        datasets: [
                            {
                            label: this.props.title1,
                            fill: 'false',
                            lineTension:0.4,
                            fontColor: '#e6e6e6',
                            backgroundColor: this.props.color1,
                            pointRadius: 2,
                            borderColor: this.props.color1,
                            borderWidth: 1,
                        },
                        {
                            label: this.props.title2,
                            fill: 'false',
                            lineTension:0.4,
                            backgroundColor: this.props.color2,
                            pointRadius: 2,
                            borderColor: this.props.color2,
                            borderWidth: 1,
                        }]
                    }
                });
            }
        }
    }
  
    render() {
        let sectionClassNames = 'widget widget-chart';
        let divBodyClassNames = 'body no-margin';
        let divChartClassname = 'chart stats-line-chart';
        return (
            <div className="col-12">
                <section className={sectionClassNames}>
                    <header>
                        <h4>{this.props.headerTitle}</h4>    
                    </header>
                    <div className={divBodyClassNames}>
                        <div className={divChartClassname}>
                            <canvas ref={this.canvasRef} width="800" height="350" />
                        </div>
                    </div>
              </section>
          </div>
        
      );
    }
  }