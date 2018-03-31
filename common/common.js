/* eslint-disable import/no-unresolved */
import { BaseModel } from 'meteor/socialize:base-model';
/* eslint-enable import/no-unresolved */

import LinkParentConstruct from './link-parent';

export const LinkParent = LinkParentConstruct(BaseModel);
export { LinkableModel } from './linkable-model';
