import { Injectable } from '@angular/core';
import { AuthType } from '@qlik/sdk';
import connect from "./utilities/connect";
import nebula from './utilities/configure';


@Injectable({
  providedIn: 'root'
})
export class QlikService {
  url: string = '';
  appId: string = '';
  webIntegrationId = '';
  enigmaApp: any = null
  nebulaApp: any = null

  async connectToQlikApp(url: string, appId: string, webIntegrationId: string) {
    const enigmaApp = await connect({
      connectionType: AuthType.WebIntegration,
      url,
      appId,
      // you should use only one of below keys
      // based on your `connectionType`
      // clientId: '<Qlik OAuth client id>',
      webIntegrationId,
    });
    this.enigmaApp = enigmaApp
    this.nebulaApp = nebula(enigmaApp)
    return {
      enigmaApp: this.enigmaApp,
      nebulaApp: this.nebulaApp,
    }
  }

  async setObject(objectId: string, divId: string): Promise<any> {
    const object = await this.nebulaApp?.render({
      element: document.querySelector('#' + divId),
      id: objectId,
    });
    return object;
  }

}