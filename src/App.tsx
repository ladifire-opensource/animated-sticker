/**
 * Copyright (c) Ladifire, Inc. And its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

import stylex from '@ladifire-opensource/stylex';

import {CometCard} from './components-shared-version/Card';
import {Text} from './components-shared-version/Text';
import {Sticker} from './components/Sticker';
import {_copyright} from './components/_copyright';

import './index.css';

// import some demo sticker sprite's images
// @ts-ignore
import spriteImg from './assets/images/sprite.png';
// @ts-ignore
import sprite_479784002807228 from './assets/images/sprite_479784002807228.png';
// @ts-ignore
import sprite_2061304330831698 from './assets/images/2061304330831698.png';
// @ts-ignore
import sprite_2 from './assets/images/sprite_2.png';

const styles = stylex.create({
    root: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 850,
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    card: {
        padding: 16
    },
    sticker: {
        width: '100%',
        height: '100%',
    },
});

interface StickerType {
    id: string;
    frameCount: number;
    frameRate: number;
    framesPerCol: number;
    framesPerRow: number;
    spriteImg: string;
}

export default () => {
    const _stickers: StickerType[] = [
        {
            id: '479784002807229',
            frameCount: 16,
            frameRate: 125,
            framesPerCol: 4,
            framesPerRow: 4,
            spriteImg: spriteImg,
        },
        {
            id: '479784002807228',
            frameCount: 12,
            frameRate: 83,
            framesPerCol: 3,
            framesPerRow: 4,
            spriteImg: sprite_479784002807228,
        },
        {
            id: '2061304330831698',
            frameCount: 15,
            frameRate: 83,
            framesPerCol: 4,
            framesPerRow: 4,
            spriteImg: sprite_2061304330831698,
        },
        {
            id: '2061304330831625',
            frameCount: 12,
            frameRate: 83,
            framesPerCol: 3,
            framesPerRow: 4,
            spriteImg: sprite_2,
        },
    ];
    return (
        <div className={stylex(styles.root)}>
            <CometCard
                dropShadow={1}
                background="white"
                xstyle={styles.card}
            >
                <_copyright/>
                <hr/>
                <Text>
                    Hover on stickers to see it animated
                </Text>
                <div>
                    {_stickers.map((sticker, index) => (
                        <Sticker
                            key={`sticker__${index}`}
                            frameCount={sticker.frameCount}
                            frameRate={sticker.frameRate}
                            framesPerCol={sticker.framesPerCol}
                            framesPerRow={sticker.framesPerRow}
                            spriteImg={sticker.spriteImg}
                        />
                    ))}
                </div>
            </CometCard>
        </div>
    );
}
