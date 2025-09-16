const accountabstraction = `
          <table class="w-full border-collapse border border-gray-700 text-white">
  <thead>
    <tr class="bg-gray-900 text-left">
      <th class="p-3 border border-gray-700">Service</th>
      <th class="p-3 border border-gray-700">Details</th>
    </tr>
  </thead>
  <tbody>
    <tr class="bg-gray-800">
      <td class="p-3 border border-gray-700">Biconomy</td>
      <td class="p-3 border border-gray-700">
        Full AA infra stack <br/>
        <a href="https://www.biconomy.io" target="_blank" class="text-blue-400 hover:underline">
          Explore Biconomy
        </a>
      </td>
    </tr>
    <tr class="bg-gray-900">
      <td class="p-3 border border-gray-700">Fastlane</td>
      <td class="p-3 border border-gray-700">
        4337 Bundler API and async Task Manager <br/>
         <a href="https://shmonad.xyz/" target="_blank" class="text-blue-400 hover:underline">
          Explore Fastlane
        </a>
        <code class="bg-gray-800 text-gray-300 p-1 rounded">
          0xC9f0cDE8316AbC5Efc8C3f5A6b571e815C021b51
        </code> (Fastlane AddressHub)
      </td>
    </tr>
    <tr class="bg-gray-800">
      <td class="p-3 border border-gray-700">Pimlico</td>
      <td class="p-3 border border-gray-700">
        Paymaster and Bundler <br/>
         <a href="https://docs.pimlico.io/" target="_blank" class="text-blue-400 hover:underline">
          Explore Pimlico
        </a>
        <ul class="list-none space-y-1">
          <li>
            <code class="bg-gray-800 text-gray-300 p-1 rounded">
              0x00000000000000fb866daaa79352cc568a005d96
            </code> (Paymaster v0.7)
          </li>
          <li>
            <code class="bg-gray-800 text-gray-300 p-1 rounded">
              0x0000000000000039cd5e8ae05257ce51c473ddd1
            </code> (Paymaster v0.6)
          </li>
          <li>
            <code class="bg-gray-800 text-gray-300 p-1 rounded">
              0x0000000071727De22E5E9d8BAf0edAc6f37da032
            </code> (EntryPoint v0.7)
          </li>
          <li>
            <code class="bg-gray-800 text-gray-300 p-1 rounded">
              0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789
            </code> (EntryPoint v0.6)
          </li>
          <li>
            <code class="bg-gray-800 text-gray-300 p-1 rounded">
              0x91E60e0613810449d098b0b5Ec8b51A0FE8c8985
            </code> (Simple Smart Contract Factory v7)
          </li>
          <li>
            <code class="bg-gray-800 text-gray-300 p-1 rounded">
              0x9406Cc6185a346906296840746125a0E44976454
            </code> (Simple Smart Contract Factory v6)
          </li>
        </ul>
      </td>
    </tr>
    <tr class="bg-gray-900">
      <td class="p-3 border border-gray-700">ZeroDev</td>
      <td class="p-3 border border-gray-700">
        Zerodev toolkit and dashboard <br/>
        <a href="https://zerodev.app" target="_blank" class="text-blue-400 hover:underline">
          Explore ZeroDev
        </a>
      </td>
    </tr>
  </tbody>
</table>`;


