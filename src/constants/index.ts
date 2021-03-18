import daiLogo from "../assets/icons/dai.svg"
import renbtcLogo from "../assets/icons/renbtc.svg"
import saddleLogo from "../assets/icons/logo.svg"
import sbtcLogo from "../assets/icons/sbtc.svg"
import susdLogo from "../assets/icons/susd.svg"
import tbtcLogo from "../assets/icons/tbtc.svg"
import usdcLogo from "../assets/icons/usdc.svg"
import usdtLogo from "../assets/icons/usdt.svg"
import wbtcLogo from "../assets/icons/wbtc.svg"

export const NetworkContextName = "NETWORK"
export const BTC_POOL_NAME = "BTC Pool"
export const STABLECOIN_POOL_NAME = "Stablecoin Pool"
export type PoolName = typeof BTC_POOL_NAME | typeof STABLECOIN_POOL_NAME

export enum ChainId {
  MAINNET = 1,
  // ROPSTEN = 3,
  // RINKEBY = 4,
  // GÖRLI = 5,
  // KOVAN = 42,
  OVM = 420,
  HARDHAT = 31337,
}

export class Token {
  readonly addresses: { [chainId in ChainId]: string }
  readonly decimals: number
  readonly symbol: string
  readonly name: string
  readonly icon: string
  readonly geckoId: string

  constructor(
    addresses: { [chainId in ChainId]: string },
    decimals: number,
    symbol: string,
    geckoId: string,
    name: string,
    icon: string,
  ) {
    this.addresses = addresses
    this.decimals = decimals
    this.symbol = symbol
    this.geckoId = geckoId
    this.name = name
    this.icon = icon
  }
}

export const BLOCK_TIME = 15000

const OVM_SWAP = "0x0CD5F7B598e2F5a6F2C33e67E408545eD6A377fC"
const OVM_SWAP_TOKEN = "0x28E61464364C9dAbF8Ddfb0084b5893E7117FC4c"
const OVM_TBTC = "0x0ba43EB65c982F8992935d5a74d1e4803DbB59d4"
const OVM_WBTC = "0x3361A541f4B5560057B2117dd0f482365f7ec033"
const OVM_RENBTC = "0x4C3d03013Eebc51c9ad5ac33879bb14c15f6E821"
const OVM_SBTC = "0xD5C4363DCEC868C2B2A0eA6548f9Aa687b1CF79b"

export const STABLECOIN_SWAP_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: "0x4f6A43Ad7cba042606dECaCA730d4CE0A57ac62e",
  [ChainId.HARDHAT]: "0x1613beB3B2C4f22Ee086B2b38C1476A3cE7f78E8",
  [ChainId.OVM]: OVM_SWAP,
}

export const BTC_SWAP_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: "0x4f6A43Ad7cba042606dECaCA730d4CE0A57ac62e",
  [ChainId.HARDHAT]: "0x851356ae760d987E095750cCeb3bC6014560891C",
  [ChainId.OVM]: OVM_SWAP,
}

export const MERKLETREE_DATA: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: "mainnetTestAccounts.json",
  [ChainId.HARDHAT]: "hardhat.json",
  [ChainId.OVM]: "hardhat.json",
}

export const STABLECOIN_SWAP_TOKEN_CONTRACT_ADDRESSES: {
  [chainId in ChainId]: string
} = {
  [ChainId.MAINNET]: "",
  [ChainId.HARDHAT]: "0x6A358FD7B7700887b0cd974202CdF93208F793E2",
  [ChainId.OVM]: OVM_SWAP_TOKEN,
}

export const BTC_SWAP_TOKEN_CONTRACT_ADDRESSES: {
  [chainId in ChainId]: string
} = {
  [ChainId.MAINNET]: "0xC28DF698475dEC994BE00C9C9D8658A548e6304F",
  [ChainId.HARDHAT]: "0xB955b6c65Ff69bfe07A557aa385055282b8a5eA3",
  [ChainId.OVM]: OVM_SWAP_TOKEN,
}

export const BTC_SWAP_TOKEN = new Token(
  BTC_SWAP_TOKEN_CONTRACT_ADDRESSES,
  18,
  "saddleBTC",
  "saddlebtc",
  "Saddle TBTC/WBTC/RENBTC/SBTC",
  saddleLogo,
)

export const STABLECOIN_SWAP_TOKEN = new Token(
  STABLECOIN_SWAP_TOKEN_CONTRACT_ADDRESSES,
  18,
  "saddleUSD",
  "saddleusd",
  "Saddle DAI/USDC/USDT",
  saddleLogo,
)

