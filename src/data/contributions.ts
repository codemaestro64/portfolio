import { Contribution } from "@/types"

const label = "04. Open Source Contributions"
const title = "Contributions & Packages"
const subtitle = "Giving back to the community through open source contributions and maintained packages."

const items: Contribution[] = [
  {
    title: "Vesper",
    type: "No Code Smart Contract Builder",
    description: "Vesper is an open-source, no-code Solidity smart contract builder for the Web3 ecosystem.",
    tags: ["Next.js", "React.js", "Solidity", "Web3"],
    href: "https://github.com/codemaestro64/vesper"
  },
  {
    title: "Flux",
    type: "Distributed System",
    description: "CP-consistent distributed rate limiting in Go. Uses Hashicorp Raft for log replication and gRPC streams for high-performance node communication.",
    tags: ["Go", "Distributed Systems", "Raft", "gRPC", "CAP Theorem"],
    href: "https://github.com/codemaestro64/flux"
  },
  {
    title: "Py-libp2p",
    type: "Open Source Contribution",
    description: "Contributed to the Python implementation of the libp2p modular networking stack, specifically working on transport layer fixes and interop compatibility.",
    tags: ["Python", "P2P", "libp2p", "Networking", "Open Source"],
    href: "https://github.com/libp2p/py-libp2p"
  }, 
  {
    title: "ZeroChain",
    type: "Blockchain Protocol",
    description: "A high-performance custom blockchain network featuring Proof-of-Work (PoW) consensus, ECC key generation, and SHA-256 block hashing.",
    tags: ["Go", "Blockchain", "P2P", "Cryptography", "Consensus"],
    href: "https://github.com/codemaestro64/Zero-Chain"
  }, 
  {
    title: "DropText",
    type: "Web Application",
    description: "A self-hosted, full-stack application for sharing and publishing plain text or code snippets with syntax highlighting support.",
    tags: ["Next.js", "TypeScript", "React", "Turborepo", "Tailwind CSS"],
    href: "https://github.com/codemaestro64/droptext"
  }
]

const contributions = {
  label,
  title,
  subtitle,
  items
}

export default contributions
