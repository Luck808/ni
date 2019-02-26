import { ProcessModule } from './process.module';

describe('ProcessModule', () => {
  let processModule: ProcessModule;

  beforeEach(() => {
    processModule = new ProcessModule();
  });

  it('should create an instance', () => {
    expect(processModule).toBeTruthy();
  });
});
