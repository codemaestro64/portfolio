import { Contribution } from "@/types"

const label = "04. Open Source Contributions"
const title = "Contributions & Packages"
const subtitle = "Giving back to the community through open source contributions and maintained packages."

const items: Contribution[] = [{
  title: "ZeroChain",
  type: "Go App",
  description: "",
  tags: ["Go", "Blockchain"],
  href: "https://github.com/codemaestro64/zerochain"
}, {
  title: "Py-libp2p",
  type: "Python Library",
  description: "",
  tags: ["Python", "P2P"],
  href: "https://github.com/libp2p/py-libp2p"
}, {
  title: "DropText",
  type: "Node App",
  description: "",
  tags: ["Node.js", "React.js"],
  href: "https://github.com/codemaestro64/droptext"
}, {
  title: "ZeroChain",
  type: "Go App",
  description: "",
  tags: ["Go", "Blockchain"],
  href: "https://github.com/codemaestro64/zerochain"
}]

const contributions = {
  label,
  title,
  subtitle,
  items
}

export default contributions