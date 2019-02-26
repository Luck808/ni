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
import { FormatValidationRuleDTO } from './formatValidationRuleDTO';


export interface PageInfoOfFormatValidationRuleDTO { 
    endRow?: number;
    firstPage?: number;
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
    isFirstPage?: boolean;
    isLastPage?: boolean;
    lastPage?: number;
    list?: Array<FormatValidationRuleDTO>;
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
