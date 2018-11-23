import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import * as Plotly from 'src/assets/plotly.min.js';

@Component({
  selector: 'app-draggble-dashboard',
  templateUrl: './draggble-dashboard.component.html',
  styleUrls: ['./draggble-dashboard.component.sass'],
})
export class DraggbleDashboardComponent implements AfterViewInit {

  @ViewChild('plotly_graph') plotly_graph: ElementRef;


  first = [
    'CARD 1',
    'CARD 2',

  ];

  second = [
    'CARD 4',
    'CARD 3'
  ];

  third = [
    'CARD 5',
    'CARD 6',
    'CARD 7',
    'CARD 8'
  ];

  data = [{
    x: [1, 2, 3],
    y: [0, 0.5, 1],
    line: {simplify: false},
    marker: {
      color: '#C8A2C8',
      line: {
        width: 2.5
      }
    }
  }];

  layout = {
    title: 'Plotly',
    font: { size: 18 }
  };

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      console.log('else');
      console.log('if');
      Plotly.newPlot(this.plotly_graph.nativeElement, this.data, this.layout, { responsive: true });
    }
  }

  ngAfterViewInit() {
    Plotly.newPlot(this.plotly_graph.nativeElement, this.data, this.layout, { responsive: true });
  }
}
