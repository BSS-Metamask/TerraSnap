import { nets } from '../terraNets/nets.js'
import { balanceURL } from './baseURL.js' 
import { getTerraAccount } from './getTerraAccount.js'

/**
 * @fun {JSON} getTerraAccountBalance()
 * @brief Returns the Terra acount balance
 * @author 1sand0s
 *
 * @return {JSON} Balance of the given wallet
 */
export async function getTerraAccountBalance(wallet, net){
    const terraAccount = await getTerraAccount(wallet);
    
    /*
     * @see (https://lcd.terra.dev/swagger/#/Query/AllBalances)
     */
    const balance = (await fetch(nets.get(net) + balanceURL + terraAccount.accAddress)).json();
    return balance;
}
