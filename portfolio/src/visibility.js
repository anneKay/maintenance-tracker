class Visibility extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: false,
        }
        this.whatToShow = this.whatToShow.bind(this);
    }
    whatToShow (){
        this.setState((prevState) => {
            return{
                visibility: !prevState.visibility
            }

        })
    }
    render(){
        return(
            <div>
                <p>Visibility Toggle</p>
                <button onClick={this.whatToShow}> {this.state.visibility ? 'Hide details' : 'Show details'}</button>
                {this.state.visibility  && <div> <p>you can finally see some details</p></div>}
            </div>
    )
    }
}

ReactDOM.render(<Visibility />, document.getElementById('app'))




// let visibility = false;

// const whatToShow = () => {
//     visibility = !visibility;
//     render();

// }

// const appRoot = document.getElementById('app');
// const render = ()  => {
// const template = (
// <div>
//     <h1>Visibility Toggle</h1>
//     <button onClick={whatToShow}>{visibility ? 'Hide details' : 'Show details'}</button>
//     {visibility && <div>
//         <p>You can finally see some details</p>
//     </div>}

// </div>
// )
// ReactDOM.render(template, appRoot)
// }
// render();