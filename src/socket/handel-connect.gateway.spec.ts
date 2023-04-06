import { Test, TestingModule } from '@nestjs/testing';
import { HandelConnectGateway } from './handel-connect.gateway';

describe('HandelConnectGateway', () => {
  let gateway: HandelConnectGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HandelConnectGateway],
    }).compile();

    gateway = module.get<HandelConnectGateway>(HandelConnectGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
