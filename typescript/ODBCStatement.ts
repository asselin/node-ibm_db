import { Param } from './Database';
import { DB2Error } from './DB2Error';
import { ArrayParam } from './ODBC';
import { ODBCResult } from './ODBCResult';
import { SimpleQueue } from './SimpleQueue';

export class ODBCStatement {
  queue: SimpleQueue;
  bindQueue: SimpleQueue;

  private constructor() {
    // Internal only
  }

  _execute(
    cb: (
      err: DB2Error | null,
      result?: ODBCResult,
      outParams?: Array<null | number | boolean | string> | null
    ) => void
  ): void;
  _execute() {}

  _executeSync(
    params?: any[]
  ): [ODBCResult, Array<null | number | boolean | string>] | ODBCResult | null;
  _executeSync(): any {}

  _executeNonQuery(cb: (err: DB2Error | null, res?: number) => void): void;
  _executeNonQuery(): void {}

  _executeNonQuerySync(): null | number;
  _executeNonQuerySync(): any {}

  _executeDirect(
    sql: string,
    cb: (err: DB2Error | null, result?: ODBCResult) => void
  ): void;
  _executeDirect(): any {}

  _executeDirectSync(sql: string): ODBCResult | null;
  _executeDirectSync(): any {}

  prepareSync(sql: string): boolean;
  prepareSync(): any {}

  _prepare(
    sql: string,
    cb: (err: DB2Error | null, result?: true) => void
  ): void;
  _prepare(): any {}

  _bindSync(
    params: Array<ArrayParam | Buffer | string | null | number | boolean>
  ): boolean;
  _bindSync(): any {}

  _bind(params: any[], cb: (err: DB2Error | null, res?: true) => void): void;
  _bind(): any {}

  _setAttrSync(attr: number, value: number | null | string): boolean;
  _setAttrSync(): any {}

  _setAttr(
    attr: number,
    value: number | null | string,
    cb: (err: DB2Error | null, res?: true) => void
  ): void;
  _setAttr(): any {}

  _close(closeOption: number, cb: (err: DB2Error | null) => void): void;
  _close(cb: (err: DB2Error | null) => void): void;
  _close(): any {}

  closeSync(closeOption: number): true;
  closeSync(): any {}

  execute(
    params: any[],
    cb: (err: DB2Error, result: any[], outparams: any) => void
  ): void; // TODO: type of outparams is unknown
  execute(cb: (err: DB2Error, result: any[], outparams: any) => void): void;
  execute(params: any[]): Promise<{ result: any[]; outparams: any }>;
  execute(): any {}

  executeSync(params?: any[]): ODBCResult;
  executeSync(): any {}

  executeDirect(
    sql: string,
    cb: (err: DB2Error | null, result?: ODBCResult) => void
  ): null;
  executeDirect(sql: string): Promise<ODBCResult>;
  executeDirect(): any {}

  executeNonQuery(
    params: Param[],
    cb: (err: DB2Error | null, res?: number) => void
  ): null;
  executeNonQuery(cb: (err: DB2Error | null, res?: number) => void): null;
  executeNonQuery(params?: Param[]): Promise<void>;
  executeNonQuery(): any {}

  executeNonQuerySync(params: Param[]): null | number;
  executeNonQuerySync(): any {}

  prepare(sql: string, cb: (err: DB2Error | null) => void): null;
  prepare(sql: string): Promise<true>;
  prepare(): any {}

  bind(params: Param[], cb: (err: DB2Error | null) => void): void;
  bind(cb: (err: DB2Error | null) => void): void;
  bind(params?: Param[]): Promise<true>;
  bind(): any {}

  bindSync(params: Param[]): boolean;
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
