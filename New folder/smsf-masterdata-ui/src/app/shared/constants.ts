import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

/**
   * 所有菜单数据
   */
  export const AppMenus = [
    { label: 'Client Service Level', icon: 'fas fa-building', routerLink: ['/client-service-level'],
        permissionCode: 'masterdata.client.service.level.view' },
    { label: 'Step', icon: 'fas fa-building', routerLink: ['/step'], permissionCode: 'masterdata.step.view' },
    { label: 'Process', icon: 'fas fa-building', routerLink: ['/process'], permissionCode: 'masterdata.process.view' },
    { label: 'NC Type', icon: 'fas fa-building', routerLink: ['/nc-type'], permissionCode: 'masterdata.nc.type.view' },
    { label: 'Tat', icon: 'fas fa-building', routerLink: ['/tat'], permissionCode: 'masterdata.tat.view' },
    { label: 'Cutoff Time', icon: 'fa-user-secret', routerLink: ['/cutoff-time'], permissionCode: 'masterdata.cutoff.time.view' },
    { label: 'Companyservicelevel', icon: 'fa-user-secret', routerLink: ['/company-service-level'],
        permissionCode: 'masterdata.organization.view' },
    { label: 'SPT', icon: 'fa-user-secret', routerLink: ['/spt'], permissionCode: 'masterdata.organization.view' }
 ];

/**
 * 公共数据
 */
@Injectable()
export class Constants {

    static i18nRoot = 'masterdata';

    i18n: any;

    /**
     * 构造方法
     * @param i18n 国际化
     */
    constructor(private translate: TranslateService) {
        this.loadi18n();
    }

    private loadi18n() {
        this.translate.get(Constants.i18nRoot)
            .subscribe(value => {
                this.i18n = value;
            });
    }

    /**
     * 关联列表（国际化）
     */
    getRelateList() {
        return this.i18n && this.i18n.data ? [
            { label: this.i18n.data.releateList.all, value: null },
            { label: this.i18n.data.releateList.releated, value: true },
            { label: this.i18n.data.releateList.noReleated, value: false },
        ] : [];
    }
}
