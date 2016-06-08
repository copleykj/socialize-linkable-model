import { BaseModel } from 'meteor/socialize:base-model';
/**
 * A Model that is linked to by LinkableModel's
 * @class LinkedModel
 */
export class ParentLink extends BaseModel {
    constructor(document) {
        super(document);
    }

    getLinkObject() {
        return {linkedObjectId:this._id, objectType:this._objectType};
    }
}
