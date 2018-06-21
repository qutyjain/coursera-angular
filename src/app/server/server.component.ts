import { Component } from "@angular/core";

@Component({
    selector : 'app-server',
    templateUrl : './server.component.html',
    styles: [`
        .fifthElement{
        background-color: purple;
    }
    `]
})
export class ServerComponent{
    userName:String = "test";
    isNameEmpty = false;
    paratext = "***";
    paraArray = ["***"];
    abc= true;

    onStringChange (){
        this.isNameEmpty = this.userName.length <1 || this.userName == "" ;
    }
    resetName(){
        this.userName = "";
        this.onStringChange();
    }

    toggleParagraphText(){
        this.paratext = this.paratext.includes("***") ? "Password = TUNA" : "***";
        this.paraArray.push(this.paratext);
         }
    }