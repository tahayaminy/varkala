import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryFullComponent } from './category-full.component';

describe('CategoryFullComponent', () => {
  let component: CategoryFullComponent;
  let fixture: ComponentFixture<CategoryFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryFullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
