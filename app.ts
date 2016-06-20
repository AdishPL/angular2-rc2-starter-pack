import {Component} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";

@Component({
    selector: 'hello-world',
    template: `
  Hello {{ name }}`
})

class HelloWorld {

    private name:string = 'World';

    constructor() {
    }
}


bootstrap(HelloWorld);