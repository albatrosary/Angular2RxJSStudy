import {
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {WikipediaService} from './wikipedia-service';


describe('WikipediaService Service', () => {

  beforeEachProviders(() => [WikipediaService]);


  it('should ...', inject([WikipediaService], (service: WikipediaService) => {

  }));

});
