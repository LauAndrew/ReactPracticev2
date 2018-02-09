// const obj = {
//     name: 'Andrew',
//     getName() {
//         return this.name;
//     }
// };

// const getName = obj.getName.bind(obj);

// console.log(getName());

class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.state = {
            options: ['Apple', 'Oranges', 'Mango', 'Kiwi', 'Fortnite']
        };
    };
    handleDeleteOptions(){
        this.setState(() => {
            return {
                options: []
            }
        });
    }
    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }


    // handlePick - pass down to Action and setup onClick - bind here
    // randomy pick an option and alert from it
    render() {
        const title = 'Indecision'
        const subtitle = 'Put your hands in the life a computer'
        return (
            <div>
                <Header title={title} subtitle= {subtitle} />
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1> {this.props.title} </h1>
                <h3> {this.props.subtitle} </h3>
            </div>
        )
    }
}

class Action extends React.Component{
    render(){
        return (
            <div>
                <button
                onClick={this.props.handlePick}
                disabled={!this.props.hasOptions}
                >
                What should I do?
                </button>
            </div>
        )
    }
}

class Options extends React.Component{
    render(){
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove ALL</button>
               {
                this.props.options.map((option)=> <Option key={option} optionText={option}/>)
               }
            </div>
        );
    }
}

class Option extends React.Component{
    render(){
        return (
            <div>
                Option: {this.props.optionText}
            </div>
        )
    }
}

class AddOption extends React.Component{
    handleAddOption(e){
        e.preventDefault();

        const option = e.target.elements.option.value.trim();

        if (option) {
            alert(option);
        }
    };
    render(){
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                <input type='text' name='option'/>
                <button onClick={this.onSubmit}>Add Option</button>
                </form>
            </div>
        );
    }
}
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));