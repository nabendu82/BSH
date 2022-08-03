/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/base.ts":
/*!********************************!*\
  !*** ./src/components/base.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Component)
/* harmony export */ });
//Base class
class Component {
    constructor(templateId, renderElemId, insertAtStart, newElemId) {
        this.templateElem = document.getElementById(templateId);
        this.renderElem = document.getElementById(renderElemId);
        const importedNode = document.importNode(this.templateElem.content, true);
        this.element = importedNode.firstElementChild;
        if (newElemId)
            this.element.id = newElemId;
        this.attach(insertAtStart);
    }
    attach(insert) {
        this.renderElem.insertAdjacentElement(insert ? 'afterbegin' : 'beforeend', this.element);
    }
}


/***/ }),

/***/ "./src/components/input.ts":
/*!*********************************!*\
  !*** ./src/components/input.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Input": () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/state */ "./src/state/state.ts");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./src/components/base.ts");


class Input extends _base__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor() {
        super('project', 'app', true, 'user-input');
        this.titleElem = this.element.querySelector('#title');
        this.descElem = this.element.querySelector('#description');
        this.peopleElem = this.element.querySelector('#people');
        this.configure();
    }
    configure() {
        this.element.addEventListener('submit', e => {
            e.preventDefault();
            let userInput = [this.titleElem.value, this.descElem.value, +this.peopleElem.value];
            const [title, desc, people] = userInput;
            _state_state__WEBPACK_IMPORTED_MODULE_0__.prjState.addProject(title, desc, people);
            this.titleElem.value = '';
            this.descElem.value = '';
            this.peopleElem.value = '';
        });
    }
    contentRender() { }
}


/***/ }),

/***/ "./src/components/item.ts":
/*!********************************!*\
  !*** ./src/components/item.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Item": () => (/* binding */ Item)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/components/base.ts");

class Item extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(hostId, project) {
        super('single', hostId, false, project.id);
        this.dragStartHandler = (event) => {
            console.log('DragStart', event);
            event.dataTransfer.setData('text/plain', this.project.id);
            event.dataTransfer.effectAllowed = 'move';
        };
        this.dragEndHandler = (event) => {
            console.log('DragEnd', event);
        };
        this.project = project;
        this.configure();
        this.contentRender();
    }
    get persons() {
        return this.project.people === 1 ? '1 person' : `${this.project.people} persons`;
    }
    configure() {
        this.element.addEventListener('dragstart', this.dragStartHandler);
        this.element.addEventListener('dragend', this.dragEndHandler);
    }
    contentRender() {
        this.element.querySelector('h2').innerText = this.project.title;
        this.element.querySelector('h3').innerText = this.persons + ' assigned';
        this.element.querySelector('p').innerText = this.project.description;
    }
}


/***/ }),

/***/ "./src/components/list.ts":
/*!********************************!*\
  !*** ./src/components/list.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "List": () => (/* binding */ List)
/* harmony export */ });
/* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/project */ "./src/models/project.ts");
/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/state */ "./src/state/state.ts");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ "./src/components/base.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item */ "./src/components/item.ts");




