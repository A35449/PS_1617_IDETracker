import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { Overview } from './overview.component';
import { Projects } from './components/projects/overview.projects.component';
import { Sprints } from './components/sprints/overview.sprints.component';
import { routing } from './overview.routing';
import { SprintList } from './components/sprints/list/overview.sprints.list.component';
import { Commands } from './components/commands/overview.commands.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    Overview,
    Projects,
    Sprints,
    Commands,
    SprintList
  ]
})

export class OverviewModule {}