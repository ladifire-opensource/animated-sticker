/**
 * Copyright (c) Ladifire, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

import {cometAnimationStateReducer} from '../state/cometAnimationStateReducer';


export function useCometAnimationStateReducer(a) {
    var c = a.frameCount,
        d = a.frameRate,
        e = a.iterationLimit;
    a = React.useReducer(cometAnimationStateReducer.reducer, null, cometAnimationStateReducer.getInitialState);
    var f = a[0],
        g = a[1],
        i = f.shouldAnimate && !f.hasAnimated,
        j = d * c;
    return React.useMemo(function() {
        return {
            canAnimate: i,
            duration: j,
            nextAnimationIteration: function() {
                g({
                    iterationLimit: e,
                    type: "NEXT_ITERATION"
                })
            },
            startAnimation: function() {
                g({
                    type: "START_ANIMATION"
                })
            }
        }
    }, [i, j, e])
}
