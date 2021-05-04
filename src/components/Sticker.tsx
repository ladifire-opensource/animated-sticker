/**
 * Copyright (c) Ladifire, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

import stylex from '@ladifire-opensource/stylex';
import {CometAspectRatioContainer} from "src/components/CometAspectRatioContainer";
import {CometAnimatedSticker} from "src/components/CometAnimatedSticker";

const styles = stylex.create({
    root: {
        width: 58,
        height: 58,
    },
    sticker: {
        width: '100%',
        height: '100%',
    },
});

interface Props {
    frameCount: number;
    frameRate: number;
    framesPerCol: number;
    framesPerRow: number;
    spriteImg: string;
}

export const Sticker = (props: Props) => {
    const {
        frameCount,
        frameRate,
        framesPerCol,
        framesPerRow,
        spriteImg,
    } = props;

    return (
        <div className={stylex(styles.root)}>
            <CometAspectRatioContainer aspectRatio={1}>
                <CometAnimatedSticker
                    animationTriggers={{
                        hover: true,
                        load: false,
                    }}
                    cursorEnabled={true}
                    frameCount={frameCount}
                    frameRate={frameRate}
                    framesPerCol={framesPerCol}
                    framesPerRow={framesPerRow}
                    overlayEnabled={true}
                    showFocusOverlay={true}
                    showHoverOverlay={true}
                    uri={spriteImg}
                    xstyle={styles.sticker}
                />
            </CometAspectRatioContainer>
        </div>
    );
};
