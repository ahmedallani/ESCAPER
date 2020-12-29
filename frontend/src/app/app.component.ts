import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onSave($event:any){
    console.log("button is clicked!",$event)
  }
  title = 'frontend';
}
