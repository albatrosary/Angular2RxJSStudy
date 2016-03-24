import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {RxJSStudyApp} from '../app/rx-jsstudy';

beforeEachProviders(() => [RxJSStudyApp]);

describe('App: RxJSStudy', () => {
  it('should have the `defaultMeaning` as 42', inject([RxJSStudyApp], (app: RxJSStudyApp) => {
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([RxJSStudyApp], (app: RxJSStudyApp) => {
    }));
  });
});

