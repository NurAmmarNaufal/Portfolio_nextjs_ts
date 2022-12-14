// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'

import experience from './experience'
import skill from './skill'
import pageInfo from './pageInfo'
import social from './social'
import projects from './projects'



export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    pageInfo, skill, experience, social, projects
  ]),
})
