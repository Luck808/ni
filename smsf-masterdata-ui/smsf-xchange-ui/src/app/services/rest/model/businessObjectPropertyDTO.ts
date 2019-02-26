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
import { BusinessPropertyDTO } from './businessPropertyDTO';


export interface BusinessObjectPropertyDTO { 
    businessDomain?: string;
    businessPropertys?: Array<BusinessPropertyDTO>;
    description?: string;
    id?: string;
    isLeaf?: boolean;
    name?: string;
    parentId?: string;
    rowNum?: number;
}
