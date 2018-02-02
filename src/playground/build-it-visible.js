console.log('Build It Visible is Live');

let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility
    render();
}

const appRoot = document.getElementById('app');

const render = () => {
    const jsx = (
        <div> 
            <h1> Visibility Toggle </h1>
            <button onClick = {toggleVisibility}>{visibility ? 'Hide Details' : 'Show Details'}</button>
            {visibility && (
                <div>
                <p> HERE IS SOME INFORMATION TO SEE </p>
                </div>
            )}
        </div>
    );
    ReactDOM.render(jsx, appRoot);
};
render();