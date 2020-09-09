import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverName: string, serverContent: string) {
    console.log(serverName, serverContent);
    this.serverCreated.emit({
      serverName,
      serverContent
    });
  }

  onAddBlueprint(serverName: string, serverContent: string) {
    console.log(serverName, serverContent);
    this.blueprintCreated.emit({
      serverName,
      serverContent
    });
  }

}
