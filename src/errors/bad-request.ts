import httpStatus from 'http-status';
import { ApplicationError } from '../protocols';

export function badRequest(message: string): ApplicationError {
  return {
    name: 'Bad Request',
    message,
    status: httpStatus.BAD_REQUEST,
  };
}
