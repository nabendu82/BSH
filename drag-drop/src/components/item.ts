import { Draggable } from "../models/drag";
import { Project } from "../models/project";
import Component from "./base";

export class Item extends Component<HTMLUListElement, HTMLLIElement> implements Draggable{
    private project: Project;

    get persons(){
        return this.project.people === 1 ? '1 person' : `${this.project.people} persons`
    }

    constructor(hostId: string, project: Project){
        super('single', hostId, false, project.id);
        this.project = project;
        this.configure();
        this.contentRender();
    }

    dragStartHandler = (event: DragEvent) => {
        console.log('DragStart', event)
        event.dataTransfer!.setData('text/plain', this.project.id);
        event.dataTransfer!.effectAllowed = 'move';
    }

    dragEndHandler = (event: DragEvent) => {
        console.log('DragEnd', event)
    }

    configure() {
        this.element.addEventListener('dragstart', this.dragStartHandler);
        this.element.addEventListener('dragend', this.dragEndHandler);
    }
    contentRender() {
        this.element.querySelector('h2')!.innerText = this.project.title;
        this.element.querySelector('h3')!.innerText = this.persons + ' assigned';
        this.element.querySelector('p')!.innerText = this.project.description;
    }
}