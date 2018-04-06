import { Injectable } from "@angular/core";
// the global swellrt namespace
declare let swell: any;
// access to window global var
declare let window: any;

@Injectable()
export class SwellService {

private instance: any = null;
private service:any;

public getService():any{

    this.service = swell.runtime.get();
    return this.service;
}

public getInstancePromise() {

    return new Promise((resolve, reject) => {
                if (this.instance != null) {
                    resolve(this.instance);
                    }
                    swell.onReady((serviceInstance) => {
                    this.instance = serviceInstance;
                    //this.service = swell.runtime.get();
                    resolve(serviceInstance);
                    });
                    setTimeout(() => {
                    reject(new Error('Error loading swellrt client: timeout'));
                    }, 15000);
            });
    }



} 
