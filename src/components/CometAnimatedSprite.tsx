/**
 * Copyright (c) Ladifire, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

import {useInvalidNumberThrowsViolation} from '../hooks/useInvalidNumberThrowsViolation';
// NOTE: this is not available for SHARE version
// import {useVisibilityObserver} from '@ladifire-internal-ui/observer-intersection';

import {useCometAnimationTrigger} from '../hooks/useCometAnimationTrigger';
import {useSpriteAnimation} from '../hooks/useSpriteAnimation';

import {CometSpriteBase} from './CometSpriteBase';

interface Props {
    animationTriggers?: any;
    frameCount: number;
    frameRate: number;
    framesPerCol: number;
    framesPerRow: number;
    repeatNumber?: number;
    spriteUri: string;
}

export function CometAnimatedSprite(props: Props) {
    const {
        animationTriggers,
        frameCount,
        frameRate,
        framesPerCol,
        framesPerRow,
        repeatNumber = 3,
        spriteUri,
        ...otherProps
    } = props;

    let k = React.useState(null),
        l: any = k[0];
    k = k[1];

    let c = useCometAnimationTrigger({
        animationTriggers: animationTriggers,
        frameCount: frameCount,
        frameRate: frameRate,
        iterationLimit: repeatNumber,
    });

    let m = c.duration,
        n = c.getShouldAnimate;
    let e = c.onHoverIn;
    let i = c.onLoad;
    let o = c.onNextAnimationIteration,
        p = useSpriteAnimation(frameCount, framesPerCol, framesPerRow);
    c = useInvalidNumberThrowsViolation(framesPerCol * 100);
    let d = useInvalidNumberThrowsViolation(framesPerRow * 100);

    // NOTE: This is not available for SHARE version
    // f = useVisibilityObserver({
    //     onVisible: i
    // });

    React.useEffect(() => {
        let a = l;
        if (a != null) {
            a.addEventListener("animationiteration", o);
            return function() {
                a.removeEventListener("animationiteration", o)
            }
        }
    }, [l, o]);
    return React.createElement(CometSpriteBase, Object.assign({}, otherProps, {
        animationStyle: function(a) {
            return n(a) ? {
                animationDuration: m + "ms",
                animationName: p
            } : {
                animation: "none"
            }
        },
        // containerRef: f, // NOTE: not available for SHARE version
        imgHeight: c + "%",
        imgRef: k,
        imgWidth: d + "%",
        onHoverIn: e,
        src: spriteUri
    }))
}
