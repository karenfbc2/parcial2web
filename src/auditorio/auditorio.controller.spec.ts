import { Test, TestingModule } from '@nestjs/testing';
import { AuditorioController } from './auditorio.controller';

describe('AuditorioController', () => {
  let controller: AuditorioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuditorioController],
    }).compile();

    controller = module.get<AuditorioController>(AuditorioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
