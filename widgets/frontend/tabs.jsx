import React from 'react';

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.tArray = props.tArray;
        this.state = {
            idx: 0,
        }
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(event){
        event.preventDefault();
        const idx  = parseInt(event.currentTarget.id);
        this.setState({idx});
    }

    render() {
        return(
        
            <div id = 'tag'>
                <ul id = 'tag-headers'>
                    {
                        this.tArray.map((tab, idx)=>{
                            return(
                                <li key={idx}  id = {idx} className='tag-elements' onClick={this.clickHandler}>
                                    <h1  >{tab.title}</h1>
                                </li>
                            )
                        })
                    }
                </ul>
                <article id = 'tab-content'>
                    {this.tArray[this.state.idx].content}
                </article>
            </div>
        )
    }
}

export default Tabs;