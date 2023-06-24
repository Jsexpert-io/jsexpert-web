interface RequestObject {
    path: string;
    method: string;
    params: { [key: string]: string };
    body: any;
    headers: string;
    hostname: string;
    ip: string;
    protocol: string;
    fresh: boolean;
    stale: boolean;
    secure: boolean;
    xhr: boolean;
    reqSize: number;
  }
  
  interface ResponseObject {
    status: number;
    resSize: number;
  }
  
  interface Data {
    requestObject: RequestObject;
    durationInMilliseconds: number;
    memoryUsage: number;
    responseObject: ResponseObject;
  }
  
  export interface RequestDetailModel {
    _id: string;
    data: Data;
    createdAt: string;
  }