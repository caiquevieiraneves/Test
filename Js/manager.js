const Vaults = {}
function Lock(Name){
    if(Vaults[Name]){
        return true
    }
    return false
}
export class Manager{
    static set(Name){
        if(Lock(Name)){console.error(`"${Name}" Duplicado`); return;}
        Vaults[Name] = {Value:0}
        return 1;
    }
    static getraw(){
        return Vaults
    }
}