Plugins
html-webpack-plugin ---- used to generate the index.html automatically
UglifyJsPlugin      ---- minimize the output, will evaluate the script to remove all become false code block
DefinPlugin         ---- define variable which can be used by other plugin / module
HotModuleReplacementPlugin --- work with webpack-dev-server to auto reload the browser
CommonsChunkPlugin --- Change the deafault behavior for how the webpack generate the bundle script file. By default, the webpack will include everything in the access path to one file. By using it, you can also extract the webpack runtime to a different bundle.

webpack-merge       ---- merge the result for configuration json object. You can create multiple JSON object for different config, and then call merge to merge multiple JSON to one JSON ( key value is merged, not replaced )

webpack-validator   ---- tool will validate the configuration and warn if we do something wrong

webpack-dev-server  ---- 
                        dev server in memory, will watch the file update in the folder and call webpack command to build
                    ----
                        --hot option enable hot module replacement, in configuration file, you need to add HMRPlugin manually. But if using in cli, the cli will include HMRPlugin automatically

css-loader, style-loader ---- load the csss automatically using webpack-dev-server
                              css-load process the @import and url statement, support CSS module. Then you can have global and local style. Whe css-loader see :local thing, it will generated a specific name for that style
                              style-load process the require for style in javascript