export const CreateOfferValidationMessage = {
  title: {
    minLength: 'Minimum title length must be 10',
    maxLength: 'Maximum title length must be 100',
  },
  description: {
    minLength: 'Minimum description length must be 20',
    maxLength: 'Maximum description length must be 1024',
  },
  createDate: {
    invalidFormat: 'postDate must be a valid ISO date',
  },
  previewImage: {
    maxLength: 'Too short for field «image»',
  },
  type: {
    invalid:
        'The city must be one of the following: Paris, Cologne, Hamburg, Dusseldorf, Brussels',
  },
  images: {
    invalidFormat: 'Field images must be an array',
    maxValue: 'Maximum images is 6',
  },
  price: {
    invalidFormat: 'Price must be an integer',
    minValue: 'Minimum price is 100',
    maxValue: 'Maximum price is 100000',
  },
  userId: {
    invalidId: 'userId field must be a valid id',
  },
  rating: {
    invalidFormat: 'Rating must be an integer',
    minValue: 'Minimum rating is 1',
    maxValue: 'Maximum rating is 5',
  },
  bedrooms: {
    invalidFormat: 'Bedrooms must be an integer',
    minValue: 'Minimum bedrooms is 1',
    maxValue: 'Maximum bedrooms is 8',
  },
  guests: {
    invalidFormat: 'Guests must be an integer',
    minValue: 'Minimum guests is 1',
    maxValue: 'Maximum guests is 10',
  },
  amenities: {
    invalid:
        'The city must be one of the following: Breakfast, Air conditioning, Laptop friendly workspace, Baby seat, Washer, Towels, Fridge'
  }
} as const;
