export class List{

    id:number;
    name:string;
    due_date:string;
    description:string;

}

export class Task{
    id:number;
    name:string;
    idList:number;
    status:boolean;
}