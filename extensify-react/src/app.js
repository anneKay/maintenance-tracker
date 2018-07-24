console.log('this');
const user = {
    name: 'nwanna',
    location: 'lagos',
    age: 25,
    options: []
}
let count = 0
const addone = () => {
    count ++;
    renderElement();
} 
const submitFormOutput = (e) => {
    e.preventDefault();
    const options = e.target.elements.option.value;
    if(options){
        user.options.push();
        console.log(options);
        e.target.option.value = '';
        renderElement();
    }
}
const appRoot = document.getElementById('app');
const numbers = [2,4,6,8];
const renderElement = () => {
  
const template = (
<div>
    <p>Count: {count}</p>
    <p>{user.options.length}</p>
    <form onSubmit={submitFormOutput}>
        <input type='text' name='option'/>
        <button onClick={submitFormOutput}>Add option</button>
        <input type='text' name='option'/>
    </form>
    {
    numbers.map((number)=>{
       return <p key={number}> Number: {number}</p>
    })
    }

    <button onClick={addone}>+1</button>
    <h2>{user.location ? user.location : 'undefined'}</h2>
    {(user.age && user.age >= 18 ) && <p> Age: {user.age}</p>}
    <p>{user.options.length > 0 ? 'Here are your options' + user.options : 'you currently have not options'}</p>
</div>
);

ReactDOM.render(template, appRoot);
}

renderElement();