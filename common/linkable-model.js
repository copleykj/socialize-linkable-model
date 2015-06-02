/**
 * A scaffold for creating models which can link records from one collection to records from many other collections
 * @class LinkableModel
 */
LinkableModel = BaseModel.extend();

/**
 * The database object
 * @returns {Instance} An instance of varying types depending on what the comment linked to
 */
LinkableModel.prototype.linkedObject = function () {
    var collection = LinkableModel.getCollectionForRegisteredType(this.objectType);
    return collection.findOne(this.linkedObjectId);
};

//a place to store references to the collections where the commentable objects are stored.
var LinkableTypes = {};

/**
 * Register a data type that can be commented on storing its collection so we can find the object later
 * @param {String}           type       The name of the type
 * @param {Mongo.Collection} collection The collection where the type of data is stored
 */
LinkableModel.registerLinkableType = function (model, type) {
    model.prototype._objectType = type;

    LinkableTypes[type] = model.prototype._collection;
};

/**
 * Get the collection where a data type is stored
 * @param   {String}           type The name of the data type
 * @returns {Mongo.Collection} The Collection where the type of data is stored
 */
LinkableModel.getCollectionForRegisteredType = function (type) {
    return LinkableTypes[type];
};

LinkableModel.LinkableSchema = new SimpleSchema({
    "linkedObjectId":{
        type:String,
        regEx:SimpleSchema.RegEx.Id
    },
    "objectType":{
        type:String,
        optional:true,
        denyUpdate:true,
    }
});
