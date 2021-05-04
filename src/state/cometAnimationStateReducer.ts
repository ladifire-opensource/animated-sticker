/**
 * Copyright (c) Ladifire, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function _getInitialState() {
    return Object.freeze({
        hasAnimated: false,
        iterationIndex: 1,
        shouldAnimate: false
    })
}

function _reducer(state, action) {
    switch (action.type) {
        case "FORCE_STOP_ANIMATION":
            return l(state, action);
        case "RESTART_ANIMATION":
            return j(state, action);
        case "START_ANIMATION":
            return i(state, action);
        case "NEXT_ITERATION":
            return k(state, action);
        default:
            action.type;
            break
    }
    return state
}

function i(a, b) {
    b = a.hasAnimated;
    return b ? _reducer(a, {
        type: "RESTART_ANIMATION"
    }) : Object.assign({}, a, {
        shouldAnimate: true
    })
}

function j(a, b) {
    b = _reducer(a, {
        type: "FORCE_STOP_ANIMATION"
    });
    return Object.assign({}, b, {
        shouldAnimate: !0
    })
}

function k(a, b) {
    b = b.iterationLimit;
    var c = a.iterationIndex;
    b = c >= b;
    return Object.assign({}, a, {
        hasAnimated: b,
        iterationIndex: b ? 1 : c + 1
    })
}

function l(a, b) {
    return Object.assign({}, a, _getInitialState(), {
        shouldAnimate: false
    })
}

export const cometAnimationStateReducer = {
    getInitialState: _getInitialState,
    reducer: _reducer,
};
