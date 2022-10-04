import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GraphComponent } from './graph/graph.component';
import { WorkoutViewComponent } from './workout-view/workout-view.component';
import { WorkoutGraphComponent } from './workout-graph/workout-graph.component';
import { WorkoutViewGraphComponent } from './workout-view-graph/workout-view-graph.component';  

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    WorkoutViewComponent,
    WorkoutGraphComponent,
    WorkoutViewGraphComponent
  ],
  imports: [
    BrowserModule,
    NgChartsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
