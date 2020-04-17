import {COMEDIES_DB} from '../../../../dataBase/comediesDB';
import {HORRORS_DB} from '../../../../dataBase/horrorsDB';
import {THRILLERS_DB} from '../../../../dataBase/thrillersDB';
import {ACTIONS_DB} from '../../../../dataBase/actionsDB';
import {DETECTIVE_STORY_DB} from '../../../../dataBase/detectiveStoryDB';

export const movieCategory = [
  {
    id: 0,
    type: 'Komedia',
    db: COMEDIES_DB
  },
  {
    id: 1,
    type: 'Horror',
    db: HORRORS_DB
  },
  {
    id: 2,
    type: 'Thriller',
    db: THRILLERS_DB
  },
  {
    id: 3,
    type: 'Akcja',
    db: ACTIONS_DB
  },
  {
    id: 4,
    type: 'Kryminał',
    db: DETECTIVE_STORY_DB
  },
]