/* global Package */
Package.describe({
    name: 'socialize:linkable-model',
    summary: 'A package allowing linking of records in one collection with records from many other collections',
    version: '1.0.4',
    git: 'https://github.com/copleykj/socialize-linkable-model.git',
});

Package.onUse(function _(api) {
    api.versionsFrom('1.10.2');

    api.use(['socialize:base-model@1.1.4']);
    api.imply(['socialize:base-model']);

    api.mainModule('common/common.js');
});