class List extends _base__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor(type) {
        super('list', 'app', false, `${type}-projects`);
        this.type = type;
        this.dragOverHandler = (event) => {
            console.log('dragOverHandler ', event);
            if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
                event.preventDefault();
                const listEl = this.element.querySelector('ul');
                listEl.classList.add('droppable');
            }
        };
        this.dropHandler = (event) => {
            console.log('dropHandler ', event);
            const prjId = event.dataTransfer.getData('text/plain');
            _state_state__WEBPACK_IMPORTED_MODULE_1__.prjState.moveProject(prjId, this.type === 'active' ? _models_project__WEBPACK_IMPORTED_MODULE_0__.ProjectStatus.Active : _models_project__WEBPACK_IMPORTED_MODULE_0__.ProjectStatus.Finished);
        };
        this.dragLeaveHandler = (_) => {
            console.log('dragLeaveHandler');
            const listEl = this.element.querySelector('ul');
            listEl === null || listEl === void 0 ? void 0 : listEl.classList.remove('droppable');
        };
        this.assignedProjects = [];
        this.configure();
        this.contentRender();
    }
    configure() {
        this.element.addEventListener('dragover', this.dragOverHandler);
        this.element.addEventListener('dragleave', this.dragLeaveHandler);
        this.element.addEventListener('drop', this.dropHandler);
        _state_state__WEBPACK_IMPORTED_MODULE_1__.prjState.addListener((projects) => {
            const relProjects = projects.filter(prj => this.type === 'active' ? prj.status === _models_project__WEBPACK_IMPORTED_MODULE_0__.ProjectStatus.Active : prj.status == _models_project__WEBPACK_IMPORTED_MODULE_0__.ProjectStatus.Finished);
            this.assignedProjects = relProjects;
            this.projectsRender();
        });
    }
    projectsRender() {
        const listEl = document.getElementById(`${this.type}-projects-list`);
        listEl.innerHTML = '';
        for (const prjItem of this.assignedProjects) {
            new _item__WEBPACK_IMPORTED_MODULE_3__.Item(this.element.querySelector('ul').id, prjItem);
        }
    }
    contentRender() {
        const listId = `${this.type}-projects-list`;
        this.element.querySelector('ul').id = listId;
        this.element.querySelector('h2').innerText = `${this.type.toUpperCase()} PROJECTS`;
    }
}


/***/ }),

/***/ "./src/models/project.ts":
/*!*******************************!*\
  !*** ./src/models/project.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "ProjectStatus": () => (/* binding */ ProjectStatus)
/* harmony export */ });
var ProjectStatus;
(function (ProjectStatus) {
    ProjectStatus[ProjectStatus["Active"] = 0] = "Active";
    ProjectStatus[ProjectStatus["Finished"] = 1] = "Finished";
})(ProjectStatus || (ProjectStatus = {}));
class Project {
    constructor(id, title, description, people, status) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.people = people;
        this.status = status;
    }
}


/***/ }),

/***/ "./src/state/state.ts":
/*!****************************!*\
  !*** ./src/state/state.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "State": () => (/* binding */ State),
/* harmony export */   "prjState": () => (/* binding */ prjState)
/* harmony export */ });
/* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/project */ "./src/models/project.ts");

class ListenerState {
    constructor() {
        this.listeners = [];
    }
    addListener(listenerFn) {
        this.listeners.push(listenerFn);
    }
}
class State extends ListenerState {
    constructor() {
        super();
        this.projects = [];
    }
    static getInstance() {
        if (this.instance)
            return this.instance;
        this.instance = new State();
        return this.instance;
    }
    addProject(title, desc, nums) {
        const newProject = new _models_project__WEBPACK_IMPORTED_MODULE_0__.Project(Math.random().toString(), title, desc, nums, _models_project__WEBPACK_IMPORTED_MODULE_0__.ProjectStatus.Active);
        this.projects.push(newProject);
        this.updateListeners();
    }
    moveProject(projectId, newStatus) {
        const project = this.projects.find(prj => prj.id === projectId);
        if (project && project.status !== newStatus) {
            project.status = newStatus;
            this.updateListeners();
        }
    }
    updateListeners() {
        for (const listenerFn of this.listeners) {
            listenerFn(this.projects.slice());
        }
    }
}
const prjState = State.getInstance();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/input */ "./src/components/input.ts");
/* harmony import */ var _components_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/list */ "./src/components/list.ts");


