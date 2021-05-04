/**
 * Copyright (c) Ladifire, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

import {mergeRefs} from '../utils/mergeRefs';

export function useMergeRefs(...args: any[]) {
    let a = arguments.length, c = new Array(a);
    for (let d = 0; d < a; d++) c[d] = arguments[d];
    return React.useMemo(function() {
        return mergeRefs.apply(void 0, c)
    }, [].concat(c))
}
