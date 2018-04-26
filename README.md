# Linkable

A package enabling the creation of models who's data lives in one collection and is linked to many other collections. As an example, a like would be a linkable type since a like could be attached to a photo, comment, post, or any number of other elements of your app. This package enables you to create these types of relationships and then retrieve the linkable data based on the linked model.

This package is implemented in many of the [Socialize][socialize] packages such as, likeable, commentable, and postable. If you're just going to use this package to create this type of functionality you should check out those packages and use them instead.

>This is a [Meteor][meteor] package with part of it's code published as a companion NPM package made to work with React Native. This allows your Meteor and React Native projects that use this package to share code between them to give you a competitive advantage when bringing your mobile and web application to market.

## Supporting the Project
In the spirit of keeping this and all of the packages in the [Socialize][socialize] set alive, I ask that if you find this package useful, please donate to it's development.

Litecoin: LXLBD9sC5dV79eQkwj7tFusUHvJA5nhuD3 / [Patreon](https://www.patreon.com/user?u=4866588) / [Paypal](https://www.paypal.me/copleykj)

## Meteor Installation

```shell
$ meteor add socialize:linkable-model
```

## React Native Installation

```shell
$ npm install --save @socialize/linkable-model
```

> **Note**
>
>  When using with React Native, you'll need to connect to a server which hosts the server side Meteor code for your app using `Meteor.connect` as per the [@socialize/react-native-meteor](https://www.npmjs.com/package/@socialize/react-native-meteor#example-usage) documentation.

## Usage

For lack of a better example we will create a `Like` model using `LinkableModel` just as the `likeable` package does.

First we import the necessary classes for the proper environment.

```javascript
// Meteor Imports
import { Mongo } from 'meteor/mongo';
import { BaseModel } from 'meteor/socialize:base-model';
import { LinkableModel } from 'meteor/socialize:linkable-model';
import { LinkParent, LinkableModel } from 'meteor/socialize:linkable-model';
```

```javascript
// React Native Imports
import { Mongo } from 'meteor/mongo';
import { BaseModel } from 'meteor/socialize:base-model';
import { LinkableModel } from 'meteor/socialize:linkable-model';
import { LinkParent, LinkableModel } from 'meteor/socialize:linkable-model';
```
Now that we have imported our necessary classes for either Meteor or React Native, we can use the following code in both environments.

```javascript
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

[meteor]: https://meteor.com
[socialize]: https://atmospherejs.com/socialize
