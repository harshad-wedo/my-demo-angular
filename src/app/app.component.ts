import {
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'My Demo';
  serverElements = [];
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4, 6];
  onlyOddNumber = false;

  onAddServer(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onAddBluePrint(blueprintData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
    });
  }

  onChangeDetect() {
    this.serverElements[0] = 'change detection';
  }
  onDestroyComponent() {
    this.serverElements.splice(0, 1);
  }
  onOnlyOddToggle() {
    this.onlyOddNumber = !this.onlyOddNumber;
  }
}
