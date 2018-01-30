# Linkable #

A package enabling the creation of models who's data lives in one collection and is linked to many other collections. As an example, a like would be a linkable type since a like could be attached to a photo, comment, post, or any number of other elements of your app. This package enables you to create these types of relationships and then retrieve the linkable data based on the linked model.

This package is implemented in many of the [Socialize](https://atmospherejs.com/socialize) packages such as, likeable, commentable, and postable. If you're just going to use this package to create this type of functionality you should check out those packages and use them instead.

## Supporting the Project ##
In the spirit of keeping this and all of the packages in the [Socialize](https://atmospherejs.com/socialize) set alive, I ask that if you find this package useful, please donate to it's development.

Litecoin: LXLBD9sC5dV79eQkwj7tFusUHvJA5nhuD3 / [Patreon](https://www.patreon.com/user?u=4866588) / [Paypal](https://www.paypal.me/copleykj)

## Installation ##

```shell
$ meteor add socialize:linkable
```

## Usage ##

For lack of a better example we will create a `Like` model using `LinkableModel` just as the `likeable` package does.

```javascript
import { BaseModel } from 'meteor/socialize:base-model';
import { LinkableModel } from 'meteor/socialize:linkable-model';
import { Mongo } from 'meteor/mongo';

//create a place to store the likes
const LikesCollection = new Mongo.Collection("likes");

//Like extends LinkableModel which in turn extends BaseModel
export class Like extends LinkableModel(BaseModel){}

//attach the collection to the model so we get models when we call find and findOne, and we can use BaseModel's CRUD methods.
Like.attachCollection(LikesCollection);

//finally we append the LinkableSchema so we are able to add the linking information.
Like.appendSchema(LinkableModel.LinkableSchema);
```

Now that we have a `Like` class which is Linkable, lets create a `Post` class extending `LinkParent`.

```javascript
import { LinkParent, LinkableModel } from 'meteor/socialize:linkable-model';
import { Mongo } from 'meteor/mongo';
import { Like } from './like-model';

//create a place to store our posts
const PostsCollection = new Mongo.Collection("posts");

//create Post class which extends LinkParent
export class Post extends LinkParent {
    like() {
        //use getLinkObject() method inherited from LinkParent to get an object with the link information we need
        var link = this.getLinkObject();
        //create a new like using the link and save it.
        new Like(link).save();
    }
}

//register Post as a possible parent which can be linked to.
LinkableModel.registerParentModel(Post);
```

For a more in depth explanation of how to use this package see [API.md](API.md)
