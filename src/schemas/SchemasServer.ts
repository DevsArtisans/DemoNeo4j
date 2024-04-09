import { mergeSchemas } from 'graphql-yoga';
import MemberSchema from './MemberSchema';
import TeamSchema from './TeamSchema';
import ActivityImplementationSchema from './ActivityImplementation';

const schema = mergeSchemas({
    schemas: [
        MemberSchema,
        TeamSchema,
        ActivityImplementationSchema
    ]
});

export default schema;