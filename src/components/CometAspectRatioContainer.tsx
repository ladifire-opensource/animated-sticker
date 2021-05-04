/*
 * Copyright 2020-present Ladifire. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import * as React from 'react';

import stylex from '@ladifire-opensource/stylex';

let i = stylex.create({
    container: {
        height: 0,
        position: "relative",
        width: "100%"
    },
    content: {
        alignItems: "stretch",
        borderStyle: "solid",
        borderWidth: 0,
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        flexShrink: 1,
        justifyContent: "space-between",
        margin: 0,
        minHeight: 0,
        minWidth: 0,
        padding: 0,
        zIndex: 0,
        bottom: 0,
        boxSizing: "border-box",
        right: 0,
        position: "absolute",
        left: 0,
        top: 0
    }
});

// SHARE version
export function CometAspectRatioContainer(a) {
    var c = a.aspectRatio,
        d = a.children,
        e = a.style,
        f = a.testid;
    f = a.xstyle;
    if (c <= 0) throw new Error("Aspect ratio must be a non-zero, positive number: " + c);
    return React.createElement("div", {
        className: stylex(i.container, f),
        "data-testid": void 0,
        style: Object.assign({}, e, {
            paddingTop: 100 / c + "%"
        }),
        children: d != null && React.createElement("div", {
            className: stylex(i.content),
            children: d
        })
    })
}
