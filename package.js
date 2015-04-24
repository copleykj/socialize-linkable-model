Package.describe({
    name: "socialize:linkable-model",
    summary: "A package allowing linking of records in one collection with records from many other collections",
    version: "0.1.0",
    git: "https://github.com/copleykj/socialize-linkable-model.git"
});

Package.onUse(function(api) {
    api.versionsFrom("1.0.2.1");

    api.use([
        "meteor", "mongo", "underscore", "socialize:base-model@0.1.2", "aldeed:simple-schema@1.3.0",
    ]);

    //Add the friend-model files
    api.addFiles("common/linkable-model.js");


    api.export(["LinkableModel"]);
});
