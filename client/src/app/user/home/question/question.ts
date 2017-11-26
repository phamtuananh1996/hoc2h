export class Question {
    user:number;
    Category:number;
    title:string;
    body:string;
    votes:[string];
    is_resolved:boolean;
    views:number;
    answers:[string];
    tags:[string];
    followers:[string];
    state:number;
    created: { type:Date}
}