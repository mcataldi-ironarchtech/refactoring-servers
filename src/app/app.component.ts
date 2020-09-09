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
    { type: 'server', name: 'Test Server 01', content: 'Just a test' }
  ];

  onServerAdded(serverData: Server){
    this.serverElements.push({
      type: 'server', 
      name: serverData.name,
      content: serverData.content
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}){
    this.serverElements.push({
      type: 'blueprint', 
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onChangeFirst(){
    this.serverElements[0].name = "Changed";
  }

  onDestroyFirst(){
    this.serverElements.splice(0, 1);
  }

}
