import { ODBC } from './ODBC';
import { SimpleQueue } from './SimpleQueue';
import { FetchMode } from './attributes';
import { Pool } from './Pool';

export interface Options {
  odbc?: ODBC;
  queue?: SimpleQueue | any[];
  fetchMode?: 0 | 3 | 4 | FetchMode | null;
  connected?: boolean;
  connectTimeout?: number | null;
  systemNaming?: boolean;
  codeSet?: string | null; //BUGBUG figure out this type
  mode?: string | null; //BUGBUG figure out this type
  pool?: Pool | null; //BUGBUG figure out this type
  connStr?: string | null; //BUGBUG figure out this type
}
