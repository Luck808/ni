import { CompanyServiceLevelModule } from './company-service-level.module';

describe('CompanyServiceLeveModule', () => {
  let companyServiceLevelModule: CompanyServiceLevelModule;

  beforeEach(() => {
    companyServiceLevelModule = new CompanyServiceLevelModule();
  });

  it('should create an instance', () => {
    expect(companyServiceLevelModule).toBeTruthy();
  });
});
