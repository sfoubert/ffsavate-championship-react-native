import { Fight } from '../../models/fight.model'
import { Athlete } from '../../models/athlete.model'

function isWinner(fight: Fight, athlete: Athlete): boolean {
  return athlete.id === fight.athlete1.id && fight.result === 'WIN'
    || athlete.id === fight.athlete2.id && fight.result === 'LOSE';
}

export default isWinner