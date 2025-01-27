export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://mirror-media.imgix.net/publication-images/Hd912XuoV8ekUmD_THtHV.jpeg",
      name: "Opside",
      description: "Opside is a decentralized ZK-Rollup-as-a-Service (ZK-RaaS) network, founded on the modular blockchain concept. By developing a sophisticated three-layer blockchain architecture, Opside combines the strengths of Proof-of-Stake (PoS) and Proof-of-Work (PoW) consensus mechanisms.",
      link: "https://opside.network/",
    },
    {
      id: 2,
      image: "https://www.gitbook.com/cdn-cgi/image/fit=contain,format=auto/https%3A%2F%2F4131980164-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FtnGKmRXvGruVbudW58tT%252Ficon%252F1dxhTHELYdIwHiuwIii4%252Felxrlogo.JPG%3Falt%3Dmedia%26token%3D96a69a43-2d2b-4b8a-8bec-8937b2d42066",
      name: "Elixir Protocol",
      description: "Elixir is a core layer of the DeFi tech stack, enabling projects to incentivize liquidity and algorithmic market making for their centralized and decentralized exchange pairs.",
      link: "https://elixir.finance/",
    },
    {
      id: 3,
      image: "https://impactprotocol.network/wp-content/uploads/2023/04/cropped-512-green-circle.png",
      name: "Impact Protocol",
      description: "Impact Protocol is a blockchain protocol that prioritizes individual sovereignty over centralized control, combining the best features from multiple specialized blockchains to offer fairer ways to access services through various apps and providers. ",
      link: "https://impactprotocol.network/",
    },
    {
      id: 4,
      image: "https://explorer.nodexcapital.com/logos/blockx.png",
      name: "BlockX",
      description: "An EVM+Cosmos Layer 1 blockchain ecosystem built for lightning-fast transactions and low gas fees, welcoming developers to build dApps seamlessly, fueled by multi-chain interoperability, sovereign identity, and off-chain oracles.",
      link: "https://www.blockxnet.com/",
    },
    {
      id: 5,
      image: "https://avatars.githubusercontent.com/u/72269913?s=208&v=4",
      name: "Pactus",
      description: "Pactus is built on the principle that a fair and transparent system can only be achieved through decentralization. Unlike many other blockchain platforms, Pactus aims to eliminate the potential for centralization and manipulation by removing the need for delegation and miners.",
      link: "https://pactus.org/",
    },
    {
      id: 6,
      image: "https://pbs.twimg.com/profile_images/1623574373868134402/itDrVBK9_400x400.jpg",
      name: "Creditcoin",
      description: "Build your credit operations on a blockchain tailored for auditability, transparency and trust - connecting borrowers and lenders across Web3.",
      link: "https://creditcoin.org/",
    }
  ];
  res.status(200).json(data);
};
