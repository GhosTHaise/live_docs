'use client'

import { useSelf } from '@liveblocks/react/suspense';
import React, { useState } from 'react'

const SharedModal = ({ roomId,
    collaborators,
    creatorId,
    currentUserType }: ShareDocumentDialogProps) => {
    const user = useSelf();

    const [open, setOpen] = useState<boolean>(false);
    const [loading, setLoading] = useState(false);

    const [email, setEmail] = useState<string>('')
    const [userType, setUserType] = useState('viewer')

    return (
        <div>SharedModal</div>
    )
}

export default SharedModal