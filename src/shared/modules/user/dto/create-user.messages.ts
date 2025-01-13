export const CreateUserMessages = {
  email: {
    invalidFormat: 'The email must be a valid email address.',
  },
  avatarPath: {
    invalidFormat: 'The avatar path is required.',
  },
  name: {
    invalidFormat: 'The first name is required.',
    lengthField: 'The first name must be between 1 and 15 characters long.',
  },
  password: {
    invalidFormat: 'The password is required.',
    lengthField: 'The password must be between 6 and 12 characters long.',
  },
} as const;