const oracle = `<div class="text-white">
  <table class="w-full border-collapse border border-gray-700">
    <thead>
      <tr class="bg-gray-900 text-left">
        <th class="p-3 border border-gray-700">Provider</th>
        <th class="p-3 border border-gray-700">Description</th>
        <th class="p-3 border border-gray-700">Resources</th>
      </tr>
    </thead>
    <tbody>
      <!-- DIA -->
      <tr class="bg-gray-800">
        <td class="p-3 border border-gray-700">DIA</td>
        <td class="p-3 border border-gray-700">
          DIA (Decentralized Information Asset) provides real-time on-chain oracles 
          and trusted price feeds for decentralized applications on Somnia. 
          This is critical for DeFi, lending, and trading protocols.
        </td>
        <td class="p-3 border border-gray-700">
          <ul class="list-disc pl-5">
            <li>
              <a href="https://docs.diadata.org/use-nexus-product/how-to-dia-nexus-oracles/access-the-oracle/somnia-price-oracles" 
                 target="_blank" class="text-blue-400 hover:underline">
                Somnia Price Oracles
              </a>
            </li>
            <li>
              <a href="https://docs.somnia.network/developer/partners/integrating-dia-oracles-on-somnia" 
                 target="_blank" class="text-blue-400 hover:underline">
                How to Integrate DIA Price Feeds
              </a>
            </li>
          </ul>
        </td>
      </tr>
      <tr class="bg-gray-900">
        <td colspan="3" class="p-3 border border-gray-700">
          <p class="font-semibold mb-2">📜 DIA Oracle Contracts</p>
          <table class="w-full border border-gray-700 text-sm">
            <thead>
              <tr class="bg-gray-800">
                <th class="p-2 border border-gray-700">Network</th>
                <th class="p-2 border border-gray-700">Contract Address</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-gray-900">
                <td class="p-2 border border-gray-700">Mainnet</td>
                <td class="p-2 border border-gray-700">
                  <code class="bg-gray-800 text-gray-300 p-1 rounded">
                    0xbA0E0750A56e995506CA458b2BdD752754CF39C4
                  </code>
                </td>
              </tr>
              <tr class="bg-gray-800">
                <td class="p-2 border border-gray-700">Testnet</td>
                <td class="p-2 border border-gray-700">
                  <code class="bg-gray-800 text-gray-300 p-1 rounded">
                    0x9206296Ea3aEE3E6bdC07F7AaeF14DfCf33d865D
                  </code>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>

      <!-- Protofire -->
      <tr class="bg-gray-800">
        <td class="p-3 border border-gray-700">Protofire</td>
        <td class="p-3 border border-gray-700">
          Protofire deploys custom, compatible oracles using the same data providers and node operators, 
          allowing protocols to connect to their network without modifying Smart Contracts.
        </td>
        <td class="p-3 border border-gray-700">
          <ul class="list-disc pl-5">
            <li>
              <a href="https://docs.somnia.network/developer/partners/build-a-live-crypto-price-dapp-using-protofire-oracle" 
                 target="_blank" class="text-blue-400 hover:underline">
                Price Feeds
              </a>
            </li>
            <li>
              <a href="https://docs.somnia.network/developer/partners/verifiable-randomness-on-somnia-using-protofire-chainlink-vrf-v2.5" 
                 target="_blank" class="text-blue-400 hover:underline">
                Verifiable Randomness Function (VRF)
              </a>
            </li>
          </ul>
        </td>
      </tr>
      <tr class="bg-gray-900">
        <td colspan="3" class="p-3 border border-gray-700">
          <p class="font-semibold mb-2">📜 Protofire VRF Contracts</p>
          <table class="w-full border border-gray-700 text-sm">
            <thead>
              <tr class="bg-gray-800">
                <th class="p-2 border border-gray-700">Network</th>
                <th class="p-2 border border-gray-700">Contract</th>
                <th class="p-2 border border-gray-700">Address</th>
              </tr>
            </thead>
            <tbody>
              <!-- Mainnet -->
              <tr class="bg-gray-900">
                <td rowspan="3" class="p-2 border border-gray-700">Mainnet</td>
                <td class="p-2 border border-gray-700">VRFV2PlusWrapper</td>
                <td class="p-2 border border-gray-700">
                  <code class="bg-gray-800 text-gray-300 p-1 rounded">
                    0x606b2B36516AB7479D1445Ec14B6B39B44901bf8
                  </code>
                </td>
              </tr>
              <tr class="bg-gray-800">
                <td class="p-2 border border-gray-700">LINK Token</td>
                <td class="p-2 border border-gray-700">
                  <code class="bg-gray-800 text-gray-300 p-1 rounded">
                    0x0a4Db7035284566F6f676991ED418140dC01A2aa
                  </code>
                </td>
              </tr>
              <tr class="bg-gray-900">
                <td class="p-2 border border-gray-700">LINK/NATIVE Oracle</td>
                <td class="p-2 border border-gray-700">
                  <code class="bg-gray-800 text-gray-300 p-1 rounded">
                    0xEBD41881413dD76F42DF2902ee865099af9099B4
                  </code>
                </td>
              </tr>
              <!-- Testnet -->
              <tr class="bg-gray-800">
                <td rowspan="3" class="p-2 border border-gray-700">Testnet</td>
                <td class="p-2 border border-gray-700">VRFV2PlusWrapper</td>
                <td class="p-2 border border-gray-700">
                  <code class="bg-gray-800 text-gray-300 p-1 rounded">
                    0x763cC914d5CA79B04dC4787aC14CcAd780a16BD2
                  </code>
                </td>
              </tr>
              <tr class="bg-gray-900">
                <td class="p-2 border border-gray-700">LINK Token</td>
                <td class="p-2 border border-gray-700">
                  <code class="bg-gray-800 text-gray-300 p-1 rounded">
                    0x30C75a2badF9b12733e831fcb5315C8f54e96f6d
                  </code>
                </td>
              </tr>
              <tr class="bg-gray-800">
                <td class="p-2 border border-gray-700">LINK/NATIVE Oracle</td>
                <td class="p-2 border border-gray-700">
                  <code class="bg-gray-800 text-gray-300 p-1 rounded">
                    0xEc00df0e834AB878135b6554bb7438A2Ff66563b
                  </code>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
</div>

 `;

