// Copyright 2020 Cartesi Pte. Ltd.

// Licensed under the Apache License, Version 2.0 (the "License"); you may not
// use this file except in compliance with the License. You may obtain a copy
// of the license at http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
// License for the specific language governing permissions and limitations
// under the License.

import { loadEnemies } from './enemy';

test('enemies', () => {
    const enemies = loadEnemies();
    expect(enemies['soldier'].life).toBe(300);
    expect(enemies['soldier'].speed).toBe(0.1);
    expect(enemies['soldier'].value).toBe(10);

    expect(enemies['runner'].life).toBe(200);
    expect(enemies['runner'].speed).toBe(0.2);
    expect(enemies['runner'].value).toBe(15);

    expect(enemies['healer'].life).toBe(400);
    expect(enemies['healer'].speed).toBe(0.1);
    expect(enemies['healer'].value).toBe(30);

    expect(enemies['blob'].life).toBe(600);
    expect(enemies['blob'].speed).toBe(0.05);
    expect(enemies['blob'].value).toBe(20);

    expect(enemies['flier'].life).toBe(400);
    expect(enemies['flier'].speed).toBe(0.15);
    expect(enemies['flier'].value).toBe(30);
});
