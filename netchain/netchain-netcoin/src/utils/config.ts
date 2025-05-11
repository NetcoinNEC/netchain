import * as fs from 'fs';
import * as path from 'path';

const configPath = path.resolve(__dirname, '../data/config.json');

interface Config {
    network: {
        host: string;
        port: number;
    };
    database: {
        type: string;
        path: string;
    };
    logging: {
        level: string;
    };
}

let config: Config;

function loadConfig(): Config {
    if (!fs.existsSync(configPath)) {
        throw new Error(`Configuration file not found at ${configPath}`);
    }
    const rawData = fs.readFileSync(configPath, 'utf-8');
    return JSON.parse(rawData) as Config;
}

function getConfig(): Config {
    if (!config) {
        config = loadConfig();
    }
    return config;
}

export { getConfig };