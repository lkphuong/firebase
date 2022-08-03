"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebaseService = void 0;
const common_1 = require("@nestjs/common");
const firebase = require("firebase-admin");
const serviceAccount = require("../../config/firebase/nestjsfirebase-57fd2-firebase-adminsdk-784hi-5eb45a8df5.json");
const firebase_params = {
    type: serviceAccount.type,
    projectId: serviceAccount.project_id,
    privateKeyId: serviceAccount.private_key_id,
    privateKey: serviceAccount.private_key,
    clientEmail: serviceAccount.client_email,
    clientId: serviceAccount.client_id,
    authUri: serviceAccount.auth_uri,
    tokenUri: serviceAccount.token_uri,
    authProviderX509CertUrl: serviceAccount.auth_provider_x509_cert_url,
    clientC509CertUrl: serviceAccount.client_x509_cert_url,
};
(0, common_1.Injectable)();
class FirebaseService {
    constructor() {
        firebase.initializeApp({
            credential: firebase.credential.cert(firebase_params),
            databaseURL: 'https://testfirebase-731e2-default-rtdb.firebaseio.com',
        });
    }
    async sendMessageToTopic(topic, title, message) {
        try {
            const payload = {
                notification: {
                    title: title,
                    message: message,
                },
            };
            const result = await firebase
                .messaging()
                .sendToTopic('/topics/mytopic', payload);
            console.log(result);
            firebase.instanceId();
            return result;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    async subscribeMessage(token, topic) {
        try {
            const result = await firebase
                .messaging()
                .subscribeToTopic(token, '/topics/mytopic');
            console.log(result);
            return result;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    async unsubscribeMessage(token, topic) {
        try {
            const result = await firebase
                .messaging()
                .unsubscribeFromTopic(token, '/topics/mytopic');
            console.log(result);
            return result;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
}
exports.FirebaseService = FirebaseService;
//# sourceMappingURL=firebase.service.js.map