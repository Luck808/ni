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
import { ProcessDTO } from './processDTO';


export interface StepDTO { 
    id?: string;
    name?: string;
    process?: ProcessDTO;
    processId?: string;
}
