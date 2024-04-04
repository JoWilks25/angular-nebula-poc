import { AfterViewChecked, AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements AfterViewInit {
  @Input() nebulaApp: any;
  @Input() objectId: string | undefined;
  object: any = undefined;

  constructor(
  ) {}

  async ngAfterViewInit(): Promise<void> {
    const querySelector = `#${this.objectId}`;
    const element = document.querySelector(querySelector);
    if (element) {
      this.object = await this.nebulaApp?.render({
        element: document.querySelector(querySelector),
        id: this.objectId,
      });
    }
  }

  ngOnDestroy()	{
    this.object?.destroy();
  }

}
