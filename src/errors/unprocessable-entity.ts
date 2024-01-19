import httpStatus from 'http-status';

import { ApplicationError } from '../protocols';

export function unprocessableEntity(message: string): ApplicationError {
  return {
    name: 'Unprocessable Entity',
    message,
    status: httpStatus.UNPROCESSABLE_ENTITY,
  };
}
