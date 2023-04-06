import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway({ cors: true })
export class HandelConnectGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  handleDisconnect(client: Socket) {
    console.log('handleDisconnect', client.id);
  }
  handleConnection(client: Socket, ...args: any[]) {
    console.log('handleConnect', client.id);
  }

  @SubscribeMessage('events')
  handleEvent(@MessageBody() data: string): string {
    console.log('handleEvent', data);
    return data;
  }
}
