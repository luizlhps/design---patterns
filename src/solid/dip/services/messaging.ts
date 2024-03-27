import { MessagingProtocol } from './interfaces/messaging';

export class Messaging implements MessagingProtocol {
  test() {}
  sendMessage(message: string): void {
    console.log(message);
  }
}
