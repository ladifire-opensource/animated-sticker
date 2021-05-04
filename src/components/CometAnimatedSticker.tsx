/**
 * Copyright (c) Ladifire, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

import {CometAnimatedSprite} from './CometAnimatedSprite';

interface Props {
    alt?: string;
    frameCount: number;
    frameRate: number;
    framesPerCol: number;
    framesPerRow: number;
    uri: string;
}

export function CometAnimatedSticker(props: Props) {
    const {
        alt,
        frameCount,
        frameRate,
        framesPerCol,
        framesPerRow,
        uri,
        ...otherProps
    } = props;

    return React.createElement(CometAnimatedSprite, Object.assign({}, otherProps, {
        accessibilityCaption: alt,
        frameCount: frameCount,
        frameRate: frameRate,
        framesPerCol: framesPerCol,
        framesPerRow: framesPerRow,
        spriteUri: uri,
    }))
}
