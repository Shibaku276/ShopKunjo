import { defineArrayMember, defineField, defineType } from "sanity";
import { DocumentTextIcon } from '@sanity/icons';



export const blogType = defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      type: 'reference',
      to: [{ type: 'author' }],
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'blogCategories',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'blogCategory' }],
        }),
      ],
    }),
    defineField({
      name: 'isLatest',
      title: 'Latest Blog',
      type: 'boolean',
      description: 'Toogle to the latest on or off',
      initialValue: true,
    }),
    defineField({
      name: 'body',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
      isLatest: 'isLatest',
    },
    prepare(selection) {
      const {author, isLatest} = selection;  
      return {
        ...selection,
        subtitle: author && `${isLatest ? "Latest | " : ""} by ${author} : author`,
      };
    },
  },
});