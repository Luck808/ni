import { ClientServiceLevelModule } from './client-service-level.module';

describe('Module', () => {
  let clientServiceLevelModule: ClientServiceLevelModule;

  beforeEach(() => {
    clientServiceLevelModule = new ClientServiceLevelModule();
  });

  it('should create an instance', () => {
    expect(clientServiceLevelModule).toBeTruthy();
  });
});
