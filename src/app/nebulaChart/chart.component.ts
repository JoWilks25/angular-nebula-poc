/* tslint:disable */
import { Component } from '@angular/core';
import { NebulaService } from '../nebula.service';

const url = "https://objeoepc6cyavmr.uk.qlikcloud.com";
const appId = "1c89a438-769f-4381-bd71-f592db4f779c";
const webIntegrationId = "_7jjcvZOj1O_Ypwj6e7WDsW6l00Wm3P1"
const lineChartId = "mAbpP";
const pieChartId = "LzuJNJ";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
  nebula: any = undefined;
  selectionsBar: any = undefined;
  object1: any = undefined;
  object2: any = undefined;

  constructor(
    private nebulaService: NebulaService,
  ) {}

  async ngOnInit() {
    this.nebula = await this.nebulaService.connectToQlikApp(
      url,
      appId,
      webIntegrationId,
    )
    console.log('nebula', this.nebula)
    // Selections bar
    const selections = await this.nebula.selections();
    this.selectionsBar = await selections.mount(document.querySelector('.curr-selections'));
    this.object1 = await this.nebula?.render({
      element: document.querySelector('#' + "test1"),
      id: pieChartId,
    });
    this.object2 = await this.nebula?.render({
      element: document.querySelector('#' + "test2"),
      id: lineChartId,
    });
  }

}
