import { EntityMetadataMap } from '@ngrx/data';
export function nameFilter(entities: { name: string }[], search: string) {
  return entities.filter(e => -1 < e.name.indexOf(search));
}
export function sortByName(a: { name: string }, b: { name: string }): number {
  return a.name.localeCompare(b.name);
}
const entityMetadata: EntityMetadataMap = {
  Hero: { filterFn: nameFilter,
    sortComparer: sortByName},
  // Villain: {}
};

// because the plural of "hero" is not "heros"
const pluralNames = { Hero: 'Heroes' };

export const entityConfig = {
  entityMetadata,
  pluralNames
};