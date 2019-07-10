'use strict';

class TeamImg extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <img className="img-responsive"
                src={this.props.src}
                alt={this.props.name}
            />
        );
    }
}