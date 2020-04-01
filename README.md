# react_aspnetcore_pluralsight

<h3>Pluralsight source found here : https://github.com/pkellner/pluralsight-course-react-aspnet-core</h3>
<ul>
<li>
    Create a webpack file in the name of webpack.config.js
</li>
<li> update webpack.config.js with configuration (minimum)
    <pre>
        const webpack = require("webpack");
        const path = require("path");
        const APP_DIR = path.resolve(**dirname, "");
        const BUILD_DIR = path.resolve(**dirname, "build");
        const config = {
        entry: APP_DIR + "/HelloWorld.js",
        output: {
        path: BUILD_DIR,
        filename: "bundle.js"
        }
        };
        module.exports = config;
    </pre>
</li>
<li>
    Install <b>Webpack</b> using the command <b>npm install --save-dev webpack</b>
    and then run <b>npm install --save-dev webpack-cli</b>
</li>
<li>Now run <b>./node_modules/.bin/webpack.</b> it will create build folder and then bundle.js on it.</li>
<li>
    Now run <b>npm init</b> this will create package.json file
</li>
<li>
    Now we have <b>Webpack, Webpack configuration and package.json</b>, now we need a webserver to run our application for that we can install Webpack Dev Server using <b>npm install webpack-dev-server --save-dev</b>
    this we'll not run in the production server and it is only for development
</li>
<li>
    Create a folder call public(Refactor) and all our website file will be there and instruct webpack accorindgly.
    <pre>
        const webpack = require("webpack");
        const path = require("path");
        const APP_DIR = path.resolve(__dirname, "src");
        //const BUILD_DIR = path.resolve(__dirname, "build");
        const PUBLIC_DIR = path.resolve(__dirname, "public");
        const config = {
        entry: APP_DIR + "/HelloWorld.js",
        devServer: {
            contentBase: PUBLIC_DIR,
            port: 9000,
            open: true  //This will open browser automatically
        },
        output: {
            path: PUBLIC_DIR,
            filename: "bundle.js"
        }
        };
        module.exports = config;
    </pre>
</li>
<li>
    run <b>npm install path --save-dev </b> this will add <b>devDependencies</b> in the package.json move that to <b>dependencies</b> section
</li>
<li>
    Next we need to install Babel to understand JSX and React code to convert it to javascript. and New webpack.config looks like below,
    <pre>
        const webpack = require("webpack");
        const path = require("path");
        const APP_DIR = path.resolve(__dirname, "src");
        //const BUILD_DIR = path.resolve(__dirname, "build");
        const PUBLIC_DIR = path.resolve(__dirname, "public");
        const config = {
        entry: APP_DIR + "/HelloWorld.js",
        devServer: {
            contentBase: PUBLIC_DIR,
            port: 9000,
            open: true //This will open browser automatically
        },
        output: {
            path: PUBLIC_DIR,
            filename: "bundle.js"
        },
        devtool: "source-map",
        module: {
            rules: [
            {
                test: /\.js?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                presets: [
                    "react",
                    "stage-2",
                    ["env", { target: { browsers: ["last 2 version"] } }]
                ]
                }
            }
            ]
        }
        };
        module.exports = config;
    </pre>
    Now we have to install <b>Babel and React</b> using <b>npm install babel-core babel-loader@7 babel-preset-env babel-preset-react babel-preset-stage-2 react react-dom --save-dev</b>
</li>
<li>
    npm install react-router react-router-dom --save-dev
</li>
</ul>
