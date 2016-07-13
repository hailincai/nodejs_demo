import React from "react";

const Widget = React.createClass({
	render: function() {
		return (
			<div>
			  <input type="text" onChange={this.props.update}/>
			  <h1>{this.props.txt}</h1>
			</div>
		);
	}
})

export default Widget;