const crosschain = `<table class="w-full border-collapse border border-gray-700 text-white">
  <thead>
    <tr class="bg-gray-900 text-left">
      <th class="p-3 border border-gray-700">Project</th>
      <th class="p-3 border border-gray-700">Details</th>
    </tr>
  </thead>
  <tbody>
    <tr class="bg-gray-800">
      <td class="p-3 border border-gray-700">Garden</td>
      <td class="p-3 border border-gray-700">
        Bitcoin Bridge <br/>
        <a href="https://x.com/garden_finance" target="_blank" class="text-blue-400 hover:underline">Garden</a> <br/>
        <ul class="list-none space-y-1">
          <li><code class="bg-gray-800 text-gray-300 p-1 rounded">Multicall: 0x13DCec0762EcC5E666c207ab44Dc768e5e33070F</code></li>
          <li><code class="bg-gray-800 text-gray-300 p-1 rounded">CBBTC: 0xaD9d14CA82d9BF97fFf745fFC7d48172A1c0969E</code></li>
          <li><code class="bg-gray-800 text-gray-300 p-1 rounded">USDC: 0x00ab86f54F436CfE15253845F139955ae0C00bAf</code></li>
          <li><code class="bg-gray-800 text-gray-300 p-1 rounded">HTLC_CBBTC: 0x1dC94FdcAd8Aee13cfd34Db8a26d26E31572805c</code></li>
          <li><code class="bg-gray-800 text-gray-300 p-1 rounded">HTLC_USDC: 0xE99D8A21d4F2ad2f90c279c869311503f9e25867</code></li>
        </ul>
      </td>
    </tr>
    <tr class="bg-gray-900">
      <td class="p-3 border border-gray-700">LayerZero</td>
      <td class="p-3 border border-gray-700">
        General message passing <br/>
        <a href="https://x.com/LayerZero_Core" target="_blank" class="text-blue-400 hover:underline">LayerZero</a> <br/>
        <code class="bg-gray-800 text-gray-300 p-1 rounded">
          <a href="https://docs.layerzero.network/v2/deployments/deployed-contracts?chains=monad-testnet" target="_blank" class="text-blue-400 hover:underline">LayerZero Docs</a>
        </code>
      </td>
    </tr>
    <tr class="bg-gray-800">
      <td class="p-3 border border-gray-700">Nitro by Router Protocol</td>
      <td class="p-3 border border-gray-700">
        Nitro Bridge <br/>
        <a href="https://x.com/routerprotocol" target="_blank" class="text-blue-400 hover:underline">Router Protocol</a> <br/>
        <code class="bg-gray-800 text-gray-300 p-1 rounded">
          <a href="http://testnet.routernitro.com" target="_blank" class="text-blue-400 hover:underline">Testnet</a>
        </code>
      </td>
    </tr>
    <tr class="bg-gray-900">
      <td class="p-3 border border-gray-700">Orbiter Finance</td>
      <td class="p-3 border border-gray-700">
        ZK-tech based cross-chain protocol <br/>
        <a href="https://x.com/Orbiter_Finance?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" class="text-blue-400 hover:underline">Orbiter Finance</a> <br/>
        <code class="bg-gray-800 text-gray-300 p-1 rounded">Message Team</code>
      </td>
    </tr>
  </tbody>
</table>`;

const indexer = `<table class="w-full border-collapse border border-gray-700 text-white">
        <thead>
          <tr class="bg-gray-900 text-left">
            <th class="p-3 border border-gray-700">Indexer</th>
            <th class="p-3 border border-gray-700">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-gray-800">
            <td class="p-3 border border-gray-700">Reservoir</td>
            <td class="p-3 border border-gray-700">
              NFT indexer, APIs, and SDK <br/>
              <a href="https://x.com/reservoir0x" target="_blank" class="text-blue-400 hover:underline">Reservoir</a> <br/>
              <ul class="list-none space-y-1">
                <li><code class="bg-gray-800 text-gray-300 p-1 rounded">Seaport v1.6: 0x0000000000000068f116a894984e2db1123eb395</code></li>
                <li><code class="bg-gray-800 text-gray-300 p-1 rounded">Reservoir Router: 0x1aed60a97192157fda7fb26267a439d523d09c5e</code></li>
                <li><code class="bg-gray-800 text-gray-300 p-1 rounded">Approval Proxy: 0x224ecb4eae96d31372d1090c3b0233c8310dbbab</code></li>
              </ul>
            </td>
          </tr>
          <tr class="bg-gray-900">
            <td class="p-3 border border-gray-700">Sentio</td>
            <td class="p-3 border border-gray-700">
              Indexer <br/>
              <a href="https://academy.subquery.network/indexer/quickstart/quickstart_chains/monad.html" target="_blank" class="text-blue-400 hover:underline">Sentio</a> <br/>
            </td>
          </tr>
          <tr class="bg-gray-800">
            <td class="p-3 border border-gray-700">Subquery</td>
            <td class="p-3 border border-gray-700">
              Subquery Indexer <br/>
              <a href="https://docs.layerzero.network/v2/deployments/deployed-contracts?chains=monad-testnet" target="_blank" class="text-blue-400 hover:underline">Subquery</a> <br/>
           
            </td>
          </tr>
          <tr class="bg-gray-900">
            <td class="p-3 border border-gray-700">sqd.ai</td>
            <td class="p-3 border border-gray-700">
              Data Lake for AI Agents <br/>
              <a href="https://docs.sqd.ai/subsquid-network/reference/networks/" target="_blank" class="text-blue-400 hover:underline">sqd.ai</a> <br/>
            </td>
          </tr>
        </tbody>
      </table>`;

const walletinfra = `<table class="w-full border-collapse border border-gray-700 text-white">
  <thead>
    <tr class="bg-gray-900 text-left">
      <th class="p-3 border border-gray-700">Wallet Provider</th>
      <th class="p-3 border border-gray-700">Description</th>
      <th class="p-3 border border-gray-700">Resources</th>
    </tr>
  </thead>
  <tbody>
    <tr class="bg-gray-800">
      <td class="p-3 border border-gray-700">Privy</td>
      <td class="p-3 border border-gray-700">
        Privy is a secure, embeddable wallet infrastructure provider that allows developers to authenticate users, manage sessions, and provide seamless wallet experiences within dApps.
      </td>
      <td class="p-3 border border-gray-700">
        <a href="https://docs.somnia.network/developer/partners/using-privy-wallet-on-somnia" target="_blank" class="text-blue-400 hover:underline">Documentation</a>
      </td>
    </tr>
    <tr class="bg-gray-900">
      <td class="p-3 border border-gray-700">Sequence</td>
      <td class="p-3 border border-gray-700">
        Sequence is a smart contract wallet & account abstraction provider that enables gasless transactions and seamless user onboarding to dApps.
      </td>
      <td class="p-3 border border-gray-700">
        <a href="https://sequence.build/landing" target="_blank" class="text-blue-400 hover:underline">Documentation</a>
      </td>
    </tr>
    <tr class="bg-gray-800">
      <td class="p-3 border border-gray-700">Thirdweb</td>
      <td class="p-3 border border-gray-700">
        Thirdweb simplifies smart contract deployment, account abstraction, and Web3 development on Somnia. It offers gasless transactions, token management, and SDKs for seamless dApp building.
      </td>
      <td class="p-3 border border-gray-700">
        <a href="https://thirdweb.com/somnia" target="_blank" class="text-blue-400 hover:underline">Thirdweb Somnia Docs</a>
      </td>
    </tr>
  </tbody>
</table>
`;

const rpcs = `<table class="w-full border-collapse border border-gray-700 text-white">
  <thead>
    <tr class="bg-gray-900 text-left">
      <th class="p-3 border border-gray-700">RPC</th>
      <th class="p-3 border border-gray-700">Details</th>
    </tr>
  </thead>
  <tbody>
    <tr class="bg-gray-800">
      <td class="p-3 border border-gray-700">Ankr</td>
      <td class="p-3 border border-gray-700">
        RPC <br/>
        <a href="https://www.ankr.com/rpc/somnia" target="_blank" class="text-blue-400 hover:underline">Ankr</a> <br/>
        <code class="bg-gray-800 text-gray-300 p-1 rounded">https://www.ankr.com/rpc/somnia</code>
      </td>
    </tr>
    <tr class="bg-gray-900">
      <td class="p-3 border border-gray-700">Public Node</td>
      <td class="p-3 border border-gray-700">
        Public RPC <br/>
        <a href="https://somnia.publicnode.com" target="_blank" class="text-blue-400 hover:underline">Public Node</a> <br/>
        <code class="bg-gray-800 text-gray-300 p-1 rounded">https://somnia.publicnode.com</code>
      </td>
    </tr>
    <tr class="bg-gray-800">
      <td class="p-3 border border-gray-700">Stakely</td>
      <td class="p-3 border border-gray-700">
        RPC <br/>
        <a href="https://somnia-json-rpc.stakely.io" target="_blank" class="text-blue-400 hover:underline">Stakely</a> <br/>
        <code class="bg-gray-800 text-gray-300 p-1 rounded">https://somnia-json-rpc.stakely.io</code>
      </td>
    </tr>
  </tbody>
</table>`;

