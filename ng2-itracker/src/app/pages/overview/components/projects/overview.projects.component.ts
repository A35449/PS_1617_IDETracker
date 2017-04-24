import {Component, OnInit} from '@angular/core';

import {DALService} from '../../../../services/DAL.service';

import { ProjectModel } from '../../../../model/project/project.model';

import { ProjectService } from '../../../../model/project/project.service';

@Component({
  selector: 'projects',
  templateUrl: './overview.projects.html',
  providers: [DALService, ProjectService]
})

export class Projects implements OnInit{

  projectList : ProjectModel[] = [];
  
  constructor(private dalService : DALService, private projectService : ProjectService){}
  
  ngOnInit(){
    this.projectService.getProjects().subscribe( (data : ProjectModel[] ) => { this.projectList = data;  console.log(data);});
  }

}