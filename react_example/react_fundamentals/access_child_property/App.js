import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './Slider';

const App = React.createClass({
	render: function() {
		return (
			<div>
			    <Button>I love react</Button>
			</div>
		);
	}
});

const Button = React.createClass({
	render: function() {
		return (
			<button>{ this.props.children }</button>
		);
	}
})

export default App;