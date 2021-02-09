import { CommandsService } from './commands.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.less']
})
export class CommandsComponent implements OnInit {

  title = "Lets check how good you are in typing.";
  //var commandInputValue;
  commands;
  commandInputValue="";
  commandInput="";
  wordsCount="";
  charCount="";
  sentencesCount="";
  constructor(service: CommandsService) { 
    this.commands = service.getCommands();
  }

  ngOnInit(){

  }
  
  onKeyUp(){
     this.findCount();
  }

  findCount(){
    this.charCount  = ""+this.commandInput.length;
  }

  onSave(){
    console.log("User clicked the button!");
  }

}
