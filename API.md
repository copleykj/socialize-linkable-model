## LinkableModel (Abstract Class) ##

LinkableModel being an abstract class, must extend [BaseModel][2] using the ES2015 mix-in syntax. For more info please refer to the [MDN documentation][1] on class mix-ins.


### Static Methods ###

__registerParentModel(model)__ - Register a model that will the `LinkableModel` can link back to.

### Static Properties ###

__LinkableSchema__ - the schema that must be attached to any model that extends `LinkableModel` to add linkable information the the schema for that model.


### Instance Methods ###

__getCollectionForParentLink()__ - Get the collection reference on a registered Linkable type

__linkedParent()__ - Retrieve the object that is being linked to.


## LinkParent extends [BaseModel][2] ##

The `LinkParent` class is an extension of `BaseModel` that provides convenience methods for the parents links of `LinkableModel`'s

### Instance Methods ###

__getLinkObject__ - get an object that contains the `_id` and `objectType` info necessary to link LinkableModels to this model.



[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#Mix-ins
[2]: https://github.com/copleykj/socialize-base-model
