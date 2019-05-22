import Delay from './Delay';

const map: Map<string, string | object> = new Map();
map.set('app/v1/version', '1.0.0').set('app/v1/user', {name: 'Anonymous'});

const Mock = {
    get(url: string) {
        return Delay.by(Math.floor(Math.random() * 1500) + 1000, undefined).then(() => map.get(url)!);
    }
};

export default Mock;