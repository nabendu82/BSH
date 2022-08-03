enum ProjectStatus {
    Active,
    Finished
}

class Project{
    constructor(public id: string, public title: string, public description: string, public people: number, public status: ProjectStatus){}
}

type Listener = (items: Project[]) => void;

class State {
    private listeners: Listener[] = [];
    private projects: Project[] = [];
    private static instance: State;
    private constructor() {}
    static getInstance() {
        if(this.instance) return this.instance;
        this.instance = new State();
        return this.instance;
    }

    addListener(listenerFn: Listener){
        this.listeners.push(listenerFn)
    }

    addProject(title: string, desc: string, nums: number){
        const newProject = new Project(Math.random().toString(),
            title, desc, nums, ProjectStatus.Active)
        this.projects.push(newProject);
        for(const listenerFn of this.listeners){
            listenerFn(this.projects.slice())
        }
    }
}

const prjState = State.getInstance();

//Base class
abstract class Component<T extends HTMLElement, U extends HTMLElement>{
    templateElem: HTMLTemplateElement;
    renderElem: T;
    element: U;

    constructor(templateId: string, renderElemId: string, insertAtStart: boolean, newElemId?: string) {
        this.templateElem = document.querySelector(templateId)! as HTMLTemplateElement;
        this.renderElem = document.querySelector(renderElemId)! as T;
        const imported = document.importNode(this.templateElem.content, true);
        this.element = imported.firstElementChild as U;
        if(newElemId) this.element.id = newElemId
        this.attach(insertAtStart);
    }

    private attach(insert: boolean){
        this.renderElem.insertAdjacentElement(insert ? 'afterbegin' : 'beforeend', this.element);
    }

    abstract configure(): void;
    abstract contentRender(): void;
}

class List extends Component<HTMLDivElement, HTMLElement> {
    assignedProjects: Project[];

    constructor(private type: 'active' | 'finished') {
        super('list', 'app', false, `${type}-projects`);
        this.assignedProjects = [];
        this.configure();
        this.contentRender();
    }

    configure(){
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
            const listItem = document.createElement('li');
            listItem.textContent = prjItem.title;
            listEl.appendChild(listItem);
        }
    }

    contentRender(){
        const listId = `${this.type}-projects-list`;
        this.element.querySelector('ul')!.id = listId;
        this.element.querySelector('h2')!.innerText = `${this.type.toUpperCase()} PROJECTS`
    }
}

class Input extends Component<HTMLDivElement, HTMLFormElement>{
    titleElem: HTMLInputElement;
    descElem: HTMLInputElement;
    peopleElem: HTMLInputElement;

    constructor() {
        super('project', 'app', true, 'user-input');
        this.titleElem = <HTMLInputElement>this.element.querySelector('#title');
        this.descElem = <HTMLInputElement>this.element.querySelector('#description');
        this.peopleElem = <HTMLInputElement>this.element.querySelector('#people');
        this.configure();
    }

    configure(){
        this.element.addEventListener('submit', e => {
            e.preventDefault();
            let userInput: [string, string, number] = [this.titleElem.value, this.descElem.value, +this.peopleElem.value];
            const [title, desc, people] = userInput;
            prjState.addProject(title, desc, people);
            this.titleElem.value = '';
            this.descElem.value = '';
            this.peopleElem.value = '';
        })
    }

    contentRender(){}
}

const projInput = new Input();
const activeList = new List('active');
const finishedList = new List('finished');