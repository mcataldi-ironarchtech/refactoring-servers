import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Server } from '../shared/server.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<Server>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverName: string, serverContent: string) {
    // console.log(serverName, serverContent);
    this.serverCreated.emit(new Server(serverName, serverContent));
  }

  onAddBlueprint(serverName: string, serverContent: string) {
    // console.log(serverName, serverContent);
    this.blueprintCreated.emit({
      serverName,
      serverContent
    });
  }

}
