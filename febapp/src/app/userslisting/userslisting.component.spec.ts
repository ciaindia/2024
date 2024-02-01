import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserslistingComponent } from './userslisting.component';

describe('UserslistingComponent', () => {
  let component: UserslistingComponent;
  let fixture: ComponentFixture<UserslistingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserslistingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserslistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
