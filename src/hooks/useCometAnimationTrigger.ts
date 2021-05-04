/**
 * Copyright (c) Ladifire, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import {omit} from 'lodash';

import {useCometAnimationStateReducer} from './useCometAnimationStateReducer';
import {useMemoByObjectVariables} from './useMemoByObjectVariables';

function i(a, b) {
    if (!b) {
        b = {};
    }
    b = b.hovered;
    return b === !0 && a.hover === !0 ? !0 : !1
}

export function useCometAnimationTrigger(a) {
    var c = a.animationTriggers;
    a = omit(a, ["animationTriggers"]);
    var d = React.useRef(!1),
        e = useCometAnimationStateReducer(a);
    a = useMemoByObjectVariables(c);
    var f = a[0],
        g = React.useMemo(function() {
            return f.hover === !0 ? function() {
                e.startAnimation()
            } : void 0
        }, [e, f]),
        j = React.useMemo(function() {
            if (d.current === !1 && f.load === !0) return function() {
                d.current = !0, e.startAnimation()
            }
        }, [e, f]),
        k = React.useCallback(function(a) {
            return e.canAnimate || i(f, a)
        }, [e, f]);
    return React.useMemo(function() {
        return {
            duration: e.duration,
            getShouldAnimate: k,
            onHoverIn: g,
            onLoad: j,
            onNextAnimationIteration: e.nextAnimationIteration
        }
    }, [e, k, g, j])
}
