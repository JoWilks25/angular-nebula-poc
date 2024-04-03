import { Injectable } from '@angular/core';
import { AuthType } from '@qlik/sdk';
import connect from "./utilities/connect";
import nebula from './utilities/configure';


@Injectable({
  providedIn: 'root'
})
export class NebulaService {
  tenancy: any = null
  app: any = null
  // objects: any[] = []

  constructor(
  ) {}

  async connectToQlikApp(url: string, appId: string, webIntegrationId: string) {
    const tenancy = await connect({
      connectionType: AuthType.WebIntegration,
      url,
      appId,
      // you should use only one of below keys
      // based on your `connectionType`
      // clientId: '<Qlik OAuth client id>',
      webIntegrationId,
    });
    this.tenancy = this.tenancy
    const app = nebula(tenancy)
    this.app = app
    return app
    // this.setObject(objectId, cssId)
  }

  async setObject(objectId: string, divId: string): Promise<any> {
    const object = await this.app?.render({
      element: document.querySelector('#' + divId),
      id: objectId,
    });
    return object;
    // this.objects.push(object)
  }

}