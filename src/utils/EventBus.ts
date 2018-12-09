export type Subscriber = (event: Symbol, ...args: any[]) => void;
export type UnSubscriber = () => void;

const subscriptions: Map<Symbol, Subscriber[]> = new Map();

const EventBus = {
    subscribe(event: Symbol, subscriber: Subscriber) {
        let subscribers = subscriptions.get(event);
        if (!subscribers) {
            subscribers = [];
            subscriptions.set(event, subscribers);
        }
        subscribers.push(subscriber);
    },
    unSubscribe(event: Symbol, subscriber: Subscriber) {
        const subscribers = subscriptions.get(event);
        if (!subscribers) {
            return;
        }
        subscribers.splice(subscribers.indexOf(subscriber), 1);
    },
    hasSubscribers(event: Symbol) {
        const subscribers = subscriptions.get(event);
        return subscribers && subscribers.length > 0;
    },
    publish(event: Symbol, ...args: any[]) {
        const subscribers = subscriptions.get(event);
        if (!subscribers) {
            return;
        }
        subscribers.forEach(subscriber => subscriber(event, args));
    }
};

export default EventBus;