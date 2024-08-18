'use client'

import { useSelf } from '@liveblocks/react/suspense';
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from './ui/button';
import Image from 'next/image';

const SharedModal = ({ roomId,
    collaborators,
    creatorId,
    currentUserType }: ShareDocumentDialogProps) => {
    const user = useSelf();

    const [open, setOpen] = useState<boolean>(false);
    const [loading, setLoading] = useState(false);

    const [email, setEmail] = useState<string>('')
    const [userType, setUserType] = useState('viewer')

    const shareDocumentHandler = async () => {

    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
                <Button
                    className='gradient-blue flex items-center justify-center h-9 gap-1 px-4'
                    disabled={currentUserType !== 'editor'}
                >
                    <Image
                        src="/assets/icons/share.svg"
                        alt='share'
                        width={20}
                        height={20}
                        className='min-w-4 md:size-5'
                    />
                    <p className='mr-1 hidden sm:block'>
                        Share
                    </p>
                </Button>
            </DialogTrigger>
            <DialogContent className='shad-dialog'>
                <DialogHeader>
                    <DialogTitle>Manage who can view this project</DialogTitle>
                    <DialogDescription>
                        Select which user can view and edit this document
                    </DialogDescription>


                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default SharedModal