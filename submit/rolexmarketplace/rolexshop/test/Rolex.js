const { expect } = require("chai")

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

const ID = 1
const NAME = "Watch"
const CATEGORY = "Rolex"
const IMAGE = "https://ipfs.io/ipfs/QmTYEboq8raiBs7GTUg2yLXB3PMz6HuBNgNfSZBx5Msztg/watch.jpg"
const COST = tokens(1)
const RATING = 4
const STOCK = 5

describe("Rolex", () => {
  let rolex
  let deployer, buyer

  beforeEach(async () => {
    // Setup accounts
    [deployer, buyer] = await ethers.getSigners()

    // Deploy contract
    const Rolex = await ethers.getContractFactory("Rolex")
    rolex = await Rolex.deploy()
  })

  describe("Deployment", () => {
    it("Sets the owner", async () => {
      expect(await rolex.owner()).to.equal(deployer.address)
    })
  })

  describe("Listing", () => {
    let transaction

    beforeEach(async () => {
      // List an item
      transaction = await rolex.connect(deployer).list(ID, NAME, CATEGORY, IMAGE, COST, RATING, STOCK)
      await transaction.wait()
    })

    it("Returns item attributes", async () => {
      const item = await rolex.items(ID)

      expect(item.id).to.equal(ID)
      expect(item.name).to.equal(NAME)
      expect(item.category).to.equal(CATEGORY)
      expect(item.image).to.equal(IMAGE)
      expect(item.cost).to.equal(COST)
      expect(item.rating).to.equal(RATING)
      expect(item.stock).to.equal(STOCK)
    })

    it("Emits List event", () => {
      expect(transaction).to.emit(rolex, "List")
    })
  })

  describe("Buying", () => {
    let transaction

    beforeEach(async () => {
      // List an item
      transaction = await rolex.connect(deployer).list(ID, NAME, CATEGORY, IMAGE, COST, RATING, STOCK)
      await transaction.wait()

      // Buy an item
      transaction = await rolex.connect(buyer).buy(ID, { value: COST })
      await transaction.wait()
    })


    it("Updates buyer's order count", async () => {
      const result = await rolex.orderCount(buyer.address)
      expect(result).to.equal(1)
    })

    it("Adds the order", async () => {
      const order = await rolex.orders(buyer.address, 1)

      expect(order.time).to.be.greaterThan(0)
      expect(order.item.name).to.equal(NAME)
    })

    it("Updates the contract balance", async () => {
      const result = await ethers.provider.getBalance(rolex.address)
      expect(result).to.equal(COST)
    })

    it("Emits Buy event", () => {
      expect(transaction).to.emit(rolex, "Buy")
    })
  })

  describe("Withdrawing", () => {
    let balanceBefore

    beforeEach(async () => {
      // List an item
      let transaction = await rolex.connect(deployer).list(ID, NAME, CATEGORY, IMAGE, COST, RATING, STOCK)
      await transaction.wait()

      // Buy an item
      transaction = await rolex.connect(buyer).buy(ID, { value: COST })
      await transaction.wait()

      // Check deployer balance before
      balanceBefore = await ethers.provider.getBalance(deployer.address)

      // Withdraw
      transaction = await rolex.connect(deployer).withdraw()
      await transaction.wait()
    })

    it('Updates the owner balance', async () => {
      const balanceAfter = await ethers.provider.getBalance(deployer.address)
      expect(balanceAfter).to.be.greaterThan(balanceBefore)
    })

    it('Updates the contract balance', async () => {
      const result = await ethers.provider.getBalance(rolex.address)
      expect(result).to.equal(0)
    })
  })
})