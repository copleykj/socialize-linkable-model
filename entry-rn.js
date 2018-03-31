/* eslint-disable import/no-unresolved */
import { BaseModel } from '@socialize/base-model';
/* eslint-enable import/no-unresolved */

import LinkParentConstruct from './common/link-parent';

export const LinkParent = LinkParentConstruct(BaseModel);
export { LinkableModel } from './common/linkable-model';
