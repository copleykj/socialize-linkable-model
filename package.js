Package.describe({
    name: "socialize:linkable-model",
    summary: "A package allowing linking of records in one collection with records from many other collections",
    version: "0.4.1",
    git: "https://github.com/copleykj/socialize-linkable-model.git"
});

Package.onUse(function(api) {
    api.versionsFrom("1.0.2.1");

    api.use("ecmascript");

    api.use("socialize:base-model@1.0.0");

    api.imply("socialize:base-model");

    //Add the friend-model files
    api.addFiles("common/linkable-model.js");


    api.export(["LinkableModel"]);
});
