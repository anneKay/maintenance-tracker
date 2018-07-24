import React from 'react';

export default class AddOption extends React.Component {
   
    handleOption = (event) => {
        event.preventDefault();
        const option = event.target.elements.option.value.trim();
        console.log(option)
        if(option) {
           this.props.handleOption(option);
           console.log(this.options)
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleOption}>
                    <input type='text' name='option'/>
                    <button>handle option</button>
                    
                </form>
                {this.props.options}
            </div>
        )
    }
   
}