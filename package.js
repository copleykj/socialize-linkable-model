Package.describe({
    name: "socialize:linkable-model",
    summary: "A package allowing linking of records in one collection with records from many other collections",
    version: "0.2.0",
    git: "https://github.com/copleykj/socialize-linkable-model.git"
});

Package.onUse(function(api) {
    api.versionsFrom("1.0.2.1");

    api.use("socialize:base-model@0.2.3");
    api.imply("socialize:base-model");

    //Add the friend-model files
    api.addFiles("common/linkable-model.js");


    api.export(["LinkableModel"]);
});
