/** @module networks */

module.exports = {
  /** @type {Network} */
  din: {
    messagePrefix: '\x18DinPay Signed Message:\n',
    bip32: {
      public: 0x2bf4968, // base58 will have a prefix 'apub'
      private: 0x2bf4530 // base58Priv will have a prefix 'apriv'
    },
    name: 'live',
    nethash: '6e84d08bd299ed97c212c886c98a57e36545c8f5d645ca7eeae63a8bd62d8988',
    token: 'DIN',
    symbol: 'ⅆ',
    pubKeyHash: 0x17, // Addresses will begin with 'A'
    explorer: 'https://ledger.dinpay.io',
    wif: 0xaa, // Network prefix for wif generation
    activePeer: {
      ip: 'nyc.dinpay.cloud',
      port: 66140
    },
    peers: [
      { ip: 'nyc2.dinpay.cloud', port: 66140 },
      { ip: 'nyc3.dinpay.cloud', port: 66140 },
      { ip: 'nyc4.dinpay.cloud', port: 66140 },
      { ip: 'nyc5.dinpay.cloud', port: 66140 },
      { ip: 'nyc6.dinpay.cloud', port: 66140 },
      { ip: 'nyc7.dinpay.cloud', port: 66140 },
      { ip: 'nyc8.dinpay.cloud', port: 66140 },
      { ip: 'nyc9.dinpay.cloud', port: 66140 },
      { ip: 'nyc10.dinpay.cloud', port: 66140 },
      { ip: 'sf.dinpay.cloud', port: 66140 },
      { ip: 'sf2.dinpay.cloud', port: 66140 },
      { ip: 'sf3.dinpay.cloud', port: 66140 },
      { ip: 'sf4.dinpay.cloud', port: 66140 },
      { ip: 'sf5.dinpay.cloud', port: 66140 },
      { ip: 'sf6.dinpay.cloud', port: 66140 },
      { ip: 'sf7.dinpay.cloud', port: 66140 },
      { ip: 'sf8.dinpay.cloud', port: 66140 },
      { ip: 'sf9.dinpay.cloud', port: 66140 },
      { ip: 'sf10.dinpay.cloud', port: 66140 },
      { ip: 'amsterdam.dinpay.cloud', port: 66140 },
      { ip: 'amsterdam2.dinpay.cloud', port: 66140 },
      { ip: 'amsterdam3.dinpay.cloud', port: 66140 },
      { ip: 'amsterdam4.dinpay.cloud', port: 66140 },
      { ip: 'amsterdam5.dinpay.cloud', port: 66140 },
      { ip: 'amsterdam6.dinpay.cloud', port: 66140 },
      { ip: 'amsterdam7.dinpay.cloud', port: 66140 },
      { ip: 'amsterdam8.dinpay.cloud', port: 66140 },
      { ip: 'amsterdam9.dinpay.cloud', port: 66140 },
      { ip: 'amsterdam10.dinpay.cloud', port: 66140 },
      { ip: 'singapore.dinpay.cloud', port: 66140 },
      { ip: 'singapore2.dinpay.cloud', port: 66140 },
      { ip: 'singapore3.dinpay.cloud', port: 66140 },
      { ip: 'singapore4.dinpay.cloud', port: 66140 },
      { ip: 'singapore5.dinpay.cloud', port: 66140 },
      { ip: 'singapore6.dinpay.cloud', port: 66140 },
      { ip: 'singapore7.dinpay.cloud', port: 66140 },
      { ip: 'singapore8.dinpay.cloud', port: 66140 },
      { ip: 'singapore9.dinpay.cloud', port: 66140 },
      { ip: 'singapore10.dinpay.cloud', port: 66140 },
      { ip: 'bangalore.dinpay.cloud', port: 66140 },
      { ip: 'bangalore2.dinpay.cloud', port: 66140 },
      { ip: 'bangalore3.dinpay.cloud', port: 66140 },
      { ip: 'bangalore4.dinpay.cloud', port: 66140 },
      { ip: 'bangalore5.dinpay.cloud', port: 66140 },
      { ip: 'bangalore6.dinpay.cloud', port: 66140 },
      { ip: 'bangalore7.dinpay.cloud', port: 66140 }
    ],
  },
  /** @type {Network} */
  testnet: {
    messagePrefix: '\x18DinPay Testnet Signed Message:\n',
    bip32: {
      public: 0x043587cf,
      private: 0x04358394
    },
    name: 'testnet',
    nethash: '578e820911f24e039733b45e4882b73e301f813a0d2c31330dafda84534ffa23',
    token: 'DINT',
    symbol: 'ⅆt',
    pubKeyHash: 0x52, // Addresses will begin with 'a'
    explorer: 'https://tledger.dinpay.io',
    wif: 0xba, // Network prefix for wif generation
    activePeer: {
      ip: 'nyc-test.dinpay.cloud',
      port: 66142
    },
    peers: [
      { ip: 'nyc2-test.dinpay.cloud', port: 66142 },
      { ip: 'nyc3-test.dinpay.cloud', port: 66142 },
      { ip: 'nyc4-test.dinpay.cloud', port: 66142 },
      { ip: 'nyc5-test.dinpay.cloud', port: 66142 },
      { ip: 'sf-test.dinpay.cloud', port: 66142 },
      { ip: 'sf2-test.dinpay.cloud', port: 66142 },
      { ip: 'sf3-test.dinpay.cloud', port: 66142 },
      { ip: 'sf4-test.dinpay.cloud', port: 66142 },
      { ip: 'sf5-test.dinpay.cloud', port: 66142 },
      { ip: 'amsterdam-test.dinpay.cloud', port: 66142 },
      { ip: 'amsterdam2-test.dinpay.cloud', port: 66142 },
      { ip: 'amsterdam3-test.dinpay.cloud', port: 66142 },
      { ip: 'amsterdam4-test.dinpay.cloud', port: 66142 },
      { ip: 'amsterdam5-test.dinpay.cloud', port: 66142 },
      { ip: 'singapore-test.dinpay.cloud', port: 66142 },
      { ip: 'singapore2-test.dinpay.cloud', port: 66142 },
      { ip: 'singapore3-test.dinpay.cloud', port: 66142 },
      { ip: 'singapore4-test.dinpay.cloud', port: 66142 },
      { ip: 'singapore5-test.dinpay.cloud', port: 66142 },
      { ip: 'bangalore-test.dinpay.cloud', port: 66142 },
      { ip: 'bangalore2-test.dinpay.cloud', port: 66142 },
      { ip: 'bangalore3-test.dinpay.cloud', port: 66142 },
      { ip: 'bangalore4-test.dinpay.cloud', port: 66142 },
      { ip: 'bangalore5-test.dinpay.cloud', port: 66142 },
      { ip: 'bangalore6-test.dinpay.cloud', port: 66142 },
      { ip: 'bangalore7-test.dinpay.cloud', port: 66142 }
    ],
  },
  /** @type {Network} */
  bitcoin: {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x00,
    wif: 0x80
  }
}
