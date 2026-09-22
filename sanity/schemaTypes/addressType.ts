import { defineField, defineType } from "sanity";
import { HomeIcon } from "@sanity/icons";


export const addressType = defineType({
  name: 'address',
  title: 'Addresses',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Address Name',
      type: 'string',
      description: 'A friendly name for this address (e.g. Home, Work)',
      validation: (Rule) => Rule.required().max(50),
    }),
    defineField({
      name: 'email',
      title: 'User Email',
      type: 'email',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
      description: 'The street address including apartment/unit number',
      validation: (Rule) => Rule.required().min(5).max(100),
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'state',
      title: 'State',
      type: 'string',
      description: 'Two/Three letter State Code (e.g. DHK, CTG)',
      validation: (Rule) => Rule.required().length(3).uppercase(),
    }),
    defineField({
      name: 'zip',
      title: 'ZIP Code',
      type: 'string',
      description: 'Format: 1217 or 1217-1234',
      validation: (Rule) => 
        Rule.required()
            .regex(/^\d{5}(-\d{4})?$/, {
                name: 'zip',
                invert: false,
            })
            .custom((zip: string | undefined) => {
                if (!zip) {
                    return "ZIP Code is required";
                }
                if (!zip.match(/^\d{5}(-\d{4})?$/)) {
                    return "Please enter Valid ZIP Code (e.g. 12345 or 12345-12345)";
                }
                return true;
            }),
    }),
    defineField({
      name: 'default',
      title: 'Default Address',
      type: 'boolean',
      description: 'Is this the default shipping address?',
      initialValue: false,
    }),
    defineField({
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'address',
      city: 'city',
      state: 'state',
      isDefault: 'default',
    },
    prepare({ title, subtitle, city, state, isDefault }) {
      return {
        title: `${title}, ${isDefault ? '(Default)' : ''}`, subtitle: `${subtitle} ${city}, ${state}`,
      };
    },
  },
});