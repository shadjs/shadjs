export interface ShadrizDBStrategy {
  installDependencies: () => void;
  copyDrizzleConfig: () => void;
  copyMigrateScript: () => void;
  copySchema: () => void;
  appendDbUrl: () => void;
  copyDbInstance: () => void;
  scaffold: ({ table, columns }: { table: string; columns: string[] }) => void;
}

export interface ScaffoldOpts {
  table: string;
  columns: string[];
}

export interface ShadrizScaffoldUtils {
  addCodeToSchema: (opts: ScaffoldOpts) => void;
  getKeyValueStrForSchema: (column: string) => string;
  addListView: (opts: ScaffoldOpts) => void;
  addDetailView: (opts: ScaffoldOpts) => void;
  addEditView: (opts: ScaffoldOpts) => void;
  addNewView: (opts: ScaffoldOpts) => void;
  addCreateAction: (opts: ScaffoldOpts) => void;
  addUpdateAction: (opts: ScaffoldOpts) => void;
  addDeleteAction: (opts: ScaffoldOpts) => void;
  addColumnDef: (opts: ScaffoldOpts) => void;
  getColumnDefObjs: (columnName: string) => string;
  addForm: (opts: ScaffoldOpts) => void;
  getFormControlsHtml: (opts: ScaffoldOpts) => string;
}

export interface DataTypeStrategyOpts {
  columnName: string;
}

export interface DataTypeStrategy {
  jsType: string;
  formTemplate: string;
  getKeyValueStrForSchema: (opts: DataTypeStrategyOpts) => string;
}