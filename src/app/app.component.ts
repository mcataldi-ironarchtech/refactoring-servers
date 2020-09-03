import { Component, ViewEncapsulation } from '@angular/core';

import { Server } from './shared/server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated // this is the default
})
export class AppComponent {
  serverElements = [
    new Server('server', 'Test Server 01', 'Just a test')
  ];

  onServerAdded(serverData: {serverName: string, serverContent: string}){
    this.serverElements.push(
      new Server('server', serverData.serverName, serverData.serverContent)
    );
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}){
    this.serverElements.push(
      new Server('server', blueprintData.serverName, blueprintData.serverContent)
    );
  }

}
