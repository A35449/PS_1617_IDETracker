
import{Injectable} from '@angular/core';

import{Http,Response} from '@angular/http';

import{ProjectService} from '../model/project/project.service';

import{ProjectModel} from '../model/project/project.model';

@Injectable()
export class DALService{
    constructor(private http: Http, private projectService : ProjectService){}

    // getProjects(){
    //     return this.http.get('localhost:3403/api/projects')
    //         .subscribe(
    //             (response : Response) => {
    //                 const projects : ProjectModel[] = response.json();
    //                 this.projectService.setProjects(projects);
    //             }
    //         )
    // }
} 