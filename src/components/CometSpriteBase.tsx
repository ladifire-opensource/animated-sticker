/**
 * Copyright (c) Ladifire, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

import stylex from '@ladifire-opensource/stylex';

import {useMergeRefs} from '../hooks/useMergeRefs';

const styles = stylex.create({
    innerSprite: {
        animationDelay: "0s",
        animationFillMode: "forwards",
        animationIterationCount: "infinite",
        animationPlayState: "running",
        animationTimingFunction: "steps(1)",
        position: "absolute",
        start: 0,
        top: 0
    },
    spriteButton: {
        overflow: "hidden",
        position: "relative",
        ":active": {
            transform: "none"
        }
    }
});

interface Props {
    accessibilityCaption?: string;
    animationStyle?: React.CSSProperties;
    containerRef?: any;
    cursorEnabled?: boolean;
    imgHeight?: number;
    imgWidth?: number;
    imgRef?: any;
    linkProps?: any;
    onHoverIn?: () => void;
    onPress?: () => void;
    overlayEnabled?: boolean;
    pressableRef?: any;
    showFocusOverlay?: boolean;
    src?: string;
    style?: React.CSSProperties;
    xstyle?; any;
}

// Some of props are not available for SHARE version
// Only use in Ladifire internal version
export function CometSpriteBase(props: Props) {
    const {
        accessibilityCaption,
        animationStyle,
        containerRef,
        cursorEnabled = false,
        imgHeight,
        imgWidth,
        imgRef,
        linkProps,
        onHoverIn,
        onPress,
        overlayEnabled = false,
        pressableRef,
        showFocusOverlay = false,
        src,
        style,
        xstyle,
    } = props;

    const _mergeRefs = useMergeRefs(pressableRef, containerRef);

    return (
        <div
            ref={_mergeRefs}
            className={stylex([styles.spriteButton, xstyle])}
            onMouseOver={onHoverIn}
            style={style}
        >
            <img
                src={src}
                alt={accessibilityCaption}
                draggable={false}
                ref={imgRef}
                style={Object.assign({
                    height: imgHeight,
                    width: imgWidth
                }, animationStyle == null ? undefined : animationStyle())}
                className={stylex(styles.innerSprite)}
            />
        </div>
    );
}
