/**
 * Automation API provider
 * Automation provides template of this description, and anyone may modify it in your own project.
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { CompanyServiceLevelDto } from './companyServiceLevelDto';


export interface PageInfoOfCompanyServiceLevelDto { 
    endRow?: number;
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
    isFirstPage?: boolean;
    isLastPage?: boolean;
    list?: Array<CompanyServiceLevelDto>;
    navigateFirstPage?: number;
    navigateLastPage?: number;
    navigatePages?: number;
    navigatepageNums?: Array<number>;
    nextPage?: number;
    pageNum?: number;
    pageSize?: number;
    pages?: number;
    prePage?: number;
    size?: number;
    startRow?: number;
    total?: number;
}