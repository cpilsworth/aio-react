const path = require('path');

module.exports = {
    mode: 'development',
    entry: ['./src/dx-excshell-1/actions/generic/index.js'],
    output: {
        libraryTarget: 'commonjs2',
        filename: 'dist/dx-excshell-1/actions/generic/index.js',
        clean: true
    },
    target: 'node',
    // config above should be provided by aio build
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                include: path.resolve(__dirname, "src"),
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {
                                "targets": "defaults"
                            }],
                            '@babel/preset-react'
                        ]
                    }
                }]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
}