import { SimpleSchema } from 'meteor/aldeed:simple-schema';

//a place to store references to the collections where the commentable objects are stored.
let LinkableTypes = {};

/**
 * A scaffold for creating models which can link records from one collection to records from many other collections
 * @mixin LinkableModel
 */
export let LinkableModel = Base => class extends Base {
    constructor(document) {
        super(document)
    }


    /**
     * linkedObject - Get the model for the linked record
     *
     * @return {Model}  A model of varying types depending on the linked objects type
     */
    linkedObject() {
        var collection = LinkableModel.getCollectionForRegisteredType(this.objectType);
        return collection.findOne(this.linkedObjectId);
    }

};

/**
 * Get the collection where a data type is stored
 * @param   {String}           type The name of the data type
 * @returns {Mongo.Collection} The Collection where the type of data is stored
 */
LinkableModel.getCollectionForRegisteredType = function(type) {
    return LinkableTypes[type];
};

/**
 * Register a data type that can be commented on storing its collection so we can find the object later
 * @param {BaseModel}           type       The name of the type
 * @param {Mongo.Collection} collection The collection where the type of data is stored
 */
LinkableModel.registerLinkableType = function(model) {
    let type = model.prototype.getCollectionName();

    model.prototype._objectType = type;

    LinkableTypes[type] = model.prototype.getCollection();
};

LinkableModel.LinkableSchema = new SimpleSchema({
    "linkedObjectId":{
        type:String,
        regEx:SimpleSchema.RegEx.Id
    },
    "objectType":{
        type:String,
        denyUpdate:true,
    }
});
