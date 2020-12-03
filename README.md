# prismarine-world-sync
[![NPM version](https://img.shields.io/npm/v/prismarine-world-sync.svg)](http://npmjs.com/package/prismarine-world-sync)![CI](https://github.com/PrismarineJS/prismarine-world-sync/workflows/CI/badge.svg)

This module is deprecated, please use directly [prismarine world sync api](https://github.com/PrismarineJS/prismarine-world#worldsyncasyncworld)

A sync proxy to prismarine-world

To be used only if you really really have to, for example if you need to provide to use the world representation
 to implement a sync api (for example modpe).
 
If you have no such constraint, use prismarine-world instead.


## Usage

See [example.js](example.js)

## API

### World

#### WorldSync(world)

Create a world sync proxy from the async `world` instance

The rest of the api is the same than the one of
 [prismarine-world](https://github.com/PrismarineJS/prismarine-world#worldgetcolumns) except it returns values 
 instead of promise and is totally sync.



## History

### 0.1.0

* First version, basic functionality is implemented
