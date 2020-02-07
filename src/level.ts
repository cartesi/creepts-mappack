// Copyright 2020 Cartesi Pte. Ltd.

// Licensed under the Apache License, Version 2.0 (the "License"); you may not use
// this file except in compliance with the License. You may obtain a copy of the
// License at http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software distributed
// under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
// CONDITIONS OF ANY KIND, either express or implied. See the License for the
// specific language governing permissions and limitations under the License.


import { GameConstants, MapObject, LevelObject } from "@cartesi/creepts-engine";

import enemies from "./resources/enemies.json";
import turrets from "./resources/turrets.json";
import waves from "./resources/waves.json";

export default (map: MapObject): LevelObject => {
    // build level object using map and constant values
    return {
        engineVersion: GameConstants.VERSION,
        gameConfig: {
            timeStep: 0, // this value does not matter for offline run, actually it should not even exist
            runningInClientSide: false, // this variable should not exist
            enemySpawningDeltaTicks: GameConstants.ENEMY_SPAWNING_DELTA_TICKS,
            credits: GameConstants.INITIAL_CREDITS,
            lifes: GameConstants.INITIAL_LIFES,
            boardSize: map.size,
            enemiesPathCells : map.path,
            plateausCells: map.plateaus
        },
        enemiesData: enemies,
        turretsData: turrets,
        wavesData: waves
    }
};
