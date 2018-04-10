/* eslint-disable import/no-unresolved */
import { BaseModel } from 'meteor/socialize:base-model';
/* eslint-enable import/no-unresolved */

import LinkParentConstruct from './link-parent.js';
import LinkableModelConstruct from './linkable-model.js';

const LinkParent = LinkParentConstruct(BaseModel);
const LinkableModel = LinkableModelConstruct();

export { LinkableModel, LinkParent };
