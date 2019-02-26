import { SptModule } from './spt.module';

describe('SptModule', () => {
  let sptModule: SptModule;

  beforeEach(() => {
    sptModule = new SptModule();
  });

  it('should create an instance', () => {
    expect(sptModule).toBeTruthy();
  });
});
