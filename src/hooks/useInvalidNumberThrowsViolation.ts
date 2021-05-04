/**
 * Copyright (c) Ladifire, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export function useInvalidNumberThrowsViolation(numberToCheck?: number, defaultMessage?: string) {
    if (!defaultMessage) {
        defaultMessage = 'Unexpected invalid number value';
    }

    if (!Number.isNaN(numberToCheck) && Number.isFinite(numberToCheck)) {
        return numberToCheck;
    }

    throw new Error(defaultMessage);
}
