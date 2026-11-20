const Vaults = new Map();
const Tags = new Map();
export class Manager{
    static set(Name, Value){
        Vaults.set(Name,Value)
    }
    static getRange(Params){

    }
    static getMap(){
        return Vaults;
    }
    static getVaults(Params){
        return Vaults.keys();
    }
}