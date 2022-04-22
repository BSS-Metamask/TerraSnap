import { gasPriceURL } from './baseURL.js'

/**
 * @fun {Coins} getGasPrice()
 * @brief Returns the gas price
 * @author 1sand0s
 *
 * @return {Coins} Gas prices for all supported denominations (https://fcd.terra.dev/v1/txs/gas_prices)
 */
export async function getGasPrice(){
    return new Coins(await (await fetch(gasPriceURL)).json());
}
