// userCreateSchema.ts
import { z } from 'zod';

export const userCreateSchema = z.object({
	firstName: z.string().min(3, 'First name is required'),
	lastName: z.string().min(1, 'Last name is required'),
	gender: z.enum(['male', 'female', 'other']),
	age: z.number().int().positive().min(18, 'Must be at least 18 years old'),
	hairColor: z.enum(['black', 'brown', 'blonde', 'red', 'other']),
});

export type FormData = z.infer<typeof userCreateSchema>;


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
