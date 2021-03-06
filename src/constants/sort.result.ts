import { IFolder } from '@core/interfaces/folder.interface';

export const FOLDER_SORT = {
  path: (a: IFolder, b: IFolder) => (a.path > b.path ? 1 : -1),
  size: (a: IFolder, b: IFolder) => (a.size < b.size ? 1 : -1),
};
