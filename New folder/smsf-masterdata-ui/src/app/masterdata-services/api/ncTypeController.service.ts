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

import { NcType } from '../model/ncType';
import { NcTypeDto } from '../model/ncTypeDto';
import { PageInfoOfNcTypeDto } from '../model/pageInfoOfNcTypeDto';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class NcTypeControllerService {

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
     * ncTypeBatchDelete
     * 
     * @param ids ids
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public ncTypeBatchDeleteUsingDELETE(ids: string, observe?: 'body', reportProgress?: boolean): Observable<number>;
    public ncTypeBatchDeleteUsingDELETE(ids: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<number>>;
    public ncTypeBatchDeleteUsingDELETE(ids: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<number>>;
    public ncTypeBatchDeleteUsingDELETE(ids: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (ids === null || ids === undefined) {
            throw new Error('Required parameter ids was null or undefined when calling ncTypeBatchDeleteUsingDELETE.');
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

        return this.httpClient.delete<number>(`${this.basePath}/masterdata/ncType/batch-delete`,
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
     * ncTypeBatchSave
     * 
     * @param ncTypes ncTypes
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public ncTypeBatchSaveUsingPOST(ncTypes: Array<NcType>, observe?: 'body', reportProgress?: boolean): Observable<number>;
    public ncTypeBatchSaveUsingPOST(ncTypes: Array<NcType>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<number>>;
    public ncTypeBatchSaveUsingPOST(ncTypes: Array<NcType>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<number>>;
    public ncTypeBatchSaveUsingPOST(ncTypes: Array<NcType>, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (ncTypes === null || ncTypes === undefined) {
            throw new Error('Required parameter ncTypes was null or undefined when calling ncTypeBatchSaveUsingPOST.');
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

        return this.httpClient.post<number>(`${this.basePath}/masterdata/ncType/batch-save`,
            ncTypes,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * ncTypeDelete
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public ncTypeDeleteUsingDELETE(id: string, observe?: 'body', reportProgress?: boolean): Observable<number>;
    public ncTypeDeleteUsingDELETE(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<number>>;
    public ncTypeDeleteUsingDELETE(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<number>>;
    public ncTypeDeleteUsingDELETE(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling ncTypeDeleteUsingDELETE.');
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

        return this.httpClient.delete<number>(`${this.basePath}/masterdata/ncType/delete`,
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
     * ncTypeFindByColumnsPaged
     * 
     * @param columns columns
     * @param ncTypeDto ncTypeDto
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public ncTypeFindByColumnsPagedUsingPOST(columns: string, ncTypeDto: NcTypeDto, observe?: 'body', reportProgress?: boolean): Observable<Array<NcTypeDto>>;
    public ncTypeFindByColumnsPagedUsingPOST(columns: string, ncTypeDto: NcTypeDto, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<NcTypeDto>>>;
    public ncTypeFindByColumnsPagedUsingPOST(columns: string, ncTypeDto: NcTypeDto, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<NcTypeDto>>>;
    public ncTypeFindByColumnsPagedUsingPOST(columns: string, ncTypeDto: NcTypeDto, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (columns === null || columns === undefined) {
            throw new Error('Required parameter columns was null or undefined when calling ncTypeFindByColumnsPagedUsingPOST.');
        }

        if (ncTypeDto === null || ncTypeDto === undefined) {
            throw new Error('Required parameter ncTypeDto was null or undefined when calling ncTypeFindByColumnsPagedUsingPOST.');
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

        return this.httpClient.post<Array<NcTypeDto>>(`${this.basePath}/masterdata/ncType/find-by/${encodeURIComponent(String(columns))}`,
            ncTypeDto,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * ncTypeFindByPaged
     * 
     * @param ncType ncType
     * @param pageNo page-no
     * @param pageSize page-size
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public ncTypeFindByPagedUsingPOST(ncType: NcType, pageNo: number, pageSize: number, observe?: 'body', reportProgress?: boolean): Observable<PageInfoOfNcTypeDto>;
    public ncTypeFindByPagedUsingPOST(ncType: NcType, pageNo: number, pageSize: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PageInfoOfNcTypeDto>>;
    public ncTypeFindByPagedUsingPOST(ncType: NcType, pageNo: number, pageSize: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PageInfoOfNcTypeDto>>;
    public ncTypeFindByPagedUsingPOST(ncType: NcType, pageNo: number, pageSize: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (ncType === null || ncType === undefined) {
            throw new Error('Required parameter ncType was null or undefined when calling ncTypeFindByPagedUsingPOST.');
        }

        if (pageNo === null || pageNo === undefined) {
            throw new Error('Required parameter pageNo was null or undefined when calling ncTypeFindByPagedUsingPOST.');
        }

        if (pageSize === null || pageSize === undefined) {
            throw new Error('Required parameter pageSize was null or undefined when calling ncTypeFindByPagedUsingPOST.');
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

        return this.httpClient.post<PageInfoOfNcTypeDto>(`${this.basePath}/masterdata/ncType/find-by-paged/${encodeURIComponent(String(pageNo))}/${encodeURIComponent(String(pageSize))}`,
            ncType,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * ncTypeFindBy
     * 
     * @param ncTypeDto ncTypeDto
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public ncTypeFindByUsingPOST(ncTypeDto: NcTypeDto, observe?: 'body', reportProgress?: boolean): Observable<Array<NcTypeDto>>;
    public ncTypeFindByUsingPOST(ncTypeDto: NcTypeDto, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<NcTypeDto>>>;
    public ncTypeFindByUsingPOST(ncTypeDto: NcTypeDto, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<NcTypeDto>>>;
    public ncTypeFindByUsingPOST(ncTypeDto: NcTypeDto, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (ncTypeDto === null || ncTypeDto === undefined) {
            throw new Error('Required parameter ncTypeDto was null or undefined when calling ncTypeFindByUsingPOST.');
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

        return this.httpClient.post<Array<NcTypeDto>>(`${this.basePath}/masterdata/ncType/find-by`,
            ncTypeDto,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * ncTypeFindOne
     * 
     * @param fieldName fieldName
     * @param value value
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public ncTypeFindOneUsingGET(fieldName: string, value: string, observe?: 'body', reportProgress?: boolean): Observable<NcTypeDto>;
    public ncTypeFindOneUsingGET(fieldName: string, value: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<NcTypeDto>>;
    public ncTypeFindOneUsingGET(fieldName: string, value: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<NcTypeDto>>;
    public ncTypeFindOneUsingGET(fieldName: string, value: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (fieldName === null || fieldName === undefined) {
            throw new Error('Required parameter fieldName was null or undefined when calling ncTypeFindOneUsingGET.');
        }

        if (value === null || value === undefined) {
            throw new Error('Required parameter value was null or undefined when calling ncTypeFindOneUsingGET.');
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

        return this.httpClient.get<NcTypeDto>(`${this.basePath}/masterdata/ncType/find-one`,
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
     * ncTypeFind
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public ncTypeFindUsingGET(id: string, observe?: 'body', reportProgress?: boolean): Observable<NcTypeDto>;
    public ncTypeFindUsingGET(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<NcTypeDto>>;
    public ncTypeFindUsingGET(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<NcTypeDto>>;
    public ncTypeFindUsingGET(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling ncTypeFindUsingGET.');
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

        return this.httpClient.get<NcTypeDto>(`${this.basePath}/masterdata/ncType/find`,
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
     * ncTypeListPaged
     * 
     * @param pageNo page-no
     * @param pageSize page-size
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public ncTypeListPagedUsingGET(pageNo: number, pageSize: number, observe?: 'body', reportProgress?: boolean): Observable<PageInfoOfNcTypeDto>;
    public ncTypeListPagedUsingGET(pageNo: number, pageSize: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PageInfoOfNcTypeDto>>;
    public ncTypeListPagedUsingGET(pageNo: number, pageSize: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PageInfoOfNcTypeDto>>;
    public ncTypeListPagedUsingGET(pageNo: number, pageSize: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (pageNo === null || pageNo === undefined) {
            throw new Error('Required parameter pageNo was null or undefined when calling ncTypeListPagedUsingGET.');
        }

        if (pageSize === null || pageSize === undefined) {
            throw new Error('Required parameter pageSize was null or undefined when calling ncTypeListPagedUsingGET.');
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

        return this.httpClient.get<PageInfoOfNcTypeDto>(`${this.basePath}/masterdata/ncType/list-paged/${encodeURIComponent(String(pageNo))}/${encodeURIComponent(String(pageSize))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * ncTypeList
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public ncTypeListUsingGET(observe?: 'body', reportProgress?: boolean): Observable<Array<NcTypeDto>>;
    public ncTypeListUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<NcTypeDto>>>;
    public ncTypeListUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<NcTypeDto>>>;
    public ncTypeListUsingGET(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<Array<NcTypeDto>>(`${this.basePath}/masterdata/ncType/list`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * ncTypeSave
     * 
     * @param ncType ncType
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public ncTypeSaveUsingPOST(ncType: NcType, observe?: 'body', reportProgress?: boolean): Observable<number>;
    public ncTypeSaveUsingPOST(ncType: NcType, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<number>>;
    public ncTypeSaveUsingPOST(ncType: NcType, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<number>>;
    public ncTypeSaveUsingPOST(ncType: NcType, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (ncType === null || ncType === undefined) {
            throw new Error('Required parameter ncType was null or undefined when calling ncTypeSaveUsingPOST.');
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

        return this.httpClient.post<number>(`${this.basePath}/masterdata/ncType/save`,
            ncType,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * ncTypeUpdate
     * 
     * @param ncType ncType
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public ncTypeUpdateUsingPUT(ncType: NcType, observe?: 'body', reportProgress?: boolean): Observable<number>;
    public ncTypeUpdateUsingPUT(ncType: NcType, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<number>>;
    public ncTypeUpdateUsingPUT(ncType: NcType, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<number>>;
    public ncTypeUpdateUsingPUT(ncType: NcType, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (ncType === null || ncType === undefined) {
            throw new Error('Required parameter ncType was null or undefined when calling ncTypeUpdateUsingPUT.');
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

        return this.httpClient.put<number>(`${this.basePath}/masterdata/ncType/update`,
            ncType,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
