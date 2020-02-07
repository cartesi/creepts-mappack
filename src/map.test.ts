// Copyright 2020 Cartesi Pte. Ltd.

// Licensed under the Apache License, Version 2.0 (the "License"); you may not
// use this file except in compliance with the License. You may obtain a copy
// of the license at http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
// License for the specific language governing permissions and limitations
// under the License.

import { loadMap } from './map';

test('map original', () => {
    const map = loadMap('original');
    expect(map.name).toBe('The Original');
    expect(map.path.length).toBe(46);
    expect(map.plateaus.length).toBe(0);
    expect(map.size.r).toBe(15);
    expect(map.size.c).toBe(10);
});
