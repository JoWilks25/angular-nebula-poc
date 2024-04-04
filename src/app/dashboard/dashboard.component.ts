/* tslint:disable */
import { Component, OnInit } from '@angular/core';
import { QlikService } from '../qlik.service';

const url = "https://objeoepc6cyavmr.uk.qlikcloud.com";
const appId = "1c89a438-769f-4381-bd71-f592db4f779c";
const webIntegrationId = "_7jjcvZOj1O_Ypwj6e7WDsW6l00Wm3P1"
// const lineChartId = "mAbpP";
// const pieChartId = "LzuJNJ";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  qlikApp: any = undefined;
  nebulaApp: any = undefined;
  selectionsBar: any = undefined;

  constructor(
    private qlikService: QlikService,
  ) {
  }

  async ngOnInit() {
    // Connect to Qlik App
    const apps = await this.qlikService.connectToQlikApp(
      url,
      appId,
      webIntegrationId,
    )
    console.log('apps', apps)
    this.qlikApp = apps.enigmaApp;
    this.nebulaApp = apps.nebulaApp;

    // Mount selections bar
    const selections = await this.nebulaApp.selections();
    this.selectionsBar = await selections.mount(document.querySelector('.curr-selections'));
    

    // // Using Enigma to get raw data 
    // const object = await this.qlikApp.getObject(lineChartId);
    // console.log('object', object)
    // const layout = await object.getLayout();
    // console.log('layout', layout.qHyperCube.qSize)
    // const hypercube = await object.getHyperCubeData({
    //   "qPath": "/qHyperCubeDef",
    //   "qPages": [
    //     {
    //       "qLeft": 0,
    //       "qTop": 0,
    //       "qWidth": layout.qHyperCube.qSize.qcx,
    //       "qHeight": layout.qHyperCube.qSize.qcy,
    //     }
    //   ]
    // });
    // console.log('hypercube', hypercube[0])


  }

}
