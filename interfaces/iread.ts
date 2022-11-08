export interface IRead<T>{
    find(item:T):Promise<any[]>
    findAll():Promise<any[]>
    findOne(id:string):Promise<any>
}