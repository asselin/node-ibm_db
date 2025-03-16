import { Param, SQLParams } from './Database';
import { DB2Error } from './DB2Error';
import { ODBCResult } from './ODBCResult';

export class ODBCStatement {
  private constructor() {
    // Internal only
  }

  prepareSync(sql: string): boolean;
  prepareSync(): any {}

  closeSync(closeOption: number): true;
  closeSync(): any {}

  execute(
    params: SQLParams,
    cb: (
      err: DB2Error,
      result?: ODBCResult,
      outparams?: Array<null | number | boolean | string> | null
    ) => void
  ): void;
  execute(
    cb: (
      err: DB2Error,
      result?: ODBCResult,
      outparams?: Array<null | number | boolean | string> | null
    ) => void
  ): void;
  execute(
    params?: SQLParams
  ): Promise<
    [ODBCResult, Array<null | number | boolean | string>] | ODBCResult
  >;
  execute(): any {}

  executeSync(
    params?: SQLParams
  ): [ODBCResult, Array<null | number | boolean | string>] | ODBCResult | null;
  executeSync(): any {}

  executeDirect(
    sql: string,
    cb: (err: DB2Error | null, result?: ODBCResult) => void
  ): null;
  executeDirect(sql: string): Promise<ODBCResult>;
  executeDirect(): any {}

  executeNonQuery(
    params: SQLParams,
    cb: (err: DB2Error | null, res?: number) => void
  ): null;
  executeNonQuery(cb: (err: DB2Error | null, res?: number) => void): null;
  executeNonQuery(params?: SQLParams): Promise<number>;
  executeNonQuery(): any {}

  executeNonQuerySync(params: SQLParams): null | number;
  executeNonQuerySync(): any {}

  prepare(sql: string, cb: (err: DB2Error | null) => void): null;
  prepare(sql: string): Promise<true>;
  prepare(): any {}

  bind(params: SQLParams, cb: (err: DB2Error | null) => void): void;
  bind(cb: (err: DB2Error | null) => void): void;
  bind(params?: SQLParams): Promise<true>;
  bind(): any {}

  bindSync(params: SQLParams): boolean;
  bindSync(): any {}

  setAttr(
    attr: number,
    value: number | null | string,
    cb: (err: DB2Error | null) => void
  ): null;
  setAttr(attr: number, value: number | null | string): Promise<true>;
  setAttr(): any {}

  setAttrSync(attr: number, value: number | null | string): boolean;
  setAttrSync(): any {}

  close(closeOption: number, cb: (err: DB2Error | null) => void): void;
  close(cb: (err: DB2Error | null) => void): void;
  close(closeOption?: number): Promise<false>;
  close(): any {}
}
