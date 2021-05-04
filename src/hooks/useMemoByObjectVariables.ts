/**
 * Copyright (c) Ladifire, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

import {areEqual} from '../utils';

const j = 0;

export function useMemoByObjectVariables(a) {
    const _ref = React.useRef(j);
    const [state, setState] = React.useState(a);

    const _areEqual = !areEqual(a, state);
    if (_areEqual) {
        _ref.current += 1;
        setState(a);
    }

    const f = React.useMemo(function() {
        return a
    }, [_ref.current]);

    return React.useMemo(function() {
        return [f, _ref.current]
    }, [f])
}
