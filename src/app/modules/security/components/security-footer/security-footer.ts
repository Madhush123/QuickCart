import { Component } from '@angular/core';

@Component({
  selector: 'app-security-footer',
  imports: [],
  standalone:true,
  templateUrl: './security-footer.html',
  styleUrl: './security-footer.scss'
})
export class SecurityFooter {
year=new Date().getFullYear();
}
