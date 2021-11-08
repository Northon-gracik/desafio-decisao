const proxy = [
    {
        context: '/api',
        target: 'http://localhost:8000/v1/',
        pathRewrite: { '^/api': '' }
    }
];
module.exports = proxy;