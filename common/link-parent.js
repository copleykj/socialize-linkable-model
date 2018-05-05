export default BaseModel =>
    /**
    * A Model that is linked to by LinkableModel's
    * @class LinkedModel
    */
    class LinkParent extends BaseModel {
        getLinkObject() {
            return { linkedObjectId: this._id, objectType: this._objectType };
        }
    }
;
