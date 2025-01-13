export const CreateUpdateOfferMessage = {
  tytle: {
    minLength: 'The title must be at least 10 characters long.',
    maxLength: 'The title can be up to 100 characters long.',
  },
  description: {
    minLength: 'The description must be at least 20 characters long.',
    maxLength: 'The description can be up to 1024 characters long.',
  },
  createDate: {
    invalidFormat: 'The post creation date must be a valid ISO date.',
  },
  image: {
    invalidFormat: 'An image is required.',
    maxLength: 'The image field cannot exceed 256 characters.',
  },
  type: {
    invalidFormat: 'The type must be either "Buy" or "Sell".',
  },
  price: {
    invalidFormat: 'The price must be an integer.',
    min: 'The minimum price is 100.',
    max: 'The maximum price is 20,000.',
  },
  rating: {
    invalidFormat: 'The rating must be an integer.',
    minValue: 'The minimum rating is 1.',
    maxValue: 'The maximum rating is 5.',
  },
  bedrooms: {
    invalidFormat: 'The number of bedrooms must be an integer.',
    minValue: 'The minimum number of bedrooms is 1.',
    maxValue: 'The maximum number of bedrooms is 8.',
  },
  guests: {
    invalidFormat: 'The number of guests must be an integer.',
    minValue: 'The minimum number of guests is 1.',
    maxValue: 'The maximum number of guests is 10.',
  },
  amenities: {
    invalid: 'The amenities must be one of the following: Breakfast, Air conditioning, Laptop-friendly workspace, Baby seat, Washer, Towels, Fridge.',
  },
  images: {
    invalidFormat: 'The images field must be an array.',
    maxValue: 'You can upload a maximum of 6 images.',
  },
} as const;

