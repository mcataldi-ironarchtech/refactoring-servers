import { Component, ViewEncapsulation } from '@angular/core';
import { CockpitComponent } from './cockpit/cockpit.component';

// import { Server } from './shared/server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // encapsulation: ViewEncapsulation.Emulated // this is the default
})
export class AppComponent {
  serverElements = [
    { type: 'server', name: 'Test Server 01', content: 'Just a test' }
  ];

  onServerAdded(serverData: {serverName: string, serverContent: string}){
    this.serverElements.push({
      type: 'server', 
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}){
    this.serverElements.push({
      type: 'server', 
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

}
