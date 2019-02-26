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
import { AttachmentTypeDTO } from './attachmentTypeDTO';


export interface AttachmentDTO { 
    attachUrl?: string;
    attachmentName?: string;
    attachmentTypeId?: string;
    businessCaseId?: string;
    businessDataId?: string;
    businessPropertyId?: string;
    contentLength?: string;
    createOperatorId?: string;
    createOperatorName?: string;
    createTime?: Date;
    extName?: string;
    id?: string;
    isCaseImage?: boolean;
    mimeType?: string;
    stock?: string;
    type?: AttachmentTypeDTO;
}
