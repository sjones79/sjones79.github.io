'use strict';

class PlayerImg extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        let imgClassNames = 'img-circle profile-img';
        return (
            <img className={imgClassNames}
                src={this.props.src}
                alt={this.props.alt}
            />
        );
    }
}