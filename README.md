# Linkable

A package enabling the creation of models who's data lives in one collection and is linked to many other collections. As an example, a like would be a linkable type since a like could be attached to a photo, comment, post, or any number of other elements of your app. This package enables you to create these types of relationships and then retrieve the linkable data based on the linked model.

This package is implemented in many of the [Socialize][socialize] packages such as, likeable, commentable, and postable. If you're just going to use this package to create this type of functionality you should check out those packages and use them instead.

>This is a [Meteor][meteor] package with part of it's code published as a companion NPM package made to work with clients other than Meteor. For example your server is Meteor, but you want to build a React Native app for the client. This allows you to share code between your Meteor server and other clients to give you a competitive advantage when bringing your mobile and web application to market.

<!-- TOC depthFrom:1 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->
- [Supporting The Project](#supporting-the-project)
- [Meteor Installation](#meteor-installation)
- [NPM Installation](#npm-installation)
- [Usage Outside Meteor](#usage-outside-meteor)
  - [React Native](#react-native)
- [Basic Usage](#basic-usage)
<!-- /TOC -->

## Supporting The Project

Finding the time to maintain FOSS projects can be quite difficult. I am myself responsible for over 30 personal projects across 2 platforms, as well as Multiple others maintained by the [Meteor Community Packages](https://github.com/meteor-community-packages) organization. Therfore, if you appreciate my work, I ask that you either sponsor my work through GitHub, or donate via Paypal or Patreon. Every dollar helps give cause for spending my free time fielding issues, feature requests, pull requests and releasing updates. Info can be found in the "Sponsor this project" section of the [GitHub Repo](https://github.com/copleykj/socialize-linkable-model)

## Meteor Installation

```shell
meteor add socialize:linkable-model
```

## NPM Installation

```shell
npm install --save @socialize/linkable-model
```

## Usage Outside Meteor

The client side parts of this package are published to NPM as `@socialize/cloudinary` for use in front ends outside of Meteor.

When using the npm package you'll need to connect to a server, which hosts the server side Meteor code for your app, using `Meteor.connect` as per the [@socialize/react-native-meteor usage example](https://github.com/copleykj/react-native-meteor#example-usage) documentation.

 ```javascript
Meteor.connect('ws://192.168.X.X:3000/websocket');
 ```

### React Native

When using this package with React Native there is some minor setup required by the `@socialize/react-native-meteor` package. See [@socialize/react-native-meteor react-native](https://github.com/copleykj/react-native-meteor#react-native) for necessary instructions.

## Basic Usage

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
import { Mongo } from '@socialize/react-native-meteor';
import { BaseModel } from '@socialize/base-model';
import { LinkableModel } from '@socialize/linkable-model';
import { LinkParent, LinkableModel } from '@socialize/linkable-model';
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

For a more in depth explanation of how to use this package see [API.md](api)

[meteor]: https://meteor.com
[socialize]: https://atmospherejs.com/socialize
[api]: https://github.com/copleykj/socialize-linkable-model/blob/master/API.md
