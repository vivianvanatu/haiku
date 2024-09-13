import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHaikusComponent } from './my-haikus.component';

describe('MyHaikusComponent', () => {
  let component: MyHaikusComponent;
  let fixture: ComponentFixture<MyHaikusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyHaikusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyHaikusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
