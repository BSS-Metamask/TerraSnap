# TerraSnap
Wallet for Terra Network based on Metamask Snap

### Requirements

- [nvm](https://github.com/nvm-sh/nvm)
- [Metamask Flask](https://metamask.io/flask/) Download and add this as an extension to your chrome browser
- [mm-snap](https://www.npmjs.com/package/@metamask/snaps-cli) Easier to build and run snap with this than `yarn`

### Building

- Clone [this](https://github.com/BSS-Metamask/TerraSnap) repository
  ```
  git clone https://github.com/BSS-Metamask/TerraSnap
  ```
- Switch to branch `Spring2022_UT_BSS`
  ```
  cd TerraSnap
  git checkout Spring2022_UT_BSS
  ```
- This project requires node version `>v14.0.0`
  ```
  nvm install v14.4.0
  nvm use v14.0.0
  ```
- Install `yarn`
  ```
  npm install -g yarn
  ```
- Install Project Dependencies using `yarn`
  ```
  yarn install
  ```
- Build Project
  ```
  mm-snap build
  ```

### Testing

- Setup your wallet in Metamask Flask

- Start the snap
  ```
  mm-snap serve
  ```

- Using the Dapp
  - Open Chrome
  - Goto URL `localhost:8081`
  - In the webpage displayed, click on `Connect`
  - Click `Connect` in the Metamask popup to accept permission requested by the snap

### Contributing

- Please follow `javascript` coding style prescribed [here](https://google.github.io/styleguide/jsguide.html)
  
