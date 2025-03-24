import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //========UC1=============//
  title = 'HelloWorld-App';
  // //============UC2===============//
  message:string='Hello From BridgeLabz';
  //============UC3================//
  bridgeLabzLogo: string="https://media.licdn.com/dms/image/v2/C510BAQEYyeT3P0H_mw/company-logo_200_200/company-logo_200_200/0/1630611149363/bridgelabz_com_logo?e=2147483647&v=beta&t=TFgRiaA55f57NqQFnUbnsKu3mQo7c-LOfD8_iNSgtNM"
  //============UC4================//
  url="https://www.bridgelabz.com";
  onClick(event:Event):void {
    console.log("Button Clicked:",event);
    window.open(this.url,"_blank");
  }
  //============UC5================//
  userName: string = "";
}
