'use strict';

class StatCardJumboItem extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){        
        let divColClassNames = 'col-3 text-center';
        let divColClassNamesNoCenter = 'col-3';

        return (
            <div className={this.props.centerText == true ? divColClassNames : divColClassNamesNoCenter}>
                <h4 className="m-0">{this.props.title}</h4>
                <h5 className="value5">{this.props.item}</h5>
            </div>
        );
    }
}
