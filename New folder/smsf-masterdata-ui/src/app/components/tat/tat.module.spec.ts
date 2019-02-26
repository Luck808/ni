import { TatModule } from './tat.module';

describe('TatModule', () => {
  let tatModule: TatModule;

  beforeEach(() => {
    tatModule = new TatModule();
  });

  it('should create an instance', () => {
    expect(tatModule).toBeTruthy();
  });
});