const subgraphs = `<div class="text-white">
  <table class="w-full border-collapse border border-gray-700">
    <thead>
      <tr class="bg-gray-900 text-left">
        <th class="p-3 border border-gray-700">Provider</th>
        <th class="p-3 border border-gray-700">Description</th>
        <th class="p-3 border border-gray-700">Resources</th>
      </tr>
    </thead>
    <tbody>
      <tr class="bg-gray-800">
        <td class="p-3 border border-gray-700">Protofire</td>
        <td class="p-3 border border-gray-700">
          Protofire deploys custom, compatible oracles using the same data providers and node operators, 
          allowing protocols to connect to their network without modifying Smart Contracts.
        </td>
        <td class="p-3 border border-gray-700">
          <ul class="list-disc pl-5">
            <li>
              <a href="http://somnia.chain.love/" target="_blank" class="text-blue-400 hover:underline">
                Create Subgraphs
              </a>
            </li>
            <li>
              <a href="https://docs.somnia.network/developer/partners/indexing-data-on-somnia-using-graph-services" 
                 target="_blank" class="text-blue-400 hover:underline">
                Documentation
              </a>
            </li>
          </ul>
        </td>
      </tr>
      <tr class="bg-gray-900">
        <td class="p-3 border border-gray-700">Ormi</td>
        <td class="p-3 border border-gray-700">
          Ormi is the only unified Web3 data layer to supercharge live, historical, and AI-powered 
          blockchain data applications.
        </td>
        <td class="p-3 border border-gray-700">
          <ul class="list-disc pl-5">
            <li>
              <a href="https://subgraph.somnia.network/" target="_blank" class="text-blue-400 hover:underline">
                Create Subgraphs
              </a>
            </li>
            <li>
              <a href="https://docs.somnia.network/developer/partners/deploy-a-subgraph-on-somnia-using-ormi" 
                 target="_blank" class="text-blue-400 hover:underline">
                Documentation
              </a>
            </li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</div>
`
const network_info = `<div class="text-white">
  <table class="w-full border-collapse border border-gray-700">
    <thead>
      <tr class="bg-gray-900 text-left">
        <th class="p-3 border border-gray-700">Field</th>
        <th class="p-3 border border-gray-700">Mainnet</th>
        <th class="p-3 border border-gray-700">Testnet</th>
      </tr>
    </thead>
    <tbody>
      <tr class="bg-gray-800">
        <td class="p-3 border border-gray-700">Chain ID</td>
        <td class="p-3 border border-gray-700">5031</td>
        <td class="p-3 border border-gray-700">50312</td>
      </tr>
      <tr class="bg-gray-900">
        <td class="p-3 border border-gray-700">Block Explorer</td>
        <td class="p-3 border border-gray-700">
          <a href="https://explorer.somnia.network" target="_blank" class="text-blue-400 hover:underline">
            https://explorer.somnia.network
          </a>
        </td>
        <td class="p-3 border border-gray-700">
          <a href="https://shannon-explorer.somnia.network/" target="_blank" class="text-blue-400 hover:underline">
            https://shannon-explorer.somnia.network/
          </a><br/>
          <a href="https://somnia-testnet.socialscan.io/" target="_blank" class="text-blue-400 hover:underline">
            Alternative Explorer
          </a>
        </td>
      </tr>
      <tr class="bg-gray-800">
        <td class="p-3 border border-gray-700">Symbol</td>
        <td class="p-3 border border-gray-700">SOMI</td>
        <td class="p-3 border border-gray-700">STT</td>
      </tr>
      <tr class="bg-gray-900">
        <td class="p-3 border border-gray-700">RPC</td>
        <td class="p-3 border border-gray-700">
          <code class="bg-gray-800 text-gray-300 p-1 rounded">https://api.infra.mainnet.somnia.network/</code>
        </td>
        <td class="p-3 border border-gray-700">
          <code class="bg-gray-800 text-gray-300 p-1 rounded">https://dream-rpc.somnia.network/</code>
        </td>
      </tr>
      <tr class="bg-gray-800">
        <td class="p-3 border border-gray-700">MultiCallV3</td>
        <td class="p-3 border border-gray-700">
          <code class="bg-gray-800 text-gray-300 p-1 rounded">0x5e44F178E8cF9B2F5409B6f18ce936aB817C5a11</code>
        </td>
        <td class="p-3 border border-gray-700">
          <code class="bg-gray-800 text-gray-300 p-1 rounded">0x841b8199E6d3Db3C6f264f6C2bd8848b3cA64223</code>
        </td>
      </tr>
      <tr class="bg-gray-900">
        <td class="p-3 border border-gray-700">EntryPoint v0.7</td>
        <td colspan="2" class="p-3 border border-gray-700">
          <code class="bg-gray-800 text-gray-300 p-1 rounded">0x0000000071727De22E5E9d8BAf0edAc6f37da032</code>
        </td>
      </tr>
      <tr class="bg-gray-800">
        <td class="p-3 border border-gray-700">Factory Address</td>
        <td colspan="2" class="p-3 border border-gray-700">
          <code class="bg-gray-800 text-gray-300 p-1 rounded">0x4be0ddfebca9a5a4a617dee4dece99e7c862dceb</code>
        </td>
      </tr>
      <tr class="bg-gray-900">
        <td class="p-3 border border-gray-700">Faucet</td>
        <td class="p-3 border border-gray-700">
          <a href="https://stakely.io/faucet/somnia-somi" target="_blank" class="text-blue-400 hover:underline">
            Stakely Mainnet Faucet
          </a>
        </td>
        <td class="p-3 border border-gray-700">
          <a href="https://testnet.somnia.network/" target="_blank" class="text-blue-400 hover:underline">
            Testnet Faucet
          </a>
        </td>
      </tr>
    </tbody>
  </table>

  <div class="mt-4 p-3 bg-gray-900 rounded-lg">
    <p class="text-lg font-semibold mb-2">🔗 Add Somnia Network to Metamask</p>
    <ul class="list-disc pl-5">
      <li>
        Add Somnia Mainnet: 
        <a href="https://chainlist.org/?chain=50312&search=somnia" target="_blank" class="text-blue-400 hover:underline">
          https://chainlist.org/?chain=50312&search=somnia
        </a>
      </li>
      <li>
        Add Somnia Testnet: 
        <a href="https://testnet.somnia.network/" target="_blank" class="text-blue-400 hover:underline">
          https://testnet.somnia.network/
        </a>
      </li>
    </ul>
    <p class="mt-2 text-sm text-gray-400">Use <b>Metamask</b> to connect to these networks.</p>
  </div>
</div>
`


