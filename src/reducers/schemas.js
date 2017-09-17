import { normalize, schema, arrayOf} from 'normalizr'

const comment = new schema.Entity('comments');
const comments = new schema.Array(comment);
comment.define({parent_id: comment});

export {comment, comments}