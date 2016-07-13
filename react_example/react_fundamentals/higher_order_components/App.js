import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './Slider';

let Mixin = (InnerComponent) => class extends React.Component{
	constructor(){
		super();
		this.update = this.update.bind(this);
		this.state = {val: 0};
	}

	update(){
		this.setState({val: this.state.val + 1});
	}

	render(){
		return(
			<InnerComponent update={this.update} {...this.props} {...this.state}/>
		);
	}
}

class Button extends React.Component{
	render(){
		return(
		    <button onClick={this.props.update}>{this.props.txt} - {this.props.val}</button>
		);
	}
}

class Label extends React.Component{
	render(){
		return(
		    <label onMouseMove={this.props.update}>{this.props.txt} - {this.props.val}</label>
		);
	}
}

let MixinButton = new Mixin(Button);
let MixinLabel = new Mixin(Label);

class App extends React.Component{
	render(){
		return(
			<div>
		    	<MixinButton txt="button"/><br/>
		    	<MixinLabel txt="label"/>
		    </div>
		);
	}
}

export default App;