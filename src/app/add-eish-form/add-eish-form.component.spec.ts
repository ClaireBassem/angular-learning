import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEishFormComponent } from './add-eish-form.component';

describe('AddEishFormComponent', () => {
  let component: AddEishFormComponent;
  let fixture: ComponentFixture<AddEishFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEishFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEishFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