new _components_input__WEBPACK_IMPORTED_MODULE_0__.Input();
new _components_list__WEBPACK_IMPORTED_MODULE_1__.List('active');
new _components_list__WEBPACK_IMPORTED_MODULE_1__.List('finished');

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2QwQztBQUNYO0FBQ3hCLG9CQUFvQiw2Q0FBUztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDZEQUFtQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEIrQjtBQUN4QixtQkFBbUIsNkNBQVM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELHFCQUFxQjtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJrRDtBQUNSO0FBQ1g7QUFDRDtBQUN2QixtQkFBbUIsNkNBQVM7QUFDbkM7QUFDQSx1Q0FBdUMsS0FBSztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDhEQUFvQixpQ0FBaUMsaUVBQW9CLEdBQUcsbUVBQXNCO0FBQzlHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDhEQUFvQjtBQUM1QiwrRkFBK0YsaUVBQW9CLGlCQUFpQixtRUFBc0I7QUFDMUo7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0Esa0RBQWtELFVBQVU7QUFDNUQ7QUFDQTtBQUNBLGdCQUFnQix1Q0FBSTtBQUNwQjtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsVUFBVTtBQUNwQztBQUNBLHdEQUF3RCx5QkFBeUI7QUFDakY7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BETztBQUNQO0FBQ0E7QUFDQTtBQUNBLENBQUMsc0NBQXNDO0FBQ2hDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiMkQ7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixvREFBTyw4Q0FBOEMsaUVBQW9CO0FBQ3hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087Ozs7Ozs7VUN0Q1A7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOMkM7QUFDRjtBQUN6QyxJQUFJLG9EQUFLO0FBQ1QsSUFBSSxrREFBSTtBQUNSLElBQUksa0RBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcmFnLWRyb3AvLi9zcmMvY29tcG9uZW50cy9iYXNlLnRzIiwid2VicGFjazovL2RyYWctZHJvcC8uL3NyYy9jb21wb25lbnRzL2lucHV0LnRzIiwid2VicGFjazovL2RyYWctZHJvcC8uL3NyYy9jb21wb25lbnRzL2l0ZW0udHMiLCJ3ZWJwYWNrOi8vZHJhZy1kcm9wLy4vc3JjL2NvbXBvbmVudHMvbGlzdC50cyIsIndlYnBhY2s6Ly9kcmFnLWRyb3AvLi9zcmMvbW9kZWxzL3Byb2plY3QudHMiLCJ3ZWJwYWNrOi8vZHJhZy1kcm9wLy4vc3JjL3N0YXRlL3N0YXRlLnRzIiwid2VicGFjazovL2RyYWctZHJvcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kcmFnLWRyb3Avd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2RyYWctZHJvcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2RyYWctZHJvcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2RyYWctZHJvcC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL0Jhc2UgY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHRlbXBsYXRlSWQsIHJlbmRlckVsZW1JZCwgaW5zZXJ0QXRTdGFydCwgbmV3RWxlbUlkKSB7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZUVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0ZW1wbGF0ZUlkKTtcclxuICAgICAgICB0aGlzLnJlbmRlckVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChyZW5kZXJFbGVtSWQpO1xyXG4gICAgICAgIGNvbnN0IGltcG9ydGVkTm9kZSA9IGRvY3VtZW50LmltcG9ydE5vZGUodGhpcy50ZW1wbGF0ZUVsZW0uY29udGVudCwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gaW1wb3J0ZWROb2RlLmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgICAgIGlmIChuZXdFbGVtSWQpXHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5pZCA9IG5ld0VsZW1JZDtcclxuICAgICAgICB0aGlzLmF0dGFjaChpbnNlcnRBdFN0YXJ0KTtcclxuICAgIH1cclxuICAgIGF0dGFjaChpbnNlcnQpIHtcclxuICAgICAgICB0aGlzLnJlbmRlckVsZW0uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KGluc2VydCA/ICdhZnRlcmJlZ2luJyA6ICdiZWZvcmVlbmQnLCB0aGlzLmVsZW1lbnQpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IHByalN0YXRlIH0gZnJvbSBcIi4uL3N0YXRlL3N0YXRlXCI7XHJcbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vYmFzZVwiO1xyXG5leHBvcnQgY2xhc3MgSW5wdXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ3Byb2plY3QnLCAnYXBwJywgdHJ1ZSwgJ3VzZXItaW5wdXQnKTtcclxuICAgICAgICB0aGlzLnRpdGxlRWxlbSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKTtcclxuICAgICAgICB0aGlzLmRlc2NFbGVtID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpO1xyXG4gICAgICAgIHRoaXMucGVvcGxlRWxlbSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjcGVvcGxlJyk7XHJcbiAgICAgICAgdGhpcy5jb25maWd1cmUoKTtcclxuICAgIH1cclxuICAgIGNvbmZpZ3VyZSgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgbGV0IHVzZXJJbnB1dCA9IFt0aGlzLnRpdGxlRWxlbS52YWx1ZSwgdGhpcy5kZXNjRWxlbS52YWx1ZSwgK3RoaXMucGVvcGxlRWxlbS52YWx1ZV07XHJcbiAgICAgICAgICAgIGNvbnN0IFt0aXRsZSwgZGVzYywgcGVvcGxlXSA9IHVzZXJJbnB1dDtcclxuICAgICAgICAgICAgcHJqU3RhdGUuYWRkUHJvamVjdCh0aXRsZSwgZGVzYywgcGVvcGxlKTtcclxuICAgICAgICAgICAgdGhpcy50aXRsZUVsZW0udmFsdWUgPSAnJztcclxuICAgICAgICAgICAgdGhpcy5kZXNjRWxlbS52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICB0aGlzLnBlb3BsZUVsZW0udmFsdWUgPSAnJztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNvbnRlbnRSZW5kZXIoKSB7IH1cclxufVxyXG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL2Jhc2VcIjtcclxuZXhwb3J0IGNsYXNzIEl0ZW0gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoaG9zdElkLCBwcm9qZWN0KSB7XHJcbiAgICAgICAgc3VwZXIoJ3NpbmdsZScsIGhvc3RJZCwgZmFsc2UsIHByb2plY3QuaWQpO1xyXG4gICAgICAgIHRoaXMuZHJhZ1N0YXJ0SGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRHJhZ1N0YXJ0JywgZXZlbnQpO1xyXG4gICAgICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9wbGFpbicsIHRoaXMucHJvamVjdC5pZCk7XHJcbiAgICAgICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gJ21vdmUnO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5kcmFnRW5kSGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRHJhZ0VuZCcsIGV2ZW50KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XHJcbiAgICAgICAgdGhpcy5jb25maWd1cmUoKTtcclxuICAgICAgICB0aGlzLmNvbnRlbnRSZW5kZXIoKTtcclxuICAgIH1cclxuICAgIGdldCBwZXJzb25zKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3QucGVvcGxlID09PSAxID8gJzEgcGVyc29uJyA6IGAke3RoaXMucHJvamVjdC5wZW9wbGV9IHBlcnNvbnNgO1xyXG4gICAgfVxyXG4gICAgY29uZmlndXJlKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLmRyYWdTdGFydEhhbmRsZXIpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5kcmFnRW5kSGFuZGxlcik7XHJcbiAgICB9XHJcbiAgICBjb250ZW50UmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdoMicpLmlubmVyVGV4dCA9IHRoaXMucHJvamVjdC50aXRsZTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignaDMnKS5pbm5lclRleHQgPSB0aGlzLnBlcnNvbnMgKyAnIGFzc2lnbmVkJztcclxuICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcigncCcpLmlubmVyVGV4dCA9IHRoaXMucHJvamVjdC5kZXNjcmlwdGlvbjtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBQcm9qZWN0U3RhdHVzIH0gZnJvbSBcIi4uL21vZGVscy9wcm9qZWN0XCI7XHJcbmltcG9ydCB7IHByalN0YXRlIH0gZnJvbSBcIi4uL3N0YXRlL3N0YXRlXCI7XHJcbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vYmFzZVwiO1xyXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vaXRlbVwiO1xyXG5leHBvcnQgY2xhc3MgTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0eXBlKSB7XHJcbiAgICAgICAgc3VwZXIoJ2xpc3QnLCAnYXBwJywgZmFsc2UsIGAke3R5cGV9LXByb2plY3RzYCk7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLmRyYWdPdmVySGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZHJhZ092ZXJIYW5kbGVyICcsIGV2ZW50KTtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGFUcmFuc2ZlciAmJiBldmVudC5kYXRhVHJhbnNmZXIudHlwZXNbMF0gPT09ICd0ZXh0L3BsYWluJykge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxpc3RFbCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCd1bCcpO1xyXG4gICAgICAgICAgICAgICAgbGlzdEVsLmNsYXNzTGlzdC5hZGQoJ2Ryb3BwYWJsZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmRyb3BIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkcm9wSGFuZGxlciAnLCBldmVudCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHByaklkID0gZXZlbnQuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQvcGxhaW4nKTtcclxuICAgICAgICAgICAgcHJqU3RhdGUubW92ZVByb2plY3QocHJqSWQsIHRoaXMudHlwZSA9PT0gJ2FjdGl2ZScgPyBQcm9qZWN0U3RhdHVzLkFjdGl2ZSA6IFByb2plY3RTdGF0dXMuRmluaXNoZWQpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5kcmFnTGVhdmVIYW5kbGVyID0gKF8pID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2RyYWdMZWF2ZUhhbmRsZXInKTtcclxuICAgICAgICAgICAgY29uc3QgbGlzdEVsID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsJyk7XHJcbiAgICAgICAgICAgIGxpc3RFbCA9PT0gbnVsbCB8fCBsaXN0RWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGxpc3RFbC5jbGFzc0xpc3QucmVtb3ZlKCdkcm9wcGFibGUnKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuYXNzaWduZWRQcm9qZWN0cyA9IFtdO1xyXG4gICAgICAgIHRoaXMuY29uZmlndXJlKCk7XHJcbiAgICAgICAgdGhpcy5jb250ZW50UmVuZGVyKCk7XHJcbiAgICB9XHJcbiAgICBjb25maWd1cmUoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5kcmFnT3ZlckhhbmRsZXIpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCB0aGlzLmRyYWdMZWF2ZUhhbmRsZXIpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5kcm9wSGFuZGxlcik7XHJcbiAgICAgICAgcHJqU3RhdGUuYWRkTGlzdGVuZXIoKHByb2plY3RzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlbFByb2plY3RzID0gcHJvamVjdHMuZmlsdGVyKHByaiA9PiB0aGlzLnR5cGUgPT09ICdhY3RpdmUnID8gcHJqLnN0YXR1cyA9PT0gUHJvamVjdFN0YXR1cy5BY3RpdmUgOiBwcmouc3RhdHVzID09IFByb2plY3RTdGF0dXMuRmluaXNoZWQpO1xyXG4gICAgICAgICAgICB0aGlzLmFzc2lnbmVkUHJvamVjdHMgPSByZWxQcm9qZWN0cztcclxuICAgICAgICAgICAgdGhpcy5wcm9qZWN0c1JlbmRlcigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcHJvamVjdHNSZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgbGlzdEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGhpcy50eXBlfS1wcm9qZWN0cy1saXN0YCk7XHJcbiAgICAgICAgbGlzdEVsLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIGZvciAoY29uc3QgcHJqSXRlbSBvZiB0aGlzLmFzc2lnbmVkUHJvamVjdHMpIHtcclxuICAgICAgICAgICAgbmV3IEl0ZW0odGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsJykuaWQsIHByakl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnRlbnRSZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgbGlzdElkID0gYCR7dGhpcy50eXBlfS1wcm9qZWN0cy1saXN0YDtcclxuICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcigndWwnKS5pZCA9IGxpc3RJZDtcclxuICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignaDInKS5pbm5lclRleHQgPSBgJHt0aGlzLnR5cGUudG9VcHBlckNhc2UoKX0gUFJPSkVDVFNgO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCB2YXIgUHJvamVjdFN0YXR1cztcclxuKGZ1bmN0aW9uIChQcm9qZWN0U3RhdHVzKSB7XHJcbiAgICBQcm9qZWN0U3RhdHVzW1Byb2plY3RTdGF0dXNbXCJBY3RpdmVcIl0gPSAwXSA9IFwiQWN0aXZlXCI7XHJcbiAgICBQcm9qZWN0U3RhdHVzW1Byb2plY3RTdGF0dXNbXCJGaW5pc2hlZFwiXSA9IDFdID0gXCJGaW5pc2hlZFwiO1xyXG59KShQcm9qZWN0U3RhdHVzIHx8IChQcm9qZWN0U3RhdHVzID0ge30pKTtcclxuZXhwb3J0IGNsYXNzIFByb2plY3Qge1xyXG4gICAgY29uc3RydWN0b3IoaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgcGVvcGxlLCBzdGF0dXMpIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLnBlb3BsZSA9IHBlb3BsZTtcclxuICAgICAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBQcm9qZWN0LCBQcm9qZWN0U3RhdHVzIH0gZnJvbSBcIi4uL21vZGVscy9wcm9qZWN0XCI7XHJcbmNsYXNzIExpc3RlbmVyU3RhdGUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcclxuICAgIH1cclxuICAgIGFkZExpc3RlbmVyKGxpc3RlbmVyRm4pIHtcclxuICAgICAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyRm4pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBTdGF0ZSBleHRlbmRzIExpc3RlbmVyU3RhdGUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnByb2plY3RzID0gW107XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2UpXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xyXG4gICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgU3RhdGUoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuICAgIH1cclxuICAgIGFkZFByb2plY3QodGl0bGUsIGRlc2MsIG51bXMpIHtcclxuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoTWF0aC5yYW5kb20oKS50b1N0cmluZygpLCB0aXRsZSwgZGVzYywgbnVtcywgUHJvamVjdFN0YXR1cy5BY3RpdmUpO1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUxpc3RlbmVycygpO1xyXG4gICAgfVxyXG4gICAgbW92ZVByb2plY3QocHJvamVjdElkLCBuZXdTdGF0dXMpIHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy5wcm9qZWN0cy5maW5kKHByaiA9PiBwcmouaWQgPT09IHByb2plY3RJZCk7XHJcbiAgICAgICAgaWYgKHByb2plY3QgJiYgcHJvamVjdC5zdGF0dXMgIT09IG5ld1N0YXR1cykge1xyXG4gICAgICAgICAgICBwcm9qZWN0LnN0YXR1cyA9IG5ld1N0YXR1cztcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVMaXN0ZW5lcnMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1cGRhdGVMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBsaXN0ZW5lckZuIG9mIHRoaXMubGlzdGVuZXJzKSB7XHJcbiAgICAgICAgICAgIGxpc3RlbmVyRm4odGhpcy5wcm9qZWN0cy5zbGljZSgpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IHByalN0YXRlID0gU3RhdGUuZ2V0SW5zdGFuY2UoKTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBJbnB1dCB9IGZyb20gXCIuL2NvbXBvbmVudHMvaW5wdXRcIjtcclxuaW1wb3J0IHsgTGlzdCB9IGZyb20gXCIuL2NvbXBvbmVudHMvbGlzdFwiO1xyXG5uZXcgSW5wdXQoKTtcclxubmV3IExpc3QoJ2FjdGl2ZScpO1xyXG5uZXcgTGlzdCgnZmluaXNoZWQnKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9