import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-draggble-dashboard',
  templateUrl: './draggble-dashboard.component.html',
  styleUrls: ['./draggble-dashboard.component.sass'],
})
export class DraggbleDashboardComponent {
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
    'CARD 6'
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }
}
