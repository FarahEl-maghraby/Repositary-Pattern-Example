import { BaseRepository } from "./BaseRepository";
import { Student } from "../entities/student"

// now, we have all code implementation from BaseRepository
export class StudentRepo extends BaseRepository<Student>{
    // bama ano extends fa msh ma7tag a3ml constructor
    // here, we can create all especific stuffs of Spartan Repository
    countOfDoc(): Promise<number> {
        return this.collection.countDocuments({})
    }
}