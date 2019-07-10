'use strict';

class StatCardJumboHeader extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){              
        return (
            <header className="text-center">
                <h3 className="fw-normal">{this.props.titlePt1}<span className="fw-semi-bold"> {this.props.titlePt2}</span></h3>
                <br/><br/>
            </header>
        );
    }
}