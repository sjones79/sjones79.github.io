'use strict';

class StatCardJumbo extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){        
        let jumboSectionClassNames = 'widget widget-profile';
        let flexRowDivClassNames = "flex-nowrap row";
        let title = this.props.title;
        //assume a three word title for the Jumbo Cards
        let titlePt1 = title.split(' ')[0] +' '+ title.split(' ')[1];
        let titlePt2 = title.split(' ')[2];
        
        if(this.props !== undefined){
            return (
                <section className={jumboSectionClassNames}>
                    <div className="widget-body">
                        <StatCardJumboHeader titlePt1={titlePt1} titlePt2={titlePt2} />
                        <div className={flexRowDivClassNames}>
                            <StatCardJumboItem title={this.props.subTitles[0]} item={this.props.items[0]} centerText='true' />
                            <PipeSeparator />
                            <StatCardJumboItem title={this.props.subTitles[1]} item={this.props.items[1]} centerText='true' />
                            <PipeSeparator />
                            <StatCardJumboItem title={this.props.subTitles[2]} item={this.props.items[2]} centerText='true' />
                            <PipeSeparator />
                            <StatCardJumboItem title={this.props.subTitles[3]} item={this.props.items[3]} centerText='false' />    
                        </div>
                    </div>
                </section>
            );
        }
        return null;
    }
}
