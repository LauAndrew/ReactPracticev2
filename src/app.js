console.log('App.js is runnning!');

//  JSX - JavaScript XML

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer.'
};

var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li> Fortnite BattleRoyale </li>
            <li> Fortnite Save the World </li>
        </ol>
    </div> 
);

var user = {
    name: 'Andrew',
    age: '25',
    location: 'Walnut Creek, CA'
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>
    }
};

var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        {getLocation(user.location)}
    </div>
);


var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);