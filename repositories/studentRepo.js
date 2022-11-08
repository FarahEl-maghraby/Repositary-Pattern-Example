"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.StudentRepo = void 0;
var BaseRepository_1 = require("./BaseRepository");
// now, we have all code implementation from BaseRepository
var StudentRepo = /** @class */ (function (_super) {
    __extends(StudentRepo, _super);
    function StudentRepo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // bama ano extends fa msh ma7tag a3ml constructor
    // here, we can create all especific stuffs of Spartan Repository
    StudentRepo.prototype.countOfDoc = function () {
        return this.collection.countDocuments({});
    };
    return StudentRepo;
}(BaseRepository_1.BaseRepository));
exports.StudentRepo = StudentRepo;
