const bitcoin = require('bitcoinjs-lib');
const bip39 = require('bip39');
const bip32 = require('bip32');
const ecc = require('tiny-secp256k1');

// Step 1: Generate a mnemonic phrase
const mnemonic = "find doctor bind unlock fat silk oppose joy basic afford exit cream"; //bip39.generateMnemonic();
console.log("Mnemonic:", mnemonic);

// Step 2: Convert mnemonic to seed
const seed = bip39.mnemonicToSeedSync(mnemonic);

// Step 3: Derive an HD wallet from the seed for the regtest network
const network = bitcoin.networks.regtest;
const BIP32Factory = bip32.BIP32Factory;
const bip32Instance = BIP32Factory(ecc);
const root = bip32Instance.fromSeed(seed, network);

// Step 4: Derive the first address (m/44'/1'/0'/0/0)
const path = "m/44'/1'/0'/0/0";
const child = root.derivePath(path);

// 获取私钥（WIF格式）
const privateKey = child.toWIF();
console.log('private key', privateKey)
const { address } = bitcoin.payments.p2wpkh({ pubkey: child.publicKey, network });

console.log("Regtest Address:", address);

// bcrt1qqf7lxp5eetxya7rt4lulffvx5p5sjw7u6rjsx3
// pk: cTfiPjZosr3EBWkSXjWcaptUo1A8FjNeDxBSVDPPiCS5a9ZjuGxq
// ad: bcrt1qupdlz7ma76c7hu3s0x77nyump2xeszkkd9zutc
// mn: find doctor bind unlock fat silk oppose joy basic afford exit cream
