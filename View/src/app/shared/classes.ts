export class List{

    id:number;
    name:string;
    dueDate:string;
    description:string;

}

export class Task{
    id:number;
    name:string;
    idList:number;
    status:boolean;
}