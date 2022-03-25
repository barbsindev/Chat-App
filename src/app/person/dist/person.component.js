"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var PersonComponent = /** @class */ (function () {
    function PersonComponent(messageService) {
        this.messageService = messageService;
        this.textarea = '';
    }
    PersonComponent.prototype.ngOnInit = function () { };
    PersonComponent.prototype.sendMessage = function () {
        this.messageService.sendMessage({
            personNumber: [this.index === 0 ? 1 : this.index && this.index + 1],
            message: [this.textarea]
        });
        this.textarea = '';
    };
    __decorate([
        core_1.Input()
    ], PersonComponent.prototype, "index");
    PersonComponent = __decorate([
        core_1.Component({
            selector: 'app-person',
            templateUrl: './person.component.html',
            styleUrls: ['./person.component.scss']
        })
    ], PersonComponent);
    return PersonComponent;
}());
exports.PersonComponent = PersonComponent;

//# sourceMappingURL=person.component.js.map
