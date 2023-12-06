import { TestBed } from '@angular/core/testing';
import { GerenciarusuariosComponent } from './app.component';

describe('GerenciarusuariosComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GerenciarusuariosComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(GerenciarusuariosComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'gerenciadorusuarios' title`, () => {
    const fixture = TestBed.createComponent(GerenciarusuariosComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('gerenciadorusuarios');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(GerenciarusuariosComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, gerenciadorusuarios');
  });
});
