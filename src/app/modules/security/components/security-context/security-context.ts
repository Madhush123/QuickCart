import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SecurityFooter} from '../security-footer/security-footer';
import {SecurityHeader} from '../security-header/security-header';

@Component({
  selector: 'app-security-context',
  imports: [
    RouterOutlet,
    SecurityFooter,
    SecurityHeader
  ],
  standalone:true,
  templateUrl: './security-context.html',
  styleUrl: './security-context.scss'
})
export class SecurityContext {

}
