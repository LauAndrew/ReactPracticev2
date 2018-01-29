'use strict';

console.log('App.js is runnning!');

//  JSX - JavaScript XML

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer.',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderAppJS();
    }
};

var removeAll = function removeAll() {
    app.options = [];
    renderAppJS();
};

//      *****RESUME HERE*****
var whatToDo = function whatToDo() {
    console.log('WhatToDO HERE');
};

var appRoot = document.getElementById('app');

var renderAppJS = function renderAppJS() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        app.options.length > 0 ? 'Here are your options:' : 'No options here.',
        React.createElement(
            'button',
            { onClick: whatToDo },
            'What Should I do?'
        ),
        React.createElement(
            'button',
            { onClick: removeAll },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

renderAppJS();
