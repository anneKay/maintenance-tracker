
class IndecisionApp extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            options: ['one', 'two', 'three']
        }
        this.deleteOptions = this.deleteOptions.bind(this);
        this.handleOption = this.handleOption.bind(this);

    }
    deleteOptions() {
       this.setState(() => ({ options: [] }))
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
    handleOption(option) {
        if(!option){
            return 'Enter valid value to add option';
        } else  if (this.state.options.indexOf(option) > -1) {
            return 'this option already exists'
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option)}))
    }
}
class Option extends React.Component {
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
class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.handleOption = this.handleOption.bind(this);
    }
    handleOption(event) {
        event.preventDefault();
        const option = event.target.elements.option.value.trim();
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
const Header = (props) => { 

        return <div>
            <h1>This is a header </h1>
            <p>{props.title}</p>
        </div>
        Header.defaultProps = {
            title: 'myIndecision'
        }
    }



ReactDOM.render(<IndecisionApp />, document.getElementById('app'));