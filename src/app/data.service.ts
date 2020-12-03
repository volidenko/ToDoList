import {MyLogService} from "./my-log.service";
import {Injectable, Optional} from "@angular.core";
@Injectable

export class DataService{
    private data: string[]=["Aple iPhone 12","POCO 3","Samsung Note 20"];
    // (@Optional)
    constructor(private logger: MyLogService){}
    getData(){
        this.logger.logMessage("Операция получения данных");
        return this.data;
    }
    addItem(item:string){
        this.data.push(item);
        this.logger.logMessage("Операция добавления данных");
    }
}
