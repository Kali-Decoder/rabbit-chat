// app/page.tsx
"use client";

import { WagmiProvider } from "wagmi";
// import { arbitrumSepolia,mantleSepoliaTestnet,sonicTestnet } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { http } from "viem";
import AIAgent from "@/components/AIAgent";
import {  getDefaultConfig, darkTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import {somniaTestnet } from "viem/chains";




export const config = getDefaultConfig({
  appName: "Rabbit Trix",
  projectId: "6780ea76605adb8e2893655e41c392a3",
  chains: [somniaTestnet],
  transports: {

    [somniaTestnet.id]: http(),
  },
});

const queryClient = new QueryClient();

export default function Home() {
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
