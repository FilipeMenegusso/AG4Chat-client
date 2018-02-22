import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import * as io from "socket.io-client";
import { Socket } from 'net';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  socket: Socket = io(); // cliente se conecta

  constructor() { }

  ngOnInit() {
    this.socket
  }
}
