const path = require('path');

module.exports = {
    mode: 'production',
    resolve: {
        extensions: ['.js']
    },
    entry: {
        fizzbuzz: './src/libs/fizzbuzz/index.js',
        foobar:  './src/libs/foobar/index.js',
        main: {
            import: './src/libs/main/index.js',
            dependOn: ['foobar', 'fizzbuzz']
        }
    },
    output: {
        clean: true,
        filename: '[name]/bundle.js',
        path: path.resolve(__dirname, 'dist'),
    }
}
