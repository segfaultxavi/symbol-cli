/*
 *
 * Copyright 2018-present NEM
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import { expect } from 'chai';
import { HexAddressResolver } from '../../src/resolvers/hexAddress.resolver';

describe('Hex address resolver', () => {
    it('should return hex address', async () => {
        const address = '903691134BBFB3CC63FA43AE4815B0B6D100DB194351AF09';
        const options = { address } as any;
        expect(await new HexAddressResolver().resolve(options)).to.be.equal(address);
    });

    it('should change key', async () => {
        const key = '903691134BBFB3CC63FA43AE4815B0B6D100DB194351AF09';
        const options = { key } as any;
        expect(await new HexAddressResolver().resolve(options, 'altText', 'key')).to.be.equal(key);
    });
});
