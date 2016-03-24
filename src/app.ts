import {bootstrap} from 'angular2/platform/browser';
import {RxJSStudyApp} from './app/rx-jsstudy';
import {JSONP_PROVIDERS} from 'angular2/http';

bootstrap(RxJSStudyApp, [JSONP_PROVIDERS]);
