import { RawKey, LCDClient, Coins } from '@terra-money/terra.js';
import { nets } from './terraNets/nets.js'
import { getPrivateKey } from './rpc/getPrivateKey.js'
import { getHDPath } from './rpc/getHDPath.js'
import { getTerraPrivateKey } from './rpc/getTerraPrivateKey.js'
import { getTerraAccount } from './rpc/getTerraAccount.js'
import { getTerraAccountBalance } from './rpc/getTerraAccountBalance.js'
import { getGasPrice } from './rpc/getGasPrice.js'

wallet.registerRpcMessageHandler(async (originString, requestObject) => {
    switch (requestObject.method) {

    case 'getHDPath' :
	await getHDPath(wallet);
    case 'getTerraPrivateKey' :
	await getTerraPrivateKey(wallet);
    case 'getTerraAccount' :
	await getTerraAccount(wallet);
    case 'getTerraAccountBalance' :
	await getTerraAccountBalance(wallet, 'Bombay-12 testnet1');
	case 'hello' :
		return 'Hello World!';
	/*return wallet.request({
            method: 'snap_confirm',
            params: [
		{
		    prompt: `Hello, ${originString}!`,
		    description:
		    'This custom confirmation is just for display purposes.',
		    textAreaContent:
		    balance,
		},
            ],
	    });*/
    default:
	throw new Error('Method not found.');
    }
});
