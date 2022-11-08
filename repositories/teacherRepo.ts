import { BaseRepository } from "./BaseRepository";
import { Teacher } from "../entities/teacher"

// now, we have all code implementation from BaseRepository
export class TeacherRepo extends BaseRepository<Teacher>{

    // here, we can create all especific stuffs of teacher Repository
    countOfDoc(): Promise<number> {
        return this.collection.countDocuments({})
    }
}