'use strict';

class StatCardMiniItem extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        let divClassName = "col-6 text-center";
        return (
            <div className={divClassName}>
                <h4 className="m-0">{this.props.subtitle}</h4>
                <h5 className="value5">{this.props.item}</h5>
            </div>
        );
    }
}