/* eslint-disable import/no-unresolved */
import { BaseModel } from '@socialize/base-model';
/* eslint-enable import/no-unresolved */

import LinkParentConstruct from './common/link-parent';
import LinkableModelConstruct from './common/linkable-model';

const LinkParent = LinkParentConstruct(BaseModel);
const LinkableModel = LinkableModelConstruct();

export { LinkableModel, LinkParent };
