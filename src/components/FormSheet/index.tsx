'use client'

import React, { ReactNode, useState, useEffect } from 'react';

import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from '../ui/button';

interface FormSheetProps {
    title: string;
    children: ReactNode;
    triggerButton: ReactNode;
    submitButtonText?: string;
    isOpen?: boolean;
    onSubmit: (data: any) => void;
    onOpenChange?: (open: boolean) => void;
}

const FormSheet: React.FC<FormSheetProps> = ({
    title,
    children,
    triggerButton,
    submitButtonText = 'Submit',
    isOpen,
    onSubmit,
    onOpenChange
}) => {
    const [open, setOpen] = useState(isOpen || false);

    useEffect(() => {
        if (isOpen !== undefined) {
            setOpen(isOpen);
        }
    }, [isOpen]);

    const handleOpenChange = (newOpen: boolean) => {
        setOpen(newOpen);
        onOpenChange?.(newOpen);
    };

    return (
        <Sheet open={open} onOpenChange={handleOpenChange}>
            <SheetTrigger asChild>
                {triggerButton}
            </SheetTrigger>
            <SheetContent className="sm:max-w-[700px] w-full sm:w-1/2 flex flex-col">
                <SheetHeader>
                    <SheetTitle className='px-1 border-b pb-4 mb-4'>{title}</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col flex-grow">
                    <div className="space-y-4 flex flex-grow overflow-y-auto px-1">
                        <form onSubmit={onSubmit} className='flex flex-col gap-4 flex-grow'>
                            {children}

                            <SheetFooter className='mt-auto border-t pt-4'>
                                <Button
                                    type="button"
                                    variant="ghost"
                                    onClick={() => setOpen(false)}
                                > Cancel </Button>
                                <Button type="submit">{submitButtonText}</Button>
                            </SheetFooter>
                        </form>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default FormSheet;


