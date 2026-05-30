import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child } from './components/child/child';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Child],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angPractice');

  onSave(event: any): void {
  console.log(event);
}
}
