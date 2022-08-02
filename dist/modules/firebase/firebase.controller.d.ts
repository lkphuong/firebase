import { FirebaseService } from './firebase.service';
export declare class FirebaseController {
    private readonly firebaseService;
    constructor(firebaseService: FirebaseService);
    sendMessageToTopic(data: any): Promise<{
        data: any;
        errorCode: number;
        message: string;
        errors: any[];
    }>;
    subscribeToTopic(data: any): Promise<{
        data: any;
        errorCode: number;
        message: string;
        errors: any[];
    }>;
    unsubscribeToTopic(data: any): Promise<{
        data: any;
        errorCode: number;
        message: string;
        errors: any[];
    }>;
}
