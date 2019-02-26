import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { ClientServiceLevelControllerService } from './api/clientServiceLevelController.service';
import { CompanyServiceLevelControllerService } from './api/companyServiceLevelController.service';
import { CutoffTimeControllerService } from './api/cutoffTimeController.service';
import { NcTypeControllerService } from './api/ncTypeController.service';
import { ProcessControllerService } from './api/processController.service';
import { SptControllerService } from './api/sptController.service';
import { StepControllerService } from './api/stepController.service';
import { TatControllerService } from './api/tatController.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    ClientServiceLevelControllerService,
    CompanyServiceLevelControllerService,
    CutoffTimeControllerService,
    NcTypeControllerService,
    ProcessControllerService,
    SptControllerService,
    StepControllerService,
    TatControllerService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
