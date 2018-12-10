import { TestBed, async } from '@angular/core/testing';
<<<<<<< HEAD
import { AppComponent } from './app.component';
=======

import { AppComponent } from './app.component';

>>>>>>> e05683a3eeb88b54b4feaab8f620d854e9cedf53
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
<<<<<<< HEAD
=======

>>>>>>> e05683a3eeb88b54b4feaab8f620d854e9cedf53
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
<<<<<<< HEAD
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
=======

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

>>>>>>> e05683a3eeb88b54b4feaab8f620d854e9cedf53
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
<<<<<<< HEAD
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to frontend!');
=======
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
>>>>>>> e05683a3eeb88b54b4feaab8f620d854e9cedf53
  }));
});
