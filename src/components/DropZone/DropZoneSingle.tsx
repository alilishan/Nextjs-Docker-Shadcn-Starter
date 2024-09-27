'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { FileRejection, useDropzone } from 'react-dropzone';
import FileService from '@/services/Files';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import FilePreview from './FilePreview';

interface DropZoneSingleProps {
    onFileUploaded: (file: File | null) => void;
    label?: string;
    required?: boolean;
    isError?: boolean;
    errorMessage?: string;
    acceptedTypes?: {
        [key: string]: string[];
    };
}

const DropZoneSingle: React.FC<DropZoneSingleProps> = ({
    onFileUploaded,
    label,
    required,
    isError,
    errorMessage,
    acceptedTypes,
}) => {
    const [file, setFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState<boolean>(false);
    const [uploadProgress, setUploadProgress] = useState<number>(0);
    const [uploadError, setUploadError] = useState<string | null>(null);

    // Handle file drop
    const onDrop = useCallback(async (acceptedFiles: File[], fileRejections: FileRejection[]) => {
        if (fileRejections.length > 0) {
            setUploadError(fileRejections[0].errors[0].message);
            return;
        }
        if (acceptedFiles.length > 0) {
            setFile(acceptedFiles[0]);
            await uploadFile(acceptedFiles[0]);
        }
    }, []);

    // Initialize dropzone
    const { getRootProps, getInputProps, open, isDragActive } = useDropzone({
        onDrop,
        multiple: false,
        noClick: true,
        noKeyboard: true,
        accept: acceptedTypes,
    });

    // Upload file to server
    const uploadFile = async (fileToUpload: File) => {
        setUploading(true);
        setUploadError(null);
        try {
            await FileService.singleUpload(fileToUpload, (progress) => {
                const percentCompleted = Math.round((progress.loaded * 100) / progress.total);
                setUploadProgress(percentCompleted);
            });
            onFileUploaded(fileToUpload);
        } catch (error: any) {
            console.error('Error uploading file:', error);
            const errorMessage = error.response?.data?.error || 'An error occurred while uploading the file. Please try again.';
            setUploadError(errorMessage);
            onFileUploaded(null);
        } finally {
            setUploading(false);
        }
    };

    // Remove selected file
    const removeFile = () => {
        setFile(null);
        setUploadProgress(0);
        setUploadError(null);
        onFileUploaded(null); // Notify parent that file has been removed
    };

    return (
            <div className="w-full">
                {label && (
                    <label className="block text-sm font-medium mb-1">
                        {label}
                        {required && <span className="text-red-500 ml-1">*</span>}
                    </label>
                )}

                <div className={
                    cn(
                        'w-full p-2 rounded-md text-xs text-center transition-colors font-medium bg-slate-100 hover:bg-accent hover:text-accent-foreground dark:bg-slate-800 ',
                        isDragActive ? 'bg-slate-200 dark:bg-slate-700' : ''
                    )
                }>
                    <div {...getRootProps()} className="">
                        <input {...getInputProps()} />
                        {file ? (
                            <div className='flex items-center justify-start pt-2 gap-4'>
                                <FilePreview width={48} height={48} file={file} />

                                <div className='flex flex-col items-start justify-center flex-grow'>
                                    <p>{file.name}</p>
                                    {uploading ? (
                                        <div className='flex flex-col items-start justify-center w-full'>
                                            <p>Uploading... {uploadProgress}%</p>
                                            <div className="w-full bg-gray-200 rounded-full h-1 mt-1">
                                                <div
                                                    className="h-1 rounded bg-blue-600"
                                                    style={{ width: `${uploadProgress}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    ) : uploadError ? (
                                        <p className="text-red-500">{uploadError}</p>
                                    ) : (
                                        <p className='text-green-800 dark:text-green-400'>File uploaded successfully!</p>
                                    )}
                                </div>

                                <button
                                    onClick={removeFile}
                                    className="w-6 h-6 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 transition-colors"
                                    disabled={uploading}
                                >
                                    <X size={16} />
                                </button>
                            </div>
                        ) : (
                            <>
                                <p className='pt-2 text-slate-600 dark:text-slate-400'>Drag & drop a file here, or use the button below to select a file</p>
                                { uploadError && <p className='text-red-500'>{uploadError}</p> }
                            </>
                        )}
                    </div>
                    <button
                        onClick={open}
                        className="mt-4 px-4 py-2 w-full rounded text-sm font-medium transition-colors bg-slate-200 hover:bg-slate-300 hover:text-accent-foreground dark:bg-slate-700 dark:hover:bg-slate-600"
                        disabled={uploading}
                        type='button'
                    >
                        Select File
                    </button>
                </div>

                {isError && errorMessage && (
                    <p className="mt-1 text-sm text-red-500">{errorMessage}</p>
                )}
        </div>
    );
};

export default DropZoneSingle;