const defi = `<table class="w-full border-collapse border border-gray-700 text-white">
        <thead>
          <tr class="bg-gray-900 text-left">
            <th class="p-3 border border-gray-700">DeFi</th>
            <th class="p-3 border border-gray-700">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-gray-800">
            <td class="p-3 border border-gray-700">Uniswap</td>
            <td class="p-3 border border-gray-700">
              Router, multicall, factory, quoter, and more <br/>
              <a href="https://github.com/Uniswap/contracts/blob/bf676eed3dc31b18c70aba61dcc6b3c6e4d0028f/deployments/10143.md#quoter-v2" target="_blank" class="text-blue-400 hover:underline">Uniswap</a> <br/>
            </td>
          </tr>
        </tbody>
      </table>`;

const hardhatConfig = `<pre>
<code class="bg-gray-800 text-gray-300 p-1 rounded">
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    somnia: {
      url: "https://dream-rpc.somnia.network",
      accounts: ["YOUR_PRIVATE_KEY"],
    },
  },
  sourcify: {
    enabled: false,
  },
  etherscan: {
    apiKey: {
      somnia: "empty",
    },
    customChains: [
      {
        network: "somnia",
        chainId: 50312,
        urls: {
          apiURL: "https://shannon-explorer.somnia.network/api",
          browserURL: "https://shannon-explorer.somnia.network",
        },
      },
    ],
  },
};

export default config;

// ✅ Verification Commands
// Replace placeholders with actual deployed contract address & arguments

// Verify with constructor arguments
npx hardhat verify --network somnia DEPLOYED_CONTRACT_ADDRESS "ConstructorArgument1" ...

// Verify contract with deployer wallet address
npx hardhat verify --network somnia 0xYourContractAddress "YourDeployerWalletAddress"
</code>
</pre>
`

const faucet_providers = `<div class="text-white">
  <table class="w-full border-collapse border border-gray-700">
    <thead>
      <tr class="bg-gray-900 text-left">
        <th class="p-3 border border-gray-700">Faucet Provider</th>
        <th class="p-3 border border-gray-700">Link</th>
      </tr>
    </thead>
    <tbody>
      <tr class="bg-gray-800">
        <td class="p-3 border border-gray-700">Google Cloud Faucet</td>
        <td class="p-3 border border-gray-700">
          <a href="https://cloud.google.com/application/web3/faucet/somnia/shannon" 
             target="_blank" 
             class="text-blue-400 hover:underline">
            https://cloud.google.com/application/web3/faucet/somnia/shannon
          </a>
        </td>
      </tr>
      <tr class="bg-gray-900">
        <td class="p-3 border border-gray-700">Stakely</td>
        <td class="p-3 border border-gray-700">
          <a href="https://stakely.io/faucet/somnia-testnet-stt" 
             target="_blank" 
             class="text-blue-400 hover:underline">
            https://stakely.io/faucet/somnia-testnet-stt
          </a>
        </td>
      </tr>
      <tr class="bg-gray-800">
        <td class="p-3 border border-gray-700">Thirdweb Faucet</td>
        <td class="p-3 border border-gray-700">
          <a href="https://thirdweb.com/somnia-shannon-testnet" 
             target="_blank" 
             class="text-blue-400 hover:underline">
            https://thirdweb.com/somnia-shannon-testnet
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</div>
`;

export { accountabstraction, oracle, faucet_providers, subgraphs, crosschain, indexer, walletinfra, rpcs, defi, hardhatConfig, network_info };