// Stablecoins
const DAI_CONTRACT_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
  [ChainId.HARDHAT]: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
  [ChainId.OVM]: OVM_SBTC,
}
export const DAI = new Token(
  DAI_CONTRACT_ADDRESSES,
  18,
  "DAI",
  "dai",
  "Dai",
  daiLogo,
)

const USDC_CONTRACT_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
  [ChainId.HARDHAT]: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
  [ChainId.OVM]: OVM_SBTC,
}
export const USDC = new Token(
  USDC_CONTRACT_ADDRESSES,
  6,
  "USDC",
  "usd-coin",
  "USDC Coin",
  usdcLogo,
)

const USDT_CONTRACT_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: "0xdac17f958d2ee523a2206206994597c13d831ec7",
  [ChainId.HARDHAT]: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
  [ChainId.OVM]: OVM_SBTC,
}
export const USDT = new Token(
  USDT_CONTRACT_ADDRESSES,
  6,
  "USDT",
  "tether",
  "Tether",
  usdtLogo,
)

const SUSD_CONTRACT_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: "0x57ab1ec28d129707052df4df418d58a2d46d5f51",
  [ChainId.HARDHAT]: "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
  [ChainId.OVM]: OVM_SBTC,
}
export const SUSD = new Token(
  SUSD_CONTRACT_ADDRESSES,
  18,
  "SUSD",
  "nusd",
  "sUSD",
  susdLogo,
)

export const STABLECOIN_POOL_TOKENS = [DAI, USDC, USDT, SUSD]

// Tokenized BTC
const TBTC_CONTRACT_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: "0x8daebade922df735c38c80c7ebd708af50815faa",
  [ChainId.HARDHAT]: "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9",
  [ChainId.OVM]: OVM_TBTC,
}
export const TBTC = new Token(
  TBTC_CONTRACT_ADDRESSES,
  18,
  "TBTC",
  "tbtc",
  "tBTC",
  tbtcLogo,
)

const WBTC_CONTRACT_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
  [ChainId.HARDHAT]: "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",
  [ChainId.OVM]: OVM_WBTC,
}
export const WBTC = new Token(
  WBTC_CONTRACT_ADDRESSES,
  8,
  "WBTC",
  "wrapped-bitcoin",
  "WBTC",
  wbtcLogo,
)

const RENBTC_CONTRACT_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: "0xeb4c2781e4eba804ce9a9803c67d0893436bb27d",
  [ChainId.HARDHAT]: "0x0165878A594ca255338adfa4d48449f69242Eb8F",
  [ChainId.OVM]: OVM_RENBTC,
}
export const RENBTC = new Token(
  RENBTC_CONTRACT_ADDRESSES,
  8,
  "RENBTC",
  "renbtc",
  "renBTC",
  renbtcLogo,
)

const SBTC_CONTRACT_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: "0xfe18be6b3bd88a2d2a7f928d00292e7a9963cfc6",
  [ChainId.HARDHAT]: "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853",
  [ChainId.OVM]: OVM_SBTC,
}
export const SBTC = new Token(
  SBTC_CONTRACT_ADDRESSES,
  18,
  "SBTC",
  "sbtc",
  "sBTC",
  sbtcLogo,
)

export const BTC_POOL_TOKENS = [TBTC, WBTC, RENBTC, SBTC]

// maps a symbol string to a token object
export const TOKENS_MAP: {
  [symbol: string]: Token
} = STABLECOIN_POOL_TOKENS.concat(BTC_POOL_TOKENS).reduce(
  (acc, token) => ({ ...acc, [token.symbol]: token }),
  {},
)

export const POOLS_MAP: {
  [poolName in PoolName]: {
    lpToken: Token
    poolTokens: Token[]
  }
} = {
  [BTC_POOL_NAME]: {
    lpToken: BTC_SWAP_TOKEN,
    poolTokens: BTC_POOL_TOKENS,
  },
  [STABLECOIN_POOL_NAME]: {
    lpToken: STABLECOIN_SWAP_TOKEN,
    poolTokens: STABLECOIN_POOL_TOKENS,
  },
}

export const TRANSACTION_TYPES = {
  DEPOSIT: "DEPOSIT",
  WITHDRAW: "WITHDRAW",
  SWAP: "SWAP",
}

export const POOL_FEE_PRECISION = 10

export const DEPLOYED_BLOCK: { [chainId in ChainId]: number } = {
  [ChainId.MAINNET]: 11656944,
  [ChainId.HARDHAT]: 0,
  [ChainId.OVM]: 0,
}

export const POOL_STATS_URL: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: "https://ipfs.saddle.exchange/pool-stats.json",
  [ChainId.HARDHAT]:
    "https://mehmeta-team-bucket.storage.fleek.co/pool-stats-dev.json",
  [ChainId.OVM]:
    "https://mehmeta-team-bucket.storage.fleek.co/pool-stats-dev.json",
}
