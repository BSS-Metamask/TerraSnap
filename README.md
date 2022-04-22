# TerraSnap
Wallet for Terra Network based on Metamask Snap

## Requirements

- [Metamask Flask](https://metamask.io/flask/): Download and add this as an extension to your chrome browser
- [mm-snap](https://www.npmjs.com/package/@metamask/snaps-cli): Easier to build and run snap with this than `yarn`
- [nvm](https://github.com/nvm-sh/nvm)
- [yarn](https://yarnpkg.com/getting-started)

## Prerequisites

- This project requires `node` version `>v14.0.0`
    ```
    nvm install v14.4.0
    nvm use v14.0.0
    ```
- Install `yarn`
  ```
  npm install -g yarn
  ```
- Install mm-snap cli
  ```
  npm install -g @metamask/snaps-cli
  ```

## Building

- Clone [this](https://github.com/BSS-Metamask/TerraSnap) repository
  ```
  git clone https://github.com/BSS-Metamask/TerraSnap
  ```

- Switch to branch `Spring2022_UT_BSS`
  ```
  cd TerraSnap
  git checkout Spring2022_UT_BSS
  ```

- Install Project Dependencies using `yarn`
  ```
  yarn install
  ```

- Navigate to `app/` and build project
  ```
  cd app/
  yarn build
  ```

### **Testing**

- Setup your wallet in Metamask Flask

- Start the snap
  ```
  yarn start:frontend
  yarn start:snap
  ```

### **Using the Dapp**
  - Open Chrome
  - Go to URL `localhost:3000` 
  - In the webpage displayed, click on `Connect to MetaMask`
  - Click `Connect` in the Metamask popup to accept permission requested by the snap

## Contributing

- Please follow `javascript` coding style prescribed [here](https://google.github.io/styleguide/jsguide.html)
  
