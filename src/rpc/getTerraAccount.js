import { RawKey } from '@terra-money/terra.js';
import { getTerraPrivateKey } from './getTerraPrivateKey.js'

/**
 * @fun {string} getTerraAccount(wallet)
 * @brief Returns the fully-resolved Menmonic-Key associated with this wallets mnemonic
 *
 * @param {Wallet} Metamask wallet instance
 * @return {RawKey} Terra Account 
 */
export async function getTerraAccount(wallet){
    const buff = await getTerraPrivateKey(wallet);
    
    /*
     *@see The private key is the same as the 32 byte buffer
     *     (https://docs.terra.money/docs/develop/sdks/terra-js/keys.html)
     */
    const rawKey = new RawKey(buff);
    return rawKey;
}
