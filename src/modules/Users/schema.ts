// userCreateSchema.ts
import { z } from 'zod';

export const userCreateSchema = z.object({
	firstName: z.string().min(3, 'First name is required'),
	lastName: z.string().min(1, 'Last name is required'),
	gender: z.enum(['male', 'female', 'other']),
	age: z.number().int().positive().min(18, 'Must be at least 18 years old'),
	hairColor: z.enum(['black', 'brown', 'blonde', 'red', 'other']),
    fileName: z.string().min(1, 'File name is required'),
    country: z.string().min(1, 'Country is required'),
    state: z.string().min(1, 'State is required'),
    city: z.string().min(1, 'City is required'),
    address: z.string().min(1, 'Address is required'),
    zipCode: z.string().min(1, 'Zip code is required'),
});

export type FormData = z.infer<typeof userCreateSchema>;

export const userEditSchema = userCreateSchema.extend({
    id: z.string().min(1, 'ID is required'),
});


export const genderOptions = [
	{ key: 'male', value: 'Male' },
	{ key: 'female', value: 'Female' },
	{ key: 'other', value: 'Other' },
];

export const hairColorOptions = [
	{ key: 'black', value: 'Black' },
	{ key: 'brown', value: 'Brown' },
	{ key: 'blonde', value: 'Blonde' },
	{ key: 'red', value: 'Red' },
	{ key: 'other', value: 'Other' },
];
