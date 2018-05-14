const deasyncp = require('./deasyncp')

class WorldSync {
  constructor (world) {
    this.world = world
  }

  getColumn (chunkX, chunkZ) {
    return deasyncp(this.world.getColumn.bind(this.world))(chunkX, chunkZ)
  }

  setColumn (chunkX, chunkZ, chunk) {
    deasyncp(this.world.setColumn.bind(this.world))(chunkX, chunkZ, chunk)
  };

  getColumns () {
    return deasyncp(this.world.getColumns.bind(this.world))()
  };

  getColumnAt (pos) {
    return deasyncp(this.world.getColumnAt.bind(this.world))(pos)
  };

  setBlock (pos, block) {
    deasyncp(this.world.setBlock.bind(this.world))(pos, block)
  };

  getBlock (pos) {
    return deasyncp(this.world.getBlock.bind(this.world))(pos)
  };

  getBlockType (pos) {
    return deasyncp(this.world.getBlockType.bind(this.world))(pos)
  };

  getBlockData (pos) {
    return deasyncp(this.world.getBlockType.bind(this.world))(pos)
  };

  getBlockLight (pos) {
    return deasyncp(this.world.getBlockLight.bind(this.world))(pos)
  };

  getSkyLight (pos) {
    return deasyncp(this.world.getSkyLight.bind(this.world))(pos)
  };

  getBiome (pos) {
    return deasyncp(this.world.getBiome.bind(this.world))(pos)
  };

  setBlockType (pos, blockType) {
    deasyncp(this.world.setBlockType.bind(this.world))(pos, blockType)
  };

  setBlockData (pos, data) {
    deasyncp(this.world.setBlockData.bind(this.world))(pos, data)
  };

  setBlockLight (pos, light) {
    deasyncp(this.world.setBlockLight.bind(this.world))(pos, light)
  };

  setSkyLight (pos, light) {
    deasyncp(this.world.setSkyLight.bind(this.world))(pos, light)
  };

  setBiome (pos, biome) {
    deasyncp(this.world.setBiome.bind(this.world))(pos, biome)
  };
}

module.exports = WorldSync
