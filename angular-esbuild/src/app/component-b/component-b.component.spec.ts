import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentBComponent } from './component-b.component';
import { ComponentLazyLoaderService } from '../component-lazy-loader.service';

describe('ComponentBComponent', () => {
  let component: ComponentBComponent;
  let fixture: ComponentFixture<ComponentBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentBComponent],
      providers: [
        ComponentLazyLoaderService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
