"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebaseController = void 0;
const common_1 = require("@nestjs/common");
const firebase_service_1 = require("./firebase.service");
let FirebaseController = class FirebaseController {
    constructor(firebaseService) {
        this.firebaseService = firebaseService;
    }
    async sendMessageToTopic(data) {
        const result = await this.firebaseService.sendMessageToTopic(data.topic, data.title, data.message);
        return {
            data: result,
            errorCode: 0,
            message: 'Success',
            errors: [],
        };
    }
    async subscribeToTopic(data) {
        const result = await this.firebaseService.subscribeMessage(data.token, data.topic);
        return {
            data: result,
            errorCode: 0,
            message: 'Success',
            errors: [],
        };
    }
    async unsubscribeToTopic(data) {
        const result = await this.firebaseService.unsubscribeMessage(data.token, data.topic);
        return {
            data: result,
            errorCode: 0,
            message: 'Success',
            errors: [],
        };
    }
};
__decorate([
    (0, common_1.Post)('message'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FirebaseController.prototype, "sendMessageToTopic", null);
__decorate([
    (0, common_1.Post)('subscribe'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FirebaseController.prototype, "subscribeToTopic", null);
__decorate([
    (0, common_1.Post)('unsubscribe'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FirebaseController.prototype, "unsubscribeToTopic", null);
FirebaseController = __decorate([
    (0, common_1.Controller)('firebase'),
    __metadata("design:paramtypes", [firebase_service_1.FirebaseService])
], FirebaseController);
exports.FirebaseController = FirebaseController;
//# sourceMappingURL=firebase.controller.js.map