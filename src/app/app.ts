import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, signal, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child } from './components/child/child';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, Child],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  constructor (private cd: ChangeDetectorRef) {}
  protected readonly title = signal('angPractice');
  userName = viewChild.required<ElementRef>('userName');

   empNames = [
    { userName: 'Amit', id: '101'},
    { userName: 'Paresh', id: '102'},
    { userName: 'Shrinidhi', id: '103'}
  ]

  onSave(event: any): void {
  console.log(event);
}
 empName = 'John Doe'
   uName ='';

 //Using changeDetection
onChange(){
this.uName = this.userName().nativeElement.value
}
}
