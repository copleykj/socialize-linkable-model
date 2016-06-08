# Linkable #

A package enabling the creation of models who's data lives in one collection and is linked to many other collections. As an example, a like would be a linkable type since a like could be attached to a photo, comment, post, or any number of other elements of your app. This package enables you to create these types of relationships and then retrieve the linkable data based on the linked model.

## Usage ##

For lack of a better example we will create a `Like` model using `LinkableModel` just as the `likeable` package does.

```javascript
import { BaseModel } from 'meteor/socialize:base-model';
import { LinkableModel } from 'meteor/socialize:linkable-model';
import { Mongo } from 'meteor/mongo';

//create a place to store the likes
const LikesCollection = new Mongo.Collection("likes");

//Like extends LinkableModel which in turn extends BaseModel
export class Like extends LinkableModel(BaseModel){
    //BaseModel needs the constructor to call super passing in the document
    constructor(document){
        super(document);
    }
}

//attach the collection to the model so we get models when we call find and findOne, and we can use BaseModel's CRUD methods.
Like.attachCollection(LikesCollection);

//finally we append the LinkableSchema so we are able to add the linking information.
Like.appendSchema(LinkableModel.LinkableSchema);
```

Now that we have a `Like` class which is Linkable, lets create a `Post` class extending `LinkedModel`.

```javascript
import { LinkedModel } from 'meteor/socialize:linkable-model';
import { Mongo } from 'meteor/mongo';
import { Like } from './like-model';

const PostsCollection = new Mongo.Collection("posts");

export class Post extends LinkedModel {
    constructor(document){
        super(document);
    }

    like() {
        //use LinkedModel's getLinkObject() method to get an object with the link information we need
        var link = this.getLinkObject();
        //create a new like using the link and save it.
        new Like(link).save();
    }
}
```
