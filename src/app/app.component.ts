import { Component } from '@angular/core';


// a decorator function adds more behavior to our class from outside of the class
// the decorator turns js class into a component
// it must be declared immediately before the class 

// the configurations line inside of a decorator are often referred to as meta data
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  
export class AppComponent {
  title = 'My MTA Stop Info';
}
