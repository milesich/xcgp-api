import * as path from 'path';
import * as fs from 'fs';
import * as fse from 'fs-extra';
import { promisify } from 'util';

/**
 * resolve
 *
 * transform a path relative to absolute, if relative
 * path start with `graphdoc/` return absolute path to
 * plugins directory
 */
const MODULE_BASEPATH = 'graphdoc/';

export function resolve(relative: string): string {

  if (relative.slice(0, MODULE_BASEPATH.length) === MODULE_BASEPATH)
    return path.resolve(__dirname, '../../', relative.slice(MODULE_BASEPATH.length));

  return path.resolve(relative);
}

/**
 * Execute fs.read as Promise
 */
export const readFile = promisify(fs.readFile);
export const writeFile = promisify(fs.writeFile);
export const copyAll = promisify(fse.copy);
export const readDir = promisify(fs.readdir);
export const mkDir = promisify(fs.mkdir);
export const removeBuildDirectory = promisify(fse.remove);

/**
 * Create build directory from a templete directory
 */
export async function createBuildDirectory(buildDirectory: string, templateDirectory: string, assets: string[]) {

  await mkDir(path.resolve(buildDirectory));

  // read directory
  const files = await readDir(templateDirectory);
  await Promise.all(files

    // ignore *.mustache templates
    .filter(file => path.extname(file) !== '.mustache')

    // copy recursive
    .map(file => copyAll(
      path.resolve(templateDirectory, file),
      path.resolve(buildDirectory, file),
    ))
  );

  // create assets directory
  if (assets.length) {
    await mkDir(path.resolve(buildDirectory, 'assets'));

    await Promise.all(assets
      .map(asset => copyAll(
        asset,
        path.resolve(buildDirectory, 'assets', path.basename(asset))
      ))
    );
  }
}
