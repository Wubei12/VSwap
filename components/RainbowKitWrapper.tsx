"use client"

import React from 'react'
import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  zora,
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';


const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, base, zora],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_ID || '' }),
    publicProvider()
  ]
);

console.log(process.env.ALCHEMY_ID);

const { connectors } = getDefaultWallets({
  appName: 'value-swap',
  projectId: '103680cc61e91587e104fd00d47b5f8e',
  chains
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

interface Props {
    children: React.ReactNode;
}

function RainbowKitWrapper({children}: Props) {
  return (
    <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains}>
            {children}
        </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default RainbowKitWrapper