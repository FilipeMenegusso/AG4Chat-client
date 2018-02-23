import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {environment} from '../../../../environments/environment';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ChatService {

    socket: any;

    // socketConnected$ = new BehaviorSubject<boolean>(false);

    constructor(private http: Http) {
        this.socket = io(environment.socket.baseUrl, environment.socket.opts);
        this.socket.on('connect', () => {});
        this.socket.on('disconnect', () => {});
        
        
    }

    // socket.on('notify-onlines', (email) => {
    //     notify({ email, msg: 'Online' });
    // });
    // socket.on('notify-offlines', (email) => {
    //     notify({ email, msg: 'Offline' });
    // });
    
    // socket.on('new-message', (data) => {
    //     // add msg on text, data.email/data.sala
    //     // const chat = document.getElementById(`chat_${data.email}`);
    //     // if (chat.href.includes('?sala=')) {
    //     //   chat.href = chat.href.replace(/\?sala=[\w]+/, `?sala=${data.sala}`);
    //     // } else {
    //     //   chat.href += `?sala=${data.sala}`;
    //     // }
    //     // notify({ email: data.email, msg: 'Mensagem!' });
    // });
    

}