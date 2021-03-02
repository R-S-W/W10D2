import React from 'react';

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.tArray = props.tArray;
        this.state = {
            idx: 0,
        }
    }

    render() {
        return(
            <>
                <ul>
                    {
                        this.tArray.map((tab, idx)=>{
                            return(
                                <li key = {idx} >{tab.title}</li>
                            )
                        })
                    }
                </ul>
                <article>
                    {this.tArray[this.state.idx].content}
                </article>
            </>
        )
    }
}

export default Tabs;