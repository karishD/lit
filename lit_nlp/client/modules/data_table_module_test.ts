/**
 * @license
 * Copyright 2020 Google LLC
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
 */

import 'jasmine';

import {DataTableModule} from './data_table_module';

describe('formatForDisplay test', () => {
  const dataTableModule = new DataTableModule();

  it('formats string for display', () => {
    const testString = 'test';
    const formatted = dataTableModule.formatForDisplay(testString);
    expect(formatted).toBe(testString);
  });

  it('formats number for display', () => {
    const formatted = dataTableModule.formatForDisplay(1.23456789);
    expect(formatted).toBe('1.2346');
  });

  it('formats boolean for display', () => {
    let formatted = dataTableModule.formatForDisplay(true);
    expect(formatted).toBe('✔');

    formatted = dataTableModule.formatForDisplay(false);
    expect(formatted).toBe(' ');
  });

  it('formats array for display', () => {
    // number array.
    let formatted = dataTableModule.formatForDisplay([1.23456789, 2.3456789]);
    expect(formatted).toBe('1.2346, 2.3457');

    // number|string array.
    formatted = dataTableModule.formatForDisplay(['a', 1.23456789, 2.3456789]);
    expect(formatted).toBe('a, 1.2346, 2.3457');

    // string array
    formatted = dataTableModule.formatForDisplay(['a', 'b', 'cd']);
    expect(formatted).toBe('a, b, cd');
  });
});
