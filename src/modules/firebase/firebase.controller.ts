import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { FirebaseService } from './firebase.service';

@Controller('firebase')
export class FirebaseController {
  constructor(private readonly firebaseService: FirebaseService) {}

  @Post('message')
  async sendMessageToTopic(@Body() data: any) {
    const result = await this.firebaseService.sendMessageToTopic(
      data.topic,
      data.title,
      data.message,
    );
    return {
      data: result,
      errorCode: 0,
      message: 'Success',
      errors: [],
    };
  }

  @Post('subscribe')
  async subscribeToTopic(@Body() data: any) {
    const result = await this.firebaseService.subscribeMessage(
      data.token,
      data.topic,
    );
    return {
      data: result,
      errorCode: 0,
      message: 'Success',
      errors: [],
    };
  }

  @Post('unsubscribe')
  async unsubscribeToTopic(@Body() data: any) {
    const result = await this.firebaseService.unsubscribeMessage(
      data.token,
      data.topic,
    );
    return {
      data: result,
      errorCode: 0,
      message: 'Success',
      errors: [],
    };
  }
}
