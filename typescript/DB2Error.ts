import { isObjectLike } from 'lodash';

export interface DB2Error extends Error {
  sqlcode: number;
  sqlstate: string;
  resultset?: Array<null | number | Buffer | string>;
}

export function isDB2Error(error: any): error is DB2Error {
  return (
    isObjectLike(error) &&
    typeof error.sqlcode == 'number' &&
    'sqlstate' in error
  );
}
