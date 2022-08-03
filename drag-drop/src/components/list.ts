import { DragTarget } from "../models/drag";
import { Project, ProjectStatus } from "../models/project";
import { prjState } from "../state/state";
import Component from "./base";
import { Item } from "./item";

export class List extends Component<HTMLDivElement, HTMLElement> implements DragTarget {
    assignedProjects: Project[];

    constructor(private type: 'active' | 'finished') {
        super('list', 'app', false, `${type}-projects`);
        this.assignedProjects = [];
        this.configure();
        this.contentRender();
    }

    dragOverHandler = (event: DragEvent) => {
        console.log('dragOverHandler ', event);
        if(event.dataTransfer && event.dataTransfer.types[0] === 'text/plain'){
            event.preventDefault();
            const listEl = this.element.querySelector('ul')!;
            listEl.classList.add('droppable');
        }
    }

    dropHandler = (event: DragEvent) => {
        console.log('dropHandler ', event);
        const prjId = event.dataTransfer!.getData('text/plain');
        prjState.moveProject(prjId, this.type === 'active' ? ProjectStatus.Active : ProjectStatus.Finished)
    }

    dragLeaveHandler = (_: DragEvent) => {
        console.log('dragLeaveHandler')
        const listEl = this.element.querySelector('ul');
        listEl?.classList.remove('droppable');
    }

    configure(){
        this.element.addEventListener('dragover', this.dragOverHandler);
        this.element.addEventListener('dragleave', this.dragLeaveHandler);
        this.element.addEventListener('drop', this.dropHandler);
        prjState.addListener((projects: Project[]) => {
            const relProjects = projects.filter(prj => this.type === 'active' ? prj.status === ProjectStatus.Active : prj.status == ProjectStatus.Finished)
            this.assignedProjects = relProjects;
            this.projectsRender();
        })
    }

    private projectsRender() {
        const listEl = <HTMLUListElement>document.getElementById(`${this.type}-projects-list`);
        listEl.innerHTML = '';
        for(const prjItem of this.assignedProjects){
            new Item(this.element.querySelector('ul')!.id, prjItem)
        }
    }

    contentRender(){
        const listId = `${this.type}-projects-list`;
        this.element.querySelector('ul')!.id = listId;
        this.element.querySelector('h2')!.innerText = `${this.type.toUpperCase()} PROJECTS`
    }
}