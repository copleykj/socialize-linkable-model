# Linkable #

A package enabling the creation of models who's data lives in one collection and is linked to many other collections.

## LinkableModel - Extends BaseModel ##

### Static Methods ###

**LinkableModel.registerLinkableType(type, collection)** - Register a child model as a linkable type

**LinkableModel.getCollectionForRegisteredType(type)** - Get the collection reference on a registered Linkable type

### Prototypal Methods ###

**LinkableModel.prototype.linkedObject** - Retrieve the object that is being linked to.




