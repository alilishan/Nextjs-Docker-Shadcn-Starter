'use client';

import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';


import { Button } from "@/components/ui/button";
import { Label } from '@/components/ui/label';
import InputBox from '@/components/InputBox';
import SelectBox from "@/components/SelectBox";
import FormSheet from '@/components/FormSheet';


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
                <Controller
                    name="firstName"
                    control={control}
                    render={({ field }) => (
                        <InputBox
                            {...field}
                            label="First Name"
                            required
                            isError={!!errors.firstName}
                            errorMessage={errors.firstName?.message}
                            variant="ghost"
                        />
                        // <Input id="firstName" {...field} placeholder="First Name" />
                    )}
                />
            </div>
            <div>
                <Controller
                    name="lastName"
                    control={control}
                    render={({ field }) => (
                        <InputBox
                            {...field}
                            label="Last Name"
                            required
                            isError={!!errors.lastName}
                            errorMessage={errors.lastName?.message}
                            variant="ghost"
                        />
                    )}
                />
            </div>

            <div className='flex w-full items-start justify-between gap-2'>
                <div className='w-1/3'>
                    <Controller
                        name="gender"
                        control={control}
                        render={({ field }) => (
                            <SelectBox
                                label='Gender'
                                required={true}
                                options={genderOptions}
                                value={field.value}
                                onChange={field.onChange}
                                placeholder="Select Gender"
                                isError={!!errors.gender}
                                errorMessage={errors.gender?.message}
                                variant="ghost"
                            />
                        )}
                    />
                </div>
                <div className=''>
                    <Controller
                        name="age"
                        control={control}
                        render={({ field }) => (
                            <InputBox
                                {...field}
                                label="Age"
                                required
                                isError={!!errors.age}
                                errorMessage={errors.age?.message}
                                variant="ghost"
                                type="number"
                            />
                        )}
                    />
                </div>
                <div className=''>
                    <Controller
                        name="hairColor"
                        control={control}
                        render={({ field }) => (
                            <SelectBox
                                label='Hair Color'
                                required={true}
                                options={hairColorOptions}
                                value={field.value}
                                onChange={field.onChange}
                                placeholder="Select Hair Color"
                                isError={!!errors.hairColor}
                                errorMessage={errors.hairColor?.message}
                                variant="ghost"
                            />
                        )}
                    />
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


