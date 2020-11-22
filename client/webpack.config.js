const HWP = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 3434,
        stats: 'minimal',
        host: '0.0.0.0',
        proxy: {
            // note that "server" is used here
            // because thats the name of the docker service
            // defined in docker-compose.yml
            // docker compose creates a network where the services can
            // reach eachother via their hosts(which are the same as
            // the name provided in services)
            // see https://docs.docker.com/compose/networking
            "/api": 'http://server:3535'
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HWP({
            template: './src/index.html'
        })
    ]
}
