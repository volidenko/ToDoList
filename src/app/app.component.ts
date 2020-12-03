import { Component } from '@angular/core';
import { ToDoListItem } from '../app/to-do-list-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: "<div>Hello world!</div>",
  styleUrls: ['./app.component.css']
  //styles: ["div{color: red}"]
})
export class AppComponent {
  title = 'ToDolist Angular App';
  getTitle = function (): string {
    return this.title;
  }
  fontSize: number;
  fontSizeSubscriberFunc(val: number) {
    this.fontSize = val;
  }
}