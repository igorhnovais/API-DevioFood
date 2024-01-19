import httpStatus from 'http-status';
import { ApplicationError } from '../protocols';

export function notFound(message: string): ApplicationError {
  return {
    name: 'Not Found',
    message: message || 'Not Found',
    status: httpStatus.NOT_FOUND,
  };
}
