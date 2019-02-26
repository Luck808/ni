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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { FormatValidationRuleDTO } from '../model/formatValidationRuleDTO';
import { PageInfoOfFormatValidationRuleDTO } from '../model/pageInfoOfFormatValidationRuleDTO';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ValidationRuleControllerService {

    protected basePath = 'https://localhost:10048';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * createValidationRule
     * 
     * @param dto dto
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createValidationRuleUsingPOST(dto: FormatValidationRuleDTO, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public createValidationRuleUsingPOST(dto: FormatValidationRuleDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public createValidationRuleUsingPOST(dto: FormatValidationRuleDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public createValidationRuleUsingPOST(dto: FormatValidationRuleDTO, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling createValidationRuleUsingPOST.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.basePath}/rule/create`,
            dto,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * deleteValidationRuleMultiple
     * 
     * @param dtoList dtoList
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteValidationRuleMultipleUsingPOST(dtoList: Array<FormatValidationRuleDTO>, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteValidationRuleMultipleUsingPOST(dtoList: Array<FormatValidationRuleDTO>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteValidationRuleMultipleUsingPOST(dtoList: Array<FormatValidationRuleDTO>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteValidationRuleMultipleUsingPOST(dtoList: Array<FormatValidationRuleDTO>, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (dtoList === null || dtoList === undefined) {
            throw new Error('Required parameter dtoList was null or undefined when calling deleteValidationRuleMultipleUsingPOST.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.basePath}/rule/delete-multiple`,
            dtoList,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * deleteValidationRule
     * 
     * @param dto dto
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteValidationRuleUsingPOST(dto: FormatValidationRuleDTO, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteValidationRuleUsingPOST(dto: FormatValidationRuleDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteValidationRuleUsingPOST(dto: FormatValidationRuleDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteValidationRuleUsingPOST(dto: FormatValidationRuleDTO, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling deleteValidationRuleUsingPOST.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.basePath}/rule/delete`,
            dto,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * findValidationRuleById
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findValidationRuleByIdUsingGET(id: string, observe?: 'body', reportProgress?: boolean): Observable<FormatValidationRuleDTO>;
    public findValidationRuleByIdUsingGET(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<FormatValidationRuleDTO>>;
    public findValidationRuleByIdUsingGET(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<FormatValidationRuleDTO>>;
    public findValidationRuleByIdUsingGET(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findValidationRuleByIdUsingGET.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (id !== undefined && id !== null) {
            queryParameters = queryParameters.set('id', <any>id);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<FormatValidationRuleDTO>(`${this.basePath}/rule/find`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * queryValidationRule
     * 
     * @param name name
     * @param pageNumber pageNumber
     * @param pageSize pageSize
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public queryValidationRuleUsingGET(name?: string, pageNumber?: number, pageSize?: number, observe?: 'body', reportProgress?: boolean): Observable<PageInfoOfFormatValidationRuleDTO>;
    public queryValidationRuleUsingGET(name?: string, pageNumber?: number, pageSize?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PageInfoOfFormatValidationRuleDTO>>;
    public queryValidationRuleUsingGET(name?: string, pageNumber?: number, pageSize?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PageInfoOfFormatValidationRuleDTO>>;
    public queryValidationRuleUsingGET(name?: string, pageNumber?: number, pageSize?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {




        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (name !== undefined && name !== null) {
            queryParameters = queryParameters.set('name', <any>name);
        }
        if (pageNumber !== undefined && pageNumber !== null) {
            queryParameters = queryParameters.set('pageNumber', <any>pageNumber);
        }
        if (pageSize !== undefined && pageSize !== null) {
            queryParameters = queryParameters.set('pageSize', <any>pageSize);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<PageInfoOfFormatValidationRuleDTO>(`${this.basePath}/rule/query`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * updateValidationRule
     * 
     * @param dto dto
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateValidationRuleUsingPOST(dto: FormatValidationRuleDTO, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public updateValidationRuleUsingPOST(dto: FormatValidationRuleDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public updateValidationRuleUsingPOST(dto: FormatValidationRuleDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public updateValidationRuleUsingPOST(dto: FormatValidationRuleDTO, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling updateValidationRuleUsingPOST.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.basePath}/rule/update`,
            dto,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
