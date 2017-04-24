import { Routes, RouterModule }  from '@angular/router';

import { Overview } from './overview.component';
import { Projects } from './components/projects/overview.projects.component';
import { Sprints } from './components/sprints/overview.sprints.component';
import { ContextualTable } from '../tables/components/basicTables/components/contextualTable';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Overview,
    children: [
      { path: 'projects', component: Projects },
      { path: 'sprints', component: Sprints }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
