'use strict';

class Header extends React.Component{
    constructor(){
        super();    
    }
    
    render(){
        return (
            <div className="logo">
                <h4><a href="index.html">Quarterback <strong>Trends</strong></a></h4>
            </div>        
        )
    }
}


const pageHeaderContainer = document.querySelector('#pageHeader');

ReactDOM.render(<Header />, pageHeaderContainer);

