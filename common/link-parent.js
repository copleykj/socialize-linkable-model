/* eslint-disable import/no-unresolved */
import { BaseModel } from 'meteor/socialize:base-model';
/* eslint-enable import/no-unresolved */

/**
 * A Model that is linked to by LinkableModel's
 * @class LinkedModel
 */
export class LinkParent extends BaseModel {
    getLinkObject() {
        return { linkedObjectId: this._id, objectType: this._objectType };
    }
}
