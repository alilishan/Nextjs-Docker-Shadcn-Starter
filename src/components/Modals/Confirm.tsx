import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button, ButtonProps } from "@/components/ui/button";
import { Trash2 } from 'lucide-react'; // Import the trash icon

type ButtonVariant = ButtonProps['variant'];

interface ConfirmModalProps {
    title: string | React.ReactNode;
    message: string | React.ReactNode;
    onConfirm: () => void;
    onCancel?: () => void;
    confirmText?: string;
    cancelText?: string;
    confirmVariant?: ButtonVariant;
    cancelVariant?: ButtonVariant;
    triggerText?: string;
    triggerIcon?: 'trash' | React.ReactNode;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
    title,
    message,
    onConfirm,
    onCancel,
    confirmText = 'Confirm',
    cancelText = 'Cancel',
    confirmVariant = 'default',
    cancelVariant = 'secondary',
    triggerText,
    triggerIcon,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleConfirm = () => {
        onConfirm();
        setIsOpen(false);
    };

    const handleCancel = () => {
        if (onCancel) onCancel();
        setIsOpen(false);
    };

    const renderTrigger = () => {
        if (triggerIcon === 'trash') {
            return <Trash2 size={18} className="text-red-500" />;
        } else if (triggerIcon) {
            return triggerIcon;
        } else {
            return triggerText || 'Open';
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button variant="ghost">{renderTrigger()}</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{message}</DialogDescription>
                </DialogHeader>
                <DialogFooter className="pt-4">
                    <Button variant={cancelVariant} onClick={handleCancel}>
                        {cancelText}
                    </Button>
                    <Button variant={confirmVariant} onClick={handleConfirm}>
                        {confirmText}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default ConfirmModal;


