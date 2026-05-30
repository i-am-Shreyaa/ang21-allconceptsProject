import { Component, Output, EventEmitter,
     AfterViewInit, 
     OnInit} from '@angular/core';

     import { viewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [ ],
  standalone: true,
  templateUrl: './child.html',
  styleUrl: './child.scss',
})
export class Child implements OnInit, AfterViewInit {

  ngOnInit(): void {
    console.log('Child Component initialized')
  }

  @Output() save = new EventEmitter<any>();
  
  search = viewChild.required<ElementRef> ('search');

onClick() {
  this.save.emit({ name: 'John' });
}

ngAfterViewInit() {
  console.log(this.search())
  console.log(this.search()?.nativeElement.value)
}

onInput(event: Event) {
  const value = (event.target as HTMLInputElement).value;
  console.log(value);
}

onNewInput(event: Event) {
  const value = (event.target as HTMLInputElement).value;
  console.log(value);
}
 
}
