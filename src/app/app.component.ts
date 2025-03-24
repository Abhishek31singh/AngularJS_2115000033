import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';  
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule,CommonModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //========UC1=============//
  title = 'HelloWorld-App';

  //============UC2===============//
  message: string = 'Hello From BridgeLabz';

  //============UC3================//
  bridgeLabzLogo: string = "https://media.licdn.com/dms/image/v2/C510BAQEYyeT3P0H_mw/company-logo_200_200/company-logo_200_200/0/1630611149363/bridgelabz_com_logo?e=2147483647&v=beta&t=TFgRiaA55f57NqQFnUbnsKu3mQo7c-LOfD8_iNSgtNM";

  //============UC4================//
  url: string = "https://www.bridgelabz.com";
  onClick(event: Event): void {
    console.log("Button Clicked:", event);
    window.open(this.url, "_blank");
  }

  //============UC5================//
  userName: string = "";

  //===============UC6===============//
  errorMessage: string = ''; 

  validateUserName(): void {
    const regex = /^[A-Z][a-z]{2,}$/; 
    if (this.userName && !regex.test(this.userName)) {
      this.errorMessage = 'Name should start with a capital letter and be at least 3 characters long.';
    } else {
      this.errorMessage = ''; 
    }
  }
}
