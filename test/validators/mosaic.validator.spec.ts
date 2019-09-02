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
import {expect} from 'chai';
import {MosaicsValidator, MosaicValidator} from '../../src/validators/mosaic.validator';

describe('mosaic  validator', () => {

    it('Valid mosaic (@aliasName)', () => {
        const mosaic = '@cat.currency::1000000';
        expect(new MosaicValidator().validate(mosaic, {name: 'mosaic', source: mosaic}))
            .to.be.equal(undefined);
    });

    it('Valid mosaic (hex)', () => {
        const mosaic = '85BBEA6CC462B244::1000000';
        expect(new MosaicValidator().validate(mosaic, {name: 'mosaic', source: mosaic}))
            .to.be.equal(undefined);
    });

    it('Invalid mosaic', () => {
        const mosaic = 'cat.currencxy::1000000';
        expect(() => {
            new MosaicValidator().validate(mosaic, {name: 'mosaic', source: mosaic});
        }).to.throws('Mosaic should be in the format (mosaicId(hex)|@aliasName)::absoluteAmount, ' +
            '(Ex: sending 1 cat.currency, @cat.currency::1000000)');
    });

    it('Invalid format', () => {
        const mosaic = 'cat.currencxy:1000000';
        expect(() => {
            new MosaicValidator().validate(mosaic, {name: 'mosaic', source: mosaic});
        }).to.throws('Mosaic should be in the format (mosaicId(hex)|@aliasName)::absoluteAmount, ' +
            '(Ex: sending 1 cat.currency, @cat.currency::1000000)');
    });
});

describe('mosaics  validator', () => {

    it('Valid mosaics (@aliasName)', () => {
        const mosaics = '@cat.currency::1000000,85BBEA6CC462B244::1000000';
        expect(new MosaicsValidator().validate(mosaics, {name: 'mosaics', source: mosaics}))
            .to.be.equal(undefined);
    });

    it('Invalid mosaic', () => {
        const mosaics = 'cat.currency::1000000,85BBEA6CC462B244::1000000';
        expect(() => {
            new MosaicValidator().validate(mosaics, {name: 'mosaics', source: mosaics});
        }).to.throws('Mosaic should be in the format (mosaicId(hex)|@aliasName)::absoluteAmount, ' +
            '(Ex: sending 1 cat.currency, @cat.currency::1000000)');
    });

    it('Invalid format', () => {
        const mosaics = 'cat.currency::100000085BBEA6CC462B244::1000000';
        expect(() => {
            new MosaicValidator().validate(mosaics, {name: 'mosaics', source: mosaics});
        }).to.throws('Mosaic should be in the format (mosaicId(hex)|@aliasName)::absoluteAmount, ' +
            '(Ex: sending 1 cat.currency, @cat.currency::1000000)');
    });
});