# Creepts Map Pack

Creepts is a decentralized tower defense game that showcases [Cartesi](https://cartesi.io).

This repo hosts the maps and game configuration files that powers the Creepts Game Engine, which is designed to be exensible and not depend on the map or some game rules, like the player initial credits or number of lives.

## Usage

There are two main concepts: `Maps` and `Levels`:

### Maps

A `Map` is a definition of a grid with possible locations for turrets and a linear path for the enemies. If the map does not define the positions of turrets that means all locations (other than the path) are available.

All maps are stored as json files at `src/maps` in a structure that complies with the Creepts Engine `MapObject`.
A function is provided to load a map based on its name, which translates to the name of the json file:

```javascript
import { loadMap } from "@cartesi/creepts-mappack";

// load the map named original
const map: MapObject = loadMap("original");
```

For a complete list of available maps check the directory `src/maps`.

### Levels

A `Level` is consisted of a `Map`, a game configuration (like initial credits and lives), and a definition of the enemy waves.
`Levels` are not stored as json files is this repo. They are built based on a `MapObject` and a static set of configuration.
This configuration is stored as json files at `src/resources`, and that includes:

- `enemies.json`: attributes of every enemy type, like its life and speed
- `turrets.json`: basic attributes of every turret, like its price
- `waves.json`: an array that defines the waves of enemies

A function is provided to create a `LevelObject` from a `MapObject`:

```javascript
import { loadLevel } from "@cartesi/creepts-mappack";

// create a LevelObject from a MapObject
const level: LevelObject = loadLevel(map);
```

## Build

To get a list of all the available `npm` targets run:

    % npm run info

## Contributing

Thank you for your interest in Cartesi! Head over to our [Contributing Guidelines](CONTRIBUTING.md) for instructions on how to sign our Contributors Agreement and get started with Cartesi!

Please note we have a [Code of Conduct](CODE_OF_CONDUCT.md), please follow it in all your interactions with the project.

## License

This repository and all contributions are licensed under
[APACHE 2.0](https://www.apache.org/licenses/LICENSE-2.0). Please review our [LICENSE](LICENSE) file.

## Acknowledgments

- Original work
