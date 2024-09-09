'use client';

import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from "@/components/ui/input";
import { Label } from '@/components/ui/label';
import SelectBox from "@/components/SelectBox";
import FormSheet from '@/components/FormSheet';
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

import { genderOptions, hairColorOptions, userEditSchema, FormData } from './schema';

interface UserEditFormProps {
    user: FormData; // Assuming you'll pass the user data to edit
}

const UserEditForm: React.FC<UserEditFormProps> = ({ user }) => {
    const [isOpen, setIsOpen] = useState(false);

    const { watch, control, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(userEditSchema),
        defaultValues: {
            ...user,
            hairColor: 'brown',
        }, // Pre-fill the form with user data
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
        // Handle form submission for editing
    };

   const handleOpenChange = (open: boolean) => {
        setIsOpen(open);
    };

    const handleDropdownItemSelect = (event: Event) => {
        event.preventDefault();
        setIsOpen(true);
    };

    return (
        <FormSheet
            triggerButton={<DropdownMenuItem onSelect={handleDropdownItemSelect}>Edit User</DropdownMenuItem>}
            title="Edit User"
            submitButtonText="Save Changes"
            onSubmit={handleSubmit(onSubmit)}
            isOpen={isOpen}
            onOpenChange={handleOpenChange}
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

            <div className='flex justify-between gap-2'>
                <div className='w-1/3'>
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
                <div className='w-1/3'>
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
                <div className='w-1/3'>
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

        </FormSheet>
    );
};

export default UserEditForm;
