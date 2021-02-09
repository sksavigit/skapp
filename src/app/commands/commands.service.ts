
export class CommandsService {
  
  linuxCommands:  Array<string> = ['ls','rm','mkdir'];

     getCommands(){
      return this.linuxCommands;
    }
}
