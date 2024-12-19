"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.User = void 0;
var typeorm_1 = require("typeorm");
var User = /** @class */ (function () {
    function User() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], User.prototype, "user_id");
    __decorate([
        typeorm_1.Column({ length: 50, nullable: true })
    ], User.prototype, "username");
    __decorate([
        typeorm_1.Column({ length: 20, nullable: true })
    ], User.prototype, "phone_number");
    __decorate([
        typeorm_1.Column({ length: 100, nullable: true })
    ], User.prototype, "reset_question");
    __decorate([
        typeorm_1.Column({ length: 100, nullable: true })
    ], User.prototype, "reset_answer");
    __decorate([
        typeorm_1.Column({ nullable: true })
    ], User.prototype, "department_id");
    __decorate([
        typeorm_1.Column({ length: 50, nullable: true })
    ], User.prototype, "login_account");
    __decorate([
        typeorm_1.Column({ length: 100, nullable: true })
    ], User.prototype, "login_password");
    __decorate([
        typeorm_1.Column({ nullable: true })
    ], User.prototype, "last_login_time");
    __decorate([
        typeorm_1.Column({ length: 50, nullable: true })
    ], User.prototype, "login_ip");
    __decorate([
        typeorm_1.Column({ nullable: true })
    ], User.prototype, "created_by");
    __decorate([
        typeorm_1.Column({ nullable: true })
    ], User.prototype, "updated_by");
    __decorate([
        typeorm_1.Column({ type: 'timestamp', "default": function () { return 'CURRENT_TIMESTAMP'; } })
    ], User.prototype, "created_time");
    __decorate([
        typeorm_1.Column({ type: 'timestamp', "default": function () { return 'CURRENT_TIMESTAMP'; }, onUpdate: 'CURRENT_TIMESTAMP' })
    ], User.prototype, "updated_time");
    __decorate([
        typeorm_1.Column({ type: 'tinyint', "default": 0 })
    ], User.prototype, "deleted");
    __decorate([
        typeorm_1.Column({ type: 'tinyint', "default": 1 })
    ], User.prototype, "status");
    User = __decorate([
        typeorm_1.Entity('sys_user')
    ], User);
    return User;
}());
exports.User = User;
