import { NcTypeModule } from './nc-type.module';

describe('NcTypeModule', () => {
  let ncTypeModule: NcTypeModule;

  beforeEach(() => {
    ncTypeModule = new NcTypeModule();
  });

  it('should create an instance', () => {
    expect(ncTypeModule).toBeTruthy();
  });
});
