export declare class FirebaseService {
    constructor();
    sendMessageToTopic(topic: string, title: string, message: any): Promise<any>;
    subscribeMessage(token: string, topic: string): Promise<any>;
    unsubscribeMessage(token: string, topic: string): Promise<any>;
}
