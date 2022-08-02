import { Injectable } from '@nestjs/common';
import * as firebase from 'firebase-admin';
import * as serviceAccount from 'src/config/firebase/nestjsfirebase-57fd2-firebase-adminsdk-784hi-5eb45a8df5.json';

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

Injectable();
export class FirebaseService {
  constructor() {
    firebase.initializeApp({
      credential: firebase.credential.cert(firebase_params),
      databaseURL: 'https://testfirebase-731e2-default-rtdb.firebaseio.com',
    });
  }

  async sendMessageToTopic(topic: string, title: string, message: any) {
    try {
      const payload = {
        notification: {
          title: title,
          message: message,
        },
      };
      const result = await firebase.messaging().sendToTopic(topic, payload);
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async subscribeMessage(token: string, topic: string) {
    try {
      const result = await firebase.messaging().subscribeToTopic(token, topic);
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async unsubscribeMessage(token: string, topic: string) {
    try {
      const result = await firebase
        .messaging()
        .unsubscribeFromTopic(token, topic);
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
