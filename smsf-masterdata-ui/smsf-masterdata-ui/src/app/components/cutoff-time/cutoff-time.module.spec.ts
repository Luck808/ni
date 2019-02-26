import { CutoffTimeModule } from './cutoff-time.module';

describe('CutofftimeModule', () => {
  let cutofftimeModule: CutoffTimeModule;

  beforeEach(() => {
    cutofftimeModule = new CutoffTimeModule();
  });

  it('should create an instance', () => {
    expect(cutofftimeModule).toBeTruthy();
  });
});
