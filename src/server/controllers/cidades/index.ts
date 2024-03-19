import * as create from './Create';
import * as getAll from './GetAll';
import * as getById from './GetById';
import * as DeleteById from './DeleteById';
import * as UpdateById from './UpdateById';

export const CidadesController = {
  ...create,
  ...getAll,
  ...DeleteById,
  ...UpdateById,
  ...getById,
};

