console.log('App.js is runnning!');

//  JSX - JavaScript XML

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer.',
    options: []
};


const onFormSubmit = (e) => {
    e.preventDefault();
    
    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderAppJS();
    }
};

const removeAll = () => {
    app.options = [];
    renderAppJS();
};

const whatToDo = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');


const renderAppJS = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            {app.options.length > 0 ? 'Here are your options:' : 'No options here.'}
            <br></br>
            <button disabled = {app.options.length === 0} onClick={whatToDo}>What Should I do?</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {
                app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
            <input type='text' name='option'/>
            <button>Add Option</button>
            </form>
        </div> 
    );
    ReactDOM.render(template, appRoot);
};

renderAppJS();