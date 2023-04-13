import { useEffect, useState } from 'react'
import { ethers } from 'ethers'

// Components
import Navigation from './components/Navigation'
import Section from './components/Section'
import Product from './components/Product'

// ABIs
import Rolex from './abis/Rolex.json'

// Config
import config from './config.json'

function App() {
  const [provider, setProvider] = useState(null)
  const [rolex, setRolex] = useState(null)

  const [account, setAccount] = useState(null)

  const [submariners, setsubmariners] = useState(null)
  const [explorers, setexplorers] = useState(null)
  const [oysters, setoysters] = useState(null)

  const [item, setItem] = useState({})
  const [toggle, setToggle] = useState(false)

  const togglePop = (item) => {
    setItem(item)
    toggle ? setToggle(false) : setToggle(true)
  }

  const loadBlockchainData = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    setProvider(provider)
    const network = await provider.getNetwork()

    const rolex = new ethers.Contract(config[network.chainId].rolex.address, Rolex, provider)
    setRolex(rolex)

    const items = []

    for (var i = 0; i < 9; i++) {
      const item = await rolex.items(i + 1)
      items.push(item)
    }

    const submariners = items.filter((item) => item.category === 'submariners')
    const explorers = items.filter((item) => item.category === 'explorers')
    const oysters = items.filter((item) => item.category === 'oysters')

    setsubmariners(submariners)
    setexplorers(explorers)
    setoysters(oysters)
  }

  useEffect(() => {
    loadBlockchainData()
  }, [])

  return (
    <div>
      <Navigation account={account} setAccount={setAccount} />

      <h2>Our Watches</h2>

      {submariners && explorers && oysters && (
        <>
          <Section title={"Explorers"} items={explorers} togglePop={togglePop} />
          <Section title={"Submariners"} items={submariners} togglePop={togglePop} />
          <Section title={"Oysters"} items={oysters} togglePop={togglePop} />
        </>
      )}

      {toggle && (
        <Product item={item} provider={provider} account={account} rolex={rolex} togglePop={togglePop} />
      )}
    </div>
  );
}

export default App;