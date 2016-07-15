const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const validate = require("webpack-validator");
const parts = require("./lib/parts");
const dependPkg = require('./package.json');

const PATHS = {
	app: path.join(__dirname, 'app'),
	build: path.join(__dirname, 'build')
};

const common = {
	entry: {
		app: PATHS.app
	},
	output: {
        path: PATHS.build,
        filename: '[name].js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "webpack demo"
		}
		)
	]
};

var config;


//npm run build will set the process.env.npm_lifecycle_event=build
switch(process.env.npm_lifecycle_event){
	case 'build':
	    config = merge(common, 
	    			   {
                            devtool: "source-map" //for production, source map is separate
	    			   },
	    			   parts.setFreeVariable(
	    			   	    "process.env.NODE_ENV",
	    			   	    "production"
	    			   ),
	    			   parts.extractBundle({
	    			       name: 'vendor',
	    			       entries: Object.keys(dependPkg.dependencies)
	    			   }),
	    			   //when we have NODE_ENV set, when uglify evaluate the react js, 
	    			   //something not related to production mode will be evaluated to false, then will be removed
	    			   parts.minify(), 
	    	           parts.setupCSS(PATHS.app));
	    break;
	default:
	    config = merge(common, 
	    	     {
                       devtool: "eval-source-map" //for dev, the source map embded
	    	     },
	    	     parts.setupCSS(PATHS.app),
	    	     parts.devServer({
	    	     	hosts: process.env.HOST,
	    	     	port: process.env.PORT
	    	     }));
};

module.exports = validate(config);