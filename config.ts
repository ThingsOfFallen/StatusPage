const config: Config = {
    hosts: [
        {
            host: 'google.com',
            type: 'ping'
        },
        {
            host: 'cloudflare.com',
            type: 'ping'
        }
    ]
};

interface Config {
    hosts: Host[];  
};

interface Host {
    host: string;
    type: 'ping';
};

export default config;