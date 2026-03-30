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

### 0.2.0
* [Add repo commands workflow (#16)](https://github.com/PrismarineJS/prismarine-world-sync/commit/dc5093f8ffae6cfa0f5018168668beb5ff3e377e) (thanks @rom1504)
* [Update CI to Node 24 (#15)](https://github.com/PrismarineJS/prismarine-world-sync/commit/12773d26f3c6a8200c1f80dec88dc4a21539ffcc) (thanks @rom1504)
* [Fix publish workflow for trusted publishing (#14)](https://github.com/PrismarineJS/prismarine-world-sync/commit/7fd1b1787dee7638e53908216e2546b9a91e0997) (thanks @rom1504)
* [Switch to trusted publishing via OIDC (#13)](https://github.com/PrismarineJS/prismarine-world-sync/commit/07661c6e92017033933db478081c36e54026ac2f) (thanks @rom1504)
* [Bump standard from 16.0.4 to 17.0.0 (#11)](https://github.com/PrismarineJS/prismarine-world-sync/commit/2f624ca1fa81ae7cddb3ecf0574d93b9548ed2cc) (thanks @dependabot[bot])
* [Bump minecraft-data from 2.221.0 to 3.1.1 (#12)](https://github.com/PrismarineJS/prismarine-world-sync/commit/56fe5917e9bbae83297b8772711b5845b0a3dd59) (thanks @dependabot[bot])
* [Upgrade to GitHub-native Dependabot (#9)](https://github.com/PrismarineJS/prismarine-world-sync/commit/50556221003d61db7fd4254e7c8840276b33001b) (thanks @dependabot-preview[bot])
* [add github actions and remove circleci (#8)](https://github.com/PrismarineJS/prismarine-world-sync/commit/4f9cfc1981c57b94ad3443baa27fa5bdd594a11a) (thanks @Darkflame72)
* [Bump standard from 14.3.4 to 16.0.0 (#7)](https://github.com/PrismarineJS/prismarine-world-sync/commit/1e08fe8d5198fcc01bcd4e23fda976c49da1e0fe) (thanks @dependabot-preview[bot])
* [add deprecation notice](https://github.com/PrismarineJS/prismarine-world-sync/commit/704963bd08578131187a778dc061272cb25271ce) (thanks @rom1504)
* [Merge pull request #4 from PrismarineJS/dependabot/npm_and_yarn/prismarine-world-3.0.0](https://github.com/PrismarineJS/prismarine-world-sync/commit/381176b03e83d3a8f1d8f5b556827f484b7462c5) (thanks @rom1504)
* [Bump prismarine-world from 2.3.0 to 3.0.0](https://github.com/PrismarineJS/prismarine-world-sync/commit/292a2dd38b9ba9791e0a84ecb5320f7da69ed1d2) (thanks @dependabot-preview[bot])
* [Merge pull request #3 from PrismarineJS/dependabot/npm_and_yarn/prismarine-chunk-1.16.0](https://github.com/PrismarineJS/prismarine-world-sync/commit/d9d9d059b71f0634654c9494de83bedab1353f59) (thanks @rom1504)
* [Update package.json](https://github.com/PrismarineJS/prismarine-world-sync/commit/2eea0ce8d190011b187b0b602518a5cbae2668f2) (thanks @rom1504)
* [Bump prismarine-chunk from 1.9.0 to 1.16.0](https://github.com/PrismarineJS/prismarine-world-sync/commit/8bce79295c3a53fe16212c0cd164a283b178fbda) (thanks @dependabot-preview[bot])
* [Merge pull request #2 from PrismarineJS/dependabot/npm_and_yarn/standard-14.3.4](https://github.com/PrismarineJS/prismarine-world-sync/commit/e63c1eb44fa6bfb7cfaacf9f693e411182ce8177) (thanks @rom1504)
* [standard fix](https://github.com/PrismarineJS/prismarine-world-sync/commit/54af8fdefd271ebae62c0499862fbb3b0e8d01db) (thanks @rom1504)
* [Bump standard from 11.0.1 to 14.3.4](https://github.com/PrismarineJS/prismarine-world-sync/commit/50ca084056936fc4dd1cd9de0ea02423c527049d) (thanks @dependabot-preview[bot])
* [circle ci 2](https://github.com/PrismarineJS/prismarine-world-sync/commit/bff68415d44f1f4d001d82e70b906d340013d819) (thanks @rom1504)
* [use standardjs](https://github.com/PrismarineJS/prismarine-world-sync/commit/043c3e24de33e90f4571d0c74d7dad5b5fb300e2) (thanks @rom1504)

### 0.1.0

* First version, basic functionality is implemented
