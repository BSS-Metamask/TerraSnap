/**
 * @fun {string} getHDPath()
 * @brief Returns the Hierarchical Deterministic (HD) path associated with this Metamask wallet mnemonic
 * @author 1sand0s
 *
 * @param {Wallet} Metamask wallet instance
 * @return {string} HD path for the specified COIN_TYPE
 */
export async function getHDPath(wallet){

    /*
     * xpriv is an object of type BIP44CoinTypeNode
     * @type {BIP44CoinTypeNode}
     */
    const xpriv = await wallet.request({

	/*
	 * @see  Use restricted JSON-RPC API call snap_getBip44Entropy_[COIN_TYPE] to get
	 *       the HD path for the desired protocol 
	 *       (https://docs.metamask.io/guide/snaps-rpc-api.html#restricted-methods)
	 *       
	 *       COIN_TYPE for Terra : 330 (BIP-44, SLIP-44)
	 *       (https://github.com/satoshilabs/slips/blob/master/slip-0044.md)
	 */
	method: 'snap_getBip44Entropy_330',
    });
    return xpriv.path;
}
