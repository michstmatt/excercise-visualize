import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutViewGraphComponent } from './workout-view-graph.component';

describe('WorkoutViewGraphComponent', () => {
  let component: WorkoutViewGraphComponent;
  let fixture: ComponentFixture<WorkoutViewGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutViewGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutViewGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
