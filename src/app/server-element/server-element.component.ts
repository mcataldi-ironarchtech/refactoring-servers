import { 
    Component, OnInit, Input, ViewEncapsulation, OnChanges, 
    SimpleChanges, DoCheck, AfterContentInit, AfterViewInit, 
    AfterViewChecked, AfterContentChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // Conventional Default
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, 
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  // Best practice to put lifecycle hooks in 'implements' portion and then in the import statement.
  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input('srvName') name: string;

  constructor() {
    console.log('constructor called');
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges', changes);
  }

  ngDoCheck(){
    console.log('ngDoCheck');

    // Don't run high performant code here because will cost a lot.
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy');
  }
}