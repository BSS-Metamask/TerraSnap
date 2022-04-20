import { getPrivateKey } from './getPrivateKey.js'

/**
 * @fun function getTerraPrivateKey(string)
 * @brief Makes seed suitable for public key generation for Terra network
 * 
 * @param {Wallet} Metamask wallet instance
 * @return {Uint8Array} 32byte unsigned int array containing the bytes to generate public key
 */
export async function getTerraPrivateKey(wallet) {
    const metaPrivateKey = JSON.stringify(await getPrivateKey(wallet));
    var bytes = new Uint8Array(32);

    /*
     * @see  We only need 32 bytes of the Base64-encoded string 
     *       (https://docs.terra.money/docs/develop/sdks/terra-js/keys.html)
     */
    for (var i = 0; i < 32; i++) {
	bytes[i] = metaPrivateKey.charCodeAt(i);
    }
    return bytes;
}
