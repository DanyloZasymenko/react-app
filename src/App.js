import React, {Component} from "react";
import NavBar from "./components/navbar";
import Counters from './components/counters';

export default class App extends Component {
    state = {
        counters: [
            {id: 1, value: 0},
            {id: 2, value: 4},
            {id: 3, value: 0},
            {id: 4, value: 0},
        ]
    };

    constructor(props) {
        super(props);
        console.log("App - Constructor", this.props);
    }

    componentDidMount() {
        // After render component into the DOM
        // Ajax Call
        // this.setState({})
        console.log("App - Mounted");
    }

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters});
    };

    handleDecrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        if (counters[index].value > 0)
            counters[index].value--;
        this.setState({counters});
    };

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({counters});
    };

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters})
    };

    render() {
        // After constructor
        console.log("App - Rendered");
        // All children render recursively

        return (
            <React.Fragment>
                <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        onReset={this.handleReset}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        onDelete={this.handleDelete}
                    />
                </main>
            </React.Fragment>
        );
    }

}