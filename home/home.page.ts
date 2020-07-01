import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Browser } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  	//async openBrowser() {
	  // On iOS, for example, open the URL in SFSafariViewController (the in-app browser)
	  //await Browser.open({ url: "https://ionicframework.com" });
	//}

	async testCap(){
		console.log('asdasdasd');
	}

  ngOnInit() {
  }

}
