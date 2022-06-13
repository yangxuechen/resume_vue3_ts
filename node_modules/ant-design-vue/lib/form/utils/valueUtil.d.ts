import type { InternalNamePath, NamePath } from '../interface';
/**
 * Convert name to internal supported format.
 * This function should keep since we still thinking if need support like `a.b.c` format.
 * 'a' => ['a']
 * 123 => [123]
 * ['a', 123] => ['a', 123]
 */
export declare function getNamePath(path: NamePath | null): InternalNamePath;
export declare function containsNamePath(namePathList: InternalNamePath[], namePath: InternalNamePath): boolean;
export declare function setValues<T>(store: T, ...restValues: T[]): T;
export declare function matchNamePath(namePath: InternalNamePath, changedNamePath: InternalNamePath | null): boolean;
