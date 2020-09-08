import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverName: string, serverContent: string) {
    this.serverCreated.emit({
      serverName,
      serverContent
    });
  }

  onAddBlueprint(serverName: string, serverContent: string) {
    this.blueprintCreated.emit({
      serverName,
      serverContent
    });
  }

}
