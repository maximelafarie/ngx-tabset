import {inject, TestBed, async} from '@angular/core/testing';

import {TabsetComponent, TabComponent, TabHeadingDirective, TabTranscludeDirective} from './../../index';

describe('TabsetComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TabsetComponent,
        TabComponent,
        TabHeadingDirective,
        TabTranscludeDirective
      ]
    }).compileComponents();
  }));

  it('should create a tabset', async(() => {
    const fixture = TestBed.createComponent(TabsetComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
