import { IRead } from "../interfaces/iread";
import { IWrite } from "../interfaces/iwrite";
// we imported all types from mongodb driver, to use in code
// npm i -S mongodb @types/mongodb
import { Db, Collection, ObjectId } from "mongodb";

// extended only
export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {
  public collection: Collection;

  constructor(db: Db, collectionName: string) {
    this.collection = db.collection(collectionName);
  }

  async create(item: any): Promise<any> {
    const result = await this.collection.insertOne(item);
    return result.insertedId;
  }

  async update(id: string, item: any): Promise<any> {
    const updateUser = await this.collection.updateMany(
      { _id: new ObjectId(id) },
      {
        $set: { name: item.name },
        $inc: { age: item.age },
      }
    );
    return updateUser.modifiedCount;
  }

  async delete(id: string): Promise<any> {
    const user = await this.collection.deleteOne({ _id: new ObjectId(id) });
    return user.deletedCount;
  }

  // find With filter
  async find(item: any): Promise<any[]> {
    const users = await this.collection.find({ age: item.age }).toArray();
    return users;
  }
  // find all
  async findAll(): Promise<any[]> {
    const allUsers = await this.collection.find({}).toArray();
    return allUsers;
  }
  async findOne(id: string): Promise<any> {
    const user = await this.collection.findOne({ _id: new ObjectId(id) });
    return user;
  }
}
