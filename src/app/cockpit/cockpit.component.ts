import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

import { Server } from '../shared/server.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<Server>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @ViewChild('serverContentInput') serverContentInput: ElementRef;
  // @ViewChild(CockpitComponent) serverContentInput; // Access to first instance of this component

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverName: string, serverContent: string) {
    // console.log(serverName, serverContent);
    console.log(this.serverContentInput.nativeElement.value);
    this.serverCreated.emit(new Server(serverName, serverContent));
  }

  onAddBlueprint(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
    // console.log(serverName, serverContent);
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: contentInput.value
    });
  }

}
