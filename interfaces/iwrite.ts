// T here is repalced by actual time whne calling the function
export interface IWrite<T>{
create(item:T):Promise<boolean>
update(id:string,item:T):Promise<boolean>
delete(id:string):Promise<boolean>
}