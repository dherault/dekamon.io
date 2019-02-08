import { randomArray } from '../utils'

function generateBattleMap() {
  return randomArray([
    [
      [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
      [2, 2, 1, 1, 4, 1, 1, 4, 1, 1, 3, 3],
      [2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3],
      [2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3],
      [2, 2, 1, 1, 4, 1, 1, 4, 1, 1, 3, 3],
      [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
    ],
    [
      [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 2, 1, 1, 1, 1, 1, 1, 3, 0, 0],
      [0, 2, 1, 1, 4, 1, 1, 4, 1, 1, 3, 0],
      [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
      [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
      [0, 2, 1, 1, 4, 1, 1, 4, 1, 1, 3, 0],
      [0, 0, 2, 1, 1, 1, 1, 1, 1, 3, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
    ],
  ])
}

export default generateBattleMap

export const VOID_TILE = 0
export const EMPTY_TILE = 1
export const ALLY_START_TILE = 2
export const ENNEMY_START_TILE = 3
export const BLOCKED_TILE = 4
