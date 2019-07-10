'use strict';

class Sidebar extends React.Component{
    constructor(){
        super();    
    }
    
    render(){
        let accordionClassName = 'accordion-toggle collapsed';
        let ulPanelClassName = 'panel-collapse collapse';
        let iconMagicClassName = "fa fa-magic";
        let iconHomeClassName = "fa fa-home";
        return (
            <ul id="side-nav" className="side-nav">
                <li className="panel">
                    <a className={accordionClassName} data-toggle="collapse"
                        data-parent="#side-nav" href="#elements-collapse"><i className={iconMagicClassName}></i> <span className="name">Quarterbacks</span></a>
                    <ul id="elements-collapse" className={ulPanelClassName}>
                        <QuarterbackLink name={'Blake Bortles'} playerID={'2543477'} />
                        <QuarterbackLink name={'Baker Mayfield'} playerID={'2560800'} />
                        <QuarterbackLink name={'Derek Carr'} playerID={'2543499'} />
                    </ul>
                </li>
                <li>
                    <a href="index.html"><i className={iconHomeClassName}></i> <span className="name">Dashboard</span></a>
                </li>
            </ul>   
        )
    }
}


const sideBarContainer = document.querySelector('#sidebar');

ReactDOM.render(<Sidebar />, sideBarContainer);