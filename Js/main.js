import {Manager} from "./manager.js"

Manager.set("Inter",{Value:0})
Manager.set("Wallet",{Value:0})

for(let i of Manager.getVaults()){
    console.log(i)
}