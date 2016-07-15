const webpack = require('webpack');

exports.devServer = function(options){
	return {
		devServer: {
			//enable history API fallback of HTML5
			historyApiFallback: true,

			hot: true,
			inline: true,

			//Display only errors to reduce the amount of output
			stats: 'errors-only',

			host: options.host,
			port: options.port

		},//end of dev server
		plugins: [
		    //Enable multi-pass compilation for enhanced performance
		    //in larger projects. Good default.
			new webpack.HotModuleReplacementPlugin({
				multiStep: true
			}
			)
		]
	};
};

exports.setupCSS = function(paths){
	return {
        module: {
        	loaders: [
        	{
        		test: /\.css$/,
        		loaders: ['style', 'css'], //load call from right to left
        		include: paths
        	}
        	]
        }
	};
};

exports.minify = function(){
	return {
		plugins: [
			new webpack.optimize.UglifyJsPlugin({
				beautify: false, //don't make it beauty
				comment: false, //remove comment
				compress: {
					warnings: false,
					drop_console: true //drop all console statement
				},
				mangle: {
					except: ['$', 'webpackJsonp'], // don't mongle webpack runtime, also $ ( like jquery )
					keep_fname: true //dont' change function name
				}//update the string and name in js, need to be careful will break something maybe
			}
			)
		]
	};
};

exports.setFreeVariable = function(key, value) {
	const env = {};
	env[key] = JSON.stringify(value);

	return {
		plugins: [
		    new webpack.DefinePlugin(env)
		]
	};
};

exports.extractBundle = function(options) {
	const entry = {};
	entry[options.name] = options.entries;

	return {
        entry: entry,
        //Extract bundle and manifest files. Manifest is
        //needed for reliable caching
        //Manifest will include the webpack runtime, this runtime will change 
        //when the source code change because the compiled code hash is changed
        //By using CommonsChunkPlugin, it also extract the react from app bundle 
        //because react is included in vendor already
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
            	    names: [options.name, "manifest"]
            	})
        ]
	};
}