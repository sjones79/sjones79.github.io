'use strict';

class QuarterbackLink extends React.Component{
    constructor(props){
        super(props);
    }
    handleClick(e) {
        e.preventDefault();
        let playerID = e.target.id;

        // set active class states
        [].slice.call(document.querySelectorAll('ul#elements-collapse li')).map(el => {
            el.classList.remove('active');
        });
        e.target.parentNode.classList.add('active');
        refreshAppComponent(playerID)

    }
    render(){
        return (
            <li className='base-class'><a id={this.props.playerID} href="#" onClick={this.handleClick}>{this.props.name}</a></li>
        );
    }
}