import { Server } from "socket.io";
export class IOManager{
    private static io:Server;
    private static instance:IOManager
    public static getInstance(io:Server){
        if (this.instance){
            this.instance=new IOManager()
        }
        return this.instance
    }
}