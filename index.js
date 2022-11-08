"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
// importing mongoClient to connect at mongodb
var mongodb_1 = require("mongodb");
var studentRepo_1 = require("./repositories/studentRepo");
var student_1 = require("./entities/student");
var teacherRepo_1 = require("./repositories/teacherRepo");
var teacher_1 = require("./entities/teacher");
// creating a function that execute self runs
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var connection, db, studentRepository, doc, result, students, allStudents, student, studentDel, studentUpate, count, docTeacher, teacherRepository, resultTeacher;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, mongodb_1.MongoClient.connect('mongodb://localhost')];
            case 1:
                connection = _a.sent();
                db = connection.db('usersDB');
                studentRepository = new studentRepo_1.StudentRepo(db, 'students');
                doc = new student_1.Student('Omar', 15);
                return [4 /*yield*/, studentRepository.create(doc)];
            case 2:
                result = _a.sent();
                console.log(result);
                console.log("Doc inserted with ".concat(result ? 'success' : 'fail'));
                return [4 /*yield*/, studentRepository.find({ age: 15 })];
            case 3:
                students = _a.sent();
                console.log(students);
                return [4 /*yield*/, studentRepository.findAll()];
            case 4:
                allStudents = _a.sent();
                console.log(allStudents);
                return [4 /*yield*/, studentRepository.findOne('636aa5f5f08a047d820253f2')];
            case 5:
                student = _a.sent();
                console.log(student);
                return [4 /*yield*/, studentRepository["delete"]('636aa6dc6c12efff5ff5ae05')];
            case 6:
                studentDel = _a.sent();
                console.log(studentDel);
                return [4 /*yield*/, studentRepository.update('636aa698630dffe5c11a5e8b', { name: 'osamaaa', age: 5 })];
            case 7:
                studentUpate = _a.sent();
                console.log(studentUpate);
                return [4 /*yield*/, studentRepository.countOfDoc()];
            case 8:
                count = _a.sent();
                console.log("the count of spartans is ".concat(count));
                docTeacher = new teacher_1.Teacher('Amr', 'english', 35);
                teacherRepository = new teacherRepo_1.TeacherRepo(db, 'teachers');
                return [4 /*yield*/, teacherRepository.create(docTeacher)];
            case 9:
                resultTeacher = _a.sent();
                console.log(resultTeacher);
                console.log("Doc inserted with ".concat(result ? 'success' : 'fail'));
                return [2 /*return*/];
        }
    });
}); })();
