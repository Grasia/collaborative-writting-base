import { Injectable } from "@angular/core";
// the global swellrt namespace
declare let swell: any;
// access to window global var
declare let window: any;

@Injectable()
export class SwellService {

private service: any;

public get(): any {
    return this.service;
}

public promise() {

    return new Promise((resolve, reject) => {

                if (this.service != null) {
                    resolve(this.service);
                    return;
                }

                swell.onReady((_service) => {
                    this.service = _service;
                    window.service = this.service;
                    resolve(this.service);
                });

                setTimeout(() => { reject(new Error('Error loading swellrt client: timeout'));
                }, 15000);
            });
    }

}
