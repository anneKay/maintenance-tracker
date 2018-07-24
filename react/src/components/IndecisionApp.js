import React from 'react';
import Option from './Option';
import Header from './Header';
import AddOption from './AddOption';

export default class IndecisionApp extends React.Component {
  state = {
        options: ['one', 'two', 'three']
    }
  
    deleteOptions = () => {
        this.setState(() => ({ options: [] }))
     } 
     
    handleOption = (option) => {
        if(!option){
            return 'Enter valid value to add option';
        } else  if (this.state.options.indexOf(option) > -1) {
            return 'this option already exists'
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
    }
    
    render() {
        const title = 'Indecision App';
        return (
            <div>
            <Option 
            option={this.state.options}
            handleDelete={this.deleteOptions}
            />
            <AddOption 
            hasOption={this.state.options.length > 0}
            handleOption={this.handleOption}
            />
            <Header title={title}/>

            </div>
        );
    }

}
