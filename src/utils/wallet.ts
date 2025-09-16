import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { http } from "viem";
import {somniaTestnet } from "viem/chains";
export const config = getDefaultConfig({
  appName: "Rabbit Chat",
  projectId: "6780ea76605adb8e2893655e41c392a3",
  chains: [somniaTestnet],
  transports: {

    [somniaTestnet.id]: http(),
  },
});