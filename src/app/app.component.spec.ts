import {TestBed, async} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {ResultsListComponent} from './results-list/results-list.component';
import {Convert2KPipe} from './convert2k/convert2k.pipe';
import {TimeAgoPipe} from 'angular2-moment';
import {
  MdButtonModule, MdIconModule, MdMenuModule, MdRadioModule, MdInputModule, MdListModule,
} from '@angular/material';
import {GitHubService} from './git-hub.service';


describe('AppComponent', () => {
  const title = 'GitHub Stars';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule, MdButtonModule, MdIconModule, MdMenuModule, MdRadioModule, MdInputModule, MdListModule],
      declarations: [
        AppComponent, ResultsListComponent, Convert2KPipe, TimeAgoPipe
      ],
      providers: [GitHubService]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title '${title}'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual(title);
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(title);
  }));
});
