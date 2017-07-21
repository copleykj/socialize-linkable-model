/* global Package */
Package.describe({
    name: 'socialize:linkable-model',
    summary: 'A package allowing linking of records in one collection with records from many other collections',
    version: '1.0.0',
    git: 'https://github.com/copleykj/socialize-linkable-model.git',
});

Package.onUse(function _(api) {
    api.versionsFrom('1.3');

    api.use('ecmascript');

    api.use(['socialize:base-model@1.0.0']);
    api.imply(['socialize:base-model']);

    api.mainModule('common/common.js');
});
