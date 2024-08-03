---
to: src/<%= h.inflection.transform(name, ['pluralize', 'underscore', 'dasherize']) %>/dto/create-<%= h.inflection.transform(name, ['underscore', 'dasherize']) %>.dto.ts
---
export class Create<%= name %>Dto {

  // @custom-inject-point
  // Don't forget to use the class-validator decorators in the DTO properties.
}
