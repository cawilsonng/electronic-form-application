module.exports = {
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: '/admin/:any*',
                destination: '/admin',
            },
            {
                source: '/form/:any*',
                destination: '/form',
            }
        ];
    },
};
