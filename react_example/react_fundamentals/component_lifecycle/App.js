import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './Slider';

const App = React.createClass({
	getInitialState: function() {
		return {
			val: 0 
		};
	},
	render: function() {
		console.log("Rendering...");
		return (
			<div>
			    <button onClick={this.update}>{this.state.val}</button>
			</div>
		);
	},

	componentWillMount: function() {
		console.log("Mounting...");	
	},

	componentDidMount: function() {
		//happen after the first rendering
		//because only after the fist rendering, the html element is ready for inserting to DOM
		this.inc = setInterval(this.update, 500);
	},

	componentWillUnmount: function() {
		clearInterval(this.inc);
	},

	update: function(){
		this.setState({val: this.state.val + 1});
	}
});

const Wrapper = React.createClass({
	mount: function(){
	    ReactDOM.render(<App/>, document.getElementById('a'));
	},

	unmount: function(){
        ReactDOM.unmountComponentAtNode(document.getElementById('a'));
	},

	render: function() {
		return (
			<div>
			    <button onClick={this.mount}>Mount</button>
			    <button onClick={this.unmount}>Unmount</button>
			    <div id='a'></div>
			</div>
		);
	}
})

export default Wrapper;