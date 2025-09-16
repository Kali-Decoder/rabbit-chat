// app/page.tsx
"use client";

import { WagmiProvider } from "wagmi";
// import { arbitrumSepolia,mantleSepoliaTestnet,sonicTestnet } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AIAgent from "@/components/AIAgent";
import {  getDefaultConfig, darkTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";

import {config} from "@/utils/wallet";

export default function Home() {
  const queryClient = new QueryClient();
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={darkTheme({accentColor:"#372fa3"})} modalSize="wide">
          <AIAgent />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
