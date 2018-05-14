const World = require('prismarine-world')('1.8')

const Chunk = require('prismarine-chunk')('1.8')
const Vec3 = require('vec3')

function generateSimpleChunk (chunkX, chunkZ) {
  const chunk = new Chunk()

  for (let x = 0; x < 16; x++) {
    for (let z = 0; z < 16; z++) {
      chunk.setBlockType(new Vec3(x, 50, z), 2)
      for (let y = 0; y < 256; y++) {
        chunk.setSkyLight(new Vec3(x, y, z), 15)
      }
    }
  }

  return chunk
}

const world = new World(generateSimpleChunk)

const WorldSync = require('./')

const worldSync = new WorldSync(world)

console.log(JSON.stringify(worldSync.getBlock(new Vec3(3, 50, 3)), null, 2))
console.log(JSON.stringify(worldSync.getBlock(new Vec3(3000, 50, 3)), null, 2))
