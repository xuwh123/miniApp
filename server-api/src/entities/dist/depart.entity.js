"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Department = void 0;
var typeorm_1 = require("typeorm");
var Department = /** @class */ (function () {
    function Department() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], Department.prototype, "department_id");
    __decorate([
        typeorm_1.Column({
            name: 'department_name',
            type: 'varchar',
            length: 50,
            nullable: false
        })
    ], Department.prototype, "department_name");
    __decorate([
        typeorm_1.Column({ nullable: true })
    ], Department.prototype, "parent_id");
    __decorate([
        typeorm_1.Column({ nullable: true })
    ], Department.prototype, "created_by");
    __decorate([
        typeorm_1.Column({ nullable: true })
    ], Department.prototype, "updated_by");
    __decorate([
        typeorm_1.Column({
            type: 'timestamp',
            "default": function () { return 'CURRENT_TIMESTAMP'; }
        })
    ], Department.prototype, "created_time");
    __decorate([
        typeorm_1.Column({
            type: 'timestamp',
            "default": function () { return 'CURRENT_TIMESTAMP'; },
            onUpdate: 'CURRENT_TIMESTAMP'
        })
    ], Department.prototype, "updated_time");
    __decorate([
        typeorm_1.Column({ "default": 0 })
    ], Department.prototype, "deleted");
    __decorate([
        typeorm_1.Column({ "default": 1 })
    ], Department.prototype, "status");
    Department = __decorate([
        typeorm_1.Entity('sys_department')
    ], Department);
    return Department;
}());
exports.Department = Department;
