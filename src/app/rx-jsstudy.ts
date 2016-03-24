import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';


@Component({
  selector: 'rx-jsstudy-app',
  providers: [ROUTER_PROVIDERS],
  templateUrl: 'app/rx-jsstudy.html',
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
@RouteConfig([

])
export class RxJSStudyApp {
  defaultMeaning: number = 42;

  meaningOfLife(meaning?: number) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
