import {createSelector} from 'reselect';

const selectDirectory = (store) => store.directory;

export const selectDirectorySections = createSelector(
    [selectDirectory],
    directory => directory.sections
)

