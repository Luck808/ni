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

import { PageInfoOfProcessDto } from '../model/pageInfoOfProcessDto';
import { Process } from '../model/process';
import { ProcessDto } from '../model/processDto';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ProcessControllerService {

    protected basePath = 'https://localhost:8080';
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
     * processBatchDelete
     * 
     * @param ids ids
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public processBatchDeleteUsingDELETE(ids: string, observe?: 'body', reportProgress?: boolean): Observable<number>;
    public processBatchDeleteUsingDELETE(ids: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<number>>;
    public processBatchDeleteUsingDELETE(ids: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<number>>;
    public processBatchDeleteUsingDELETE(ids: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (ids === null || ids === undefined) {
            throw new Error('Required parameter ids was null or undefined when calling processBatchDeleteUsingDELETE.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (ids !== undefined && ids !== null) {
            queryParameters = queryParameters.set('ids', <any>ids);
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

        return this.httpClient.delete<number>(`${this.basePath}/masterdata/process/batch-delete`,
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
     * processBatchSave
     * 
     * @param processs processs
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public processBatchSaveUsingPOST(processs: Array<Process>, observe?: 'body', reportProgress?: boolean): Observable<number>;
    public processBatchSaveUsingPOST(processs: Array<Process>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<number>>;
    public processBatchSaveUsingPOST(processs: Array<Process>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<number>>;
    public processBatchSaveUsingPOST(processs: Array<Process>, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (processs === null || processs === undefined) {
            throw new Error('Required parameter processs was null or undefined when calling processBatchSaveUsingPOST.');
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

        return this.httpClient.post<number>(`${this.basePath}/masterdata/process/batch-save`,
            processs,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * processDelete
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public processDeleteUsingDELETE(id: string, observe?: 'body', reportProgress?: boolean): Observable<number>;
    public processDeleteUsingDELETE(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<number>>;
    public processDeleteUsingDELETE(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<number>>;
    public processDeleteUsingDELETE(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling processDeleteUsingDELETE.');
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

        return this.httpClient.delete<number>(`${this.basePath}/masterdata/process/delete`,
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
     * processFindByColumnsPaged
     * 
     * @param columns columns
     * @param process process
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public processFindByColumnsPagedUsingPOST(columns: string, process: Process, observe?: 'body', reportProgress?: boolean): Observable<Array<ProcessDto>>;
    public processFindByColumnsPagedUsingPOST(columns: string, process: Process, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<ProcessDto>>>;
    public processFindByColumnsPagedUsingPOST(columns: string, process: Process, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<ProcessDto>>>;
    public processFindByColumnsPagedUsingPOST(columns: string, process: Process, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (columns === null || columns === undefined) {
            throw new Error('Required parameter columns was null or undefined when calling processFindByColumnsPagedUsingPOST.');
        }

        if (process === null || process === undefined) {
            throw new Error('Required parameter process was null or undefined when calling processFindByColumnsPagedUsingPOST.');
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

        return this.httpClient.post<Array<ProcessDto>>(`${this.basePath}/masterdata/process/find-by/${encodeURIComponent(String(columns))}`,
            process,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * processFindByPaged
     * 
     * @param pageNo page-no
     * @param pageSize page-size
     * @param process process
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public processFindByPagedUsingPOST(pageNo: number, pageSize: number, process: Process, observe?: 'body', reportProgress?: boolean): Observable<PageInfoOfProcessDto>;
    public processFindByPagedUsingPOST(pageNo: number, pageSize: number, process: Process, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PageInfoOfProcessDto>>;
    public processFindByPagedUsingPOST(pageNo: number, pageSize: number, process: Process, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PageInfoOfProcessDto>>;
    public processFindByPagedUsingPOST(pageNo: number, pageSize: number, process: Process, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (pageNo === null || pageNo === undefined) {
            throw new Error('Required parameter pageNo was null or undefined when calling processFindByPagedUsingPOST.');
        }

        if (pageSize === null || pageSize === undefined) {
            throw new Error('Required parameter pageSize was null or undefined when calling processFindByPagedUsingPOST.');
        }

        if (process === null || process === undefined) {
            throw new Error('Required parameter process was null or undefined when calling processFindByPagedUsingPOST.');
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

        return this.httpClient.post<PageInfoOfProcessDto>(`${this.basePath}/masterdata/process/find-by-paged/${encodeURIComponent(String(pageNo))}/${encodeURIComponent(String(pageSize))}`,
            process,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * processFindBy
     * 
     * @param processDto processDto
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public processFindByUsingPOST(processDto: ProcessDto, observe?: 'body', reportProgress?: boolean): Observable<Array<ProcessDto>>;
    public processFindByUsingPOST(processDto: ProcessDto, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<ProcessDto>>>;
    public processFindByUsingPOST(processDto: ProcessDto, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<ProcessDto>>>;
    public processFindByUsingPOST(processDto: ProcessDto, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (processDto === null || processDto === undefined) {
            throw new Error('Required parameter processDto was null or undefined when calling processFindByUsingPOST.');
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

        return this.httpClient.post<Array<ProcessDto>>(`${this.basePath}/masterdata/process/find-by`,
            processDto,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * processFindOne
     * 
     * @param fieldName fieldName
     * @param value value
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public processFindOneUsingGET(fieldName: string, value: string, observe?: 'body', reportProgress?: boolean): Observable<ProcessDto>;
    public processFindOneUsingGET(fieldName: string, value: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ProcessDto>>;
    public processFindOneUsingGET(fieldName: string, value: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ProcessDto>>;
    public processFindOneUsingGET(fieldName: string, value: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (fieldName === null || fieldName === undefined) {
            throw new Error('Required parameter fieldName was null or undefined when calling processFindOneUsingGET.');
        }

        if (value === null || value === undefined) {
            throw new Error('Required parameter value was null or undefined when calling processFindOneUsingGET.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (fieldName !== undefined && fieldName !== null) {
            queryParameters = queryParameters.set('fieldName', <any>fieldName);
        }
        if (value !== undefined && value !== null) {
            queryParameters = queryParameters.set('value', <any>value);
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

        return this.httpClient.get<ProcessDto>(`${this.basePath}/masterdata/process/find-one`,
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
     * processFind
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public processFindUsingGET(id: string, observe?: 'body', reportProgress?: boolean): Observable<ProcessDto>;
    public processFindUsingGET(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ProcessDto>>;
    public processFindUsingGET(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ProcessDto>>;
    public processFindUsingGET(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling processFindUsingGET.');
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

        return this.httpClient.get<ProcessDto>(`${this.basePath}/masterdata/process/find`,
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
     * processListPaged
     * 
     * @param pageNo page-no
     * @param pageSize page-size
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public processListPagedUsingGET(pageNo: number, pageSize: number, observe?: 'body', reportProgress?: boolean): Observable<PageInfoOfProcessDto>;
    public processListPagedUsingGET(pageNo: number, pageSize: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PageInfoOfProcessDto>>;
    public processListPagedUsingGET(pageNo: number, pageSize: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PageInfoOfProcessDto>>;
    public processListPagedUsingGET(pageNo: number, pageSize: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (pageNo === null || pageNo === undefined) {
            throw new Error('Required parameter pageNo was null or undefined when calling processListPagedUsingGET.');
        }

        if (pageSize === null || pageSize === undefined) {
            throw new Error('Required parameter pageSize was null or undefined when calling processListPagedUsingGET.');
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

        return this.httpClient.get<PageInfoOfProcessDto>(`${this.basePath}/masterdata/process/list-paged/${encodeURIComponent(String(pageNo))}/${encodeURIComponent(String(pageSize))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * processList
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public processListUsingGET(observe?: 'body', reportProgress?: boolean): Observable<Array<ProcessDto>>;
    public processListUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<ProcessDto>>>;
    public processListUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<ProcessDto>>>;
    public processListUsingGET(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<Array<ProcessDto>>(`${this.basePath}/masterdata/process/list`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * processSave
     * 
     * @param process process
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public processSaveUsingPOST(process: Process, observe?: 'body', reportProgress?: boolean): Observable<number>;
    public processSaveUsingPOST(process: Process, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<number>>;
    public processSaveUsingPOST(process: Process, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<number>>;
    public processSaveUsingPOST(process: Process, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (process === null || process === undefined) {
            throw new Error('Required parameter process was null or undefined when calling processSaveUsingPOST.');
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

        return this.httpClient.post<number>(`${this.basePath}/masterdata/process/save`,
            process,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * processUpdate
     * 
     * @param process process
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public processUpdateUsingPUT(process: Process, observe?: 'body', reportProgress?: boolean): Observable<number>;
    public processUpdateUsingPUT(process: Process, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<number>>;
    public processUpdateUsingPUT(process: Process, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<number>>;
    public processUpdateUsingPUT(process: Process, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (process === null || process === undefined) {
            throw new Error('Required parameter process was null or undefined when calling processUpdateUsingPUT.');
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

        return this.httpClient.put<number>(`${this.basePath}/masterdata/process/update`,
            process,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
