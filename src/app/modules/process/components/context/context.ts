import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Header} from '../header/header';
import {Footer} from '../footer/footer';

@Component({
  selector: 'app-context',
  imports: [
    RouterOutlet,
    Header,
    Footer
  ],
  templateUrl: './context.html',
  styleUrl: './context.scss'
})
export class Context {

}
