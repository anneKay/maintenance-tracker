let count = 0;
class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handelReset = this.handelReset.bind(this);
        this.state = {
            count: 0
        };
    }
    
    
    handleAddOne(){
        //return count + 1;
       this.setState(prevState => {
           return {
               count: prevState.count + 1,
           }
       })
    }
    handleMinusOne(){
        //return count - 1 ;
        this.setState(prevState => {
            if(this.state.count > 0) {
            return {
                count: prevState.count - 1,
            }
        }
        })
    }
    handelReset(){
       // return count = 0 ;
       console.log('handleReset');
    }

    render(){
        return (
        <div>
            <p> Count : {this.state.count}</p>
            <button onClick={this.handleAddOne}>+1</button>
            <button onClick={this.handleMinusOne}>-1</button>
            <button onClick={this.handelReset}>reset</button>
        </div>
        );
    }
}
ReactDOM.render(<Counter />, document.getElementById('app'));