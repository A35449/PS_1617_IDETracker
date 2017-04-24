 import { ProjectModel } from './project.model';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProjectService {

    constructor (
        private http: Http
    ) {}

    // setProjects(_projects : ProjectModel[]){
    //     this.projects = _projects;
    // }

    public getProjects(){

            return this.http.get(`http://localhost:3403/api/projects`)
        .map((res:Response) => res.json());
    }

    // Add(id : number, name : string){
    //     this.projects.push({Id : id , Name : name});
    // }

    // Update(id : number, name : string){
    //     this.projects[id].Id = id;
    //     this.projects[id].Name = name;
    // }
}
