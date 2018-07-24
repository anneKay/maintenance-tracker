import React from 'react';
import Header from './Header'

export default class Option extends React.Component {
    removeAll(){
        alert('remove all');
        console.log(this.props.option);
        return this.props.handleDelete;
    }
    render() {
        return (
            <div> 
                <p>This is an option</p>
                <button onClick={this.props.handleDelete}>Remove all</button>
                <p>{this.props.option.map(option => {
                    return (<p key={option}>Here is your {option}</p>)
                })} </p>
                {this.props.option}
                <Header title='another header'/>
             </div>
        );
    }
}
