import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
})
export class ServersComponent implements OnInit {
  allowNewServer = true;
  serverName = '';
  servers = [];
  items: any;
  track: any;

  constructor() {}
  ngOnInit(): void {}

  createServer() {
    this.servers.push(new Date());
  }

  onChange(event: any) {
    this.serverName = event.target.value;
  }
}
