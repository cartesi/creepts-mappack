// Copyright 2020 Cartesi Pte. Ltd.

// Licensed under the Apache License, Version 2.0 (the "License"); you may not 
// use this file except in compliance with the License. You may obtain a copy 
// of the license at http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software 
// distributed under the License is distributed on an "AS IS" BASIS, WITHOUT 
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the 
// License for the specific language governing permissions and limitations 
// under the License.


import { loadTurrets } from './turret';

test('turrets', () => {
    const turrets = loadTurrets();
    expect(turrets["projectile"].price).toBe(100);
    expect(turrets["laser"].price).toBe(150);
    expect(turrets["launch"].price).toBe(250);
    expect(turrets["glue"].price).toBe(500);
});
