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
import { Options } from 'clime';
import { OptionsResolver } from '../options-resolver';
import { IntegerValidator } from '../validators/integer.validator';
import { Resolver } from './resolver';

/**
 * Page size resolver
 */
export class PageSizeResolver implements Resolver {
    /**
     * Resolves a page size provided by the user.
     * @param {Options} options - Command options.
     * @param {string} altText - Alternative text.
     * @param {string} altKey - Alternative key.
     * @returns {Promise<number>}
     */
    async resolve(options: Options, altText?: string, altKey?: string): Promise<number> {
        const resolution = +(await OptionsResolver(
            options,
            altKey ? altKey : 'pageSize',
            () => undefined,
            altText ? altText : 'Enter page size:',
            'number',
            new IntegerValidator(),
        ));
        return resolution;
    }
}
