export class QuizManager{
    private roomId:string;
    private hasStarted:boolean;
    private quizzes:Quiz[];
    constructor(roomId:string){
        this.roomId=roomId
        this.hasStarted=false;

    }
    start (){
        this.hasStarted=true; 
    }

}