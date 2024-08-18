import React, { useState } from 'react'

const Collaborator = ({
    roomId,
    creatorId,
    email,
    collaborator,
    user }: CollaboratorProps) => {
    const [UserType, setUserType] = useState<UserType>(collaborator.userType || 'viewer');
    const [loading, setLoading] = useState<boolean>(false);

    return (
        <div>
            Co
        </div>
    )
}

export default Collaborator