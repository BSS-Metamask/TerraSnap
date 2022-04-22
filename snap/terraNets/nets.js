/**
 * @brief Map object to hold the {test/main}net mapping to the public LCD endpoints
 *        (https://docs.terra.money/docs/develop/endpoints.html#private-endpoints)    
 * @author 1sand0s
 * 
 * @type{Map()<string, string>}
 */
const nets = new Map();
nets.set('Columbus-5 mainnet1', 'https://lcd.terra.dev');
nets.set('Columbus-5 mainnet2', 'https://terra.stakesystems.io');
nets.set('Columbus-5 mainnet3', 'https://lcd.mcontrol.ml');
nets.set('Columbus-5 mainnet4', 'https://terra-lcd.easy2stake.com');
nets.set('Columbus-5 mainnet5', 'http://172.104.133.249');
nets.set('Columbus-5 mainnet6', 'https://blockdaemon-terra-lcd.api.bdnodes.net:1317');
nets.set('Bombay-12 testnet1', 'https://bombay-lcd.terra.dev');
nets.set('Bombay-12 testnet2', 'https://bombay.stakesystems.io');

export { nets };
