class BarChart extends React.Component {
    constructor(props) {
      super(props);
      this.chartRef = React.createRef();
    }

    componentDidUpdate() {
        let labelArr = this.props.labelArr;
        let filteredLabels = this.props.labels.map((label ) => {
            if(labelArr.indexOf(label) > -1 ){
                return label;
            }
        } );
        
        this.barChart.data.labels = filteredLabels.filter((label) => {
            return label !== undefined;
        })
        let filteredData = (Object.entries(this.props.data)).map((d) => {
            if(this.barChart.data.labels.indexOf(d[0]) > -1 ){
                return d[1];
            }
        });

        this.barChart.data.datasets[0].data = filteredData.filter((data) =>{
           return data !== undefined;
        })
        this.barChart.update();
    }

    componentDidMount() {
        if(this.props !== undefined){
            if(this.props.data !== undefined){
                this.barChart = new Chart(this.chartRef.current, {
                    type: 'bar',
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
                                    min: 0,
                                    max: 500,
                                    padding: 10,
                                    fontColor: '#e6e6e6'
                                }
                            }],
                            yAxes: [{
                                ticks: {
                                    min: 0,
                                    max: 600,
                                    padding: 10,
                                    fontColor: '#e6e6e6'
                                }
                            }],
                        }
                    },
                    data: {
                        labels: this.props.labels.map(d => d),
                        datasets: [{
                            label: this.props.title,
                            backgroundColor:["rgba(255, 99, 132, 0.4)","rgba(255, 159, 64, 0.4)","rgba(255, 205, 86, 0.4)","rgba(75, 192, 192, 0.4)","rgba(54, 162, 235, 0.4)","rgba(153, 102, 255, 0.4)","rgba(201, 203, 207, 0.4)","rgba(151,187,205,0.4)","rgba(220,220,220,0.4)", "rgba(220,220,220,0.4)", "rgba(87,161,129,0.4)","rgba(155,89,182,0.4)"],
                            borderColor:["rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(54, 162, 235)","rgb(153, 102, 255)","rgb(201, 203, 207)","rgb(151,187,205)", "rgb(220,220,220)", "rgb(220,220,220)", "rgb(87,161,129)","rgb(155,89,182)"],
                            borderWidth:1
                        }]
                    } 
                });
            }
        }
    }
  
    render() {
        let sectionClassNames = 'widget widget-chart';
        let divBodyClassNames = 'body no-margin';
        let divChartClassname = 'chart stats-bar-chart';
        return (
            <div className="col-lg-6">
                <section className={sectionClassNames}>
                    <header>
                        <h4>{this.props.headerTitle}</h4>    
                    </header>
                    <div className={divBodyClassNames}>
                        <div className={divChartClassname}>
                            <canvas ref={this.chartRef} width="800" height="350" />
                        </div>
                    </div>
              </section>
          </div>
        
      );
    }
  }
