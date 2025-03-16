import { Options } from './Options';
import { Database } from './Database';
import { ConnStr } from './ConnStr';

export default function (options?: Options): Database;
export default function (): any {}

export * from './Database';
export * from './ODBC';
export * from './ODBCConnection';
export * from './ODBCStatement';
export * from './ODBCResult';

export function getElapsedTime(): string;
export function getElapsedTime(): any {}

export function debug(x: boolean | number): void {}

export function open(
  connStr: string | ConnStr,
  options: Options | null,
  cb?: (err: Error, db: Database) => void
): void;
export function open(
  connStr: string | ConnStr,
  cb?: (err: Error, db: Database) => void
): void;
export function open(
  connStr: string | ConnStr,
  options?: Options | null
): Promise<Database>;
export function open(): any {}

export function openSync(
  connStr: string | ConnStr,
  options?: Options
): Database;
export function openSync(): any {}
