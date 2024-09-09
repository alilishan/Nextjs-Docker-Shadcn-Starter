'use client';

import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from '@/components/ui/label';
import SelectBox from "@/components/SelectBox";
import FormSheet from '@/components/FormSheet';
import { SheetFooter } from "@/components/ui/sheet";

import { genderOptions, hairColorOptions, userCreateSchema, FormData } from './schema';


const UserCreateForm: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);

	const { watch, control, handleSubmit, formState: { errors } } = useForm<FormData>({
		resolver: zodResolver(userCreateSchema),
	});

	const onSubmit = (data: FormData) => {
		console.log(data);
		// Handle form submission
	};

	return (
		<FormSheet
			triggerButton={<Button>Create User</Button>}
			title="Create New User"
            submitButtonText="Create User"
            onSubmit={handleSubmit(onSubmit)}
            isOpen={isOpen}
            onOpenChange={setIsOpen}
		>
            <div>
                <Label htmlFor="firstName">First Name</Label>
                <Controller
                    name="firstName"
                    control={control}
                    render={({ field }) => (
                        <Input id="firstName" {...field} placeholder="First Name" />
                    )}
                />
                {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
            </div>
            <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Controller
                    name="lastName"
                    control={control}
                    render={({ field }) => (
                        <Input id="lastName" {...field} placeholder="Last Name" />
                    )}
                />
                {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
            </div>

            <div className='flex w-full items-center justify-between gap-2'>
                <div>
                    <Label htmlFor="gender">Gender</Label>
                    <Controller
                        name="gender"
                        control={control}
                        render={({ field }) => (
                            <SelectBox
                                options={genderOptions}
                                value={field.value}
                                onChange={field.onChange}
                                placeholder="Select Gender"
                            />
                        )}
                    />
                    {errors.gender && <p className="text-red-500">{errors.gender.message}</p>}
                </div>
                <div>
                    <Label htmlFor="age">Age</Label>
                    <Controller
                        name="age"
                        control={control}
                        render={({ field }) => (
                            <Input id="age" {...field} type="number" placeholder="Age" />
                        )}
                    />
                    {errors.age && <p className="text-red-500">{errors.age.message}</p>}
                </div>
                <div>
                    <Label htmlFor="hairColor">Hair Color</Label>
                    <Controller
                        name="hairColor"
                        control={control}
                        render={({ field }) => (
                            <SelectBox
                                options={hairColorOptions}
                                value={field.value}
                                onChange={field.onChange}
                                placeholder="Select Hair Color"
                            />
                        )}
                    />
                    {errors.hairColor && <p className="text-red-500">{errors.hairColor.message}</p>}
                </div>
            </div>

			<div className="mt-4">
				<Label>Form State:</Label>
				<pre className="bg-gray-100 p-2 rounded-md overflow-auto max-h-40 text-sm">
					{JSON.stringify(watch(), null, 2)}
				</pre>
			</div>

		</FormSheet>
	);
};

export default UserCreateForm;


