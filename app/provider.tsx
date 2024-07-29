'use client'
import React from 'react'
import {
    LiveblocksProvider,
    RoomProvider,
    ClientSideSuspense,
} from "@liveblocks/react/suspense";
import Loader from '@/components/Loader';
import { getClerkUser } from '@/lib/actions/user.action';

const Provider = ({ children }: { children: React.ReactNode }) => {
    return (
        <LiveblocksProvider
            authEndpoint="/api/liveblocks-auth"
            resolveUsers={async ({ userIds }) => {
                const users = await getClerkUser({ userIds });

                return users;
            }}
        >
            <RoomProvider id="my-room">
                <ClientSideSuspense fallback={<Loader />}>
                    {children}
                </ClientSideSuspense>
            </RoomProvider>
        </LiveblocksProvider>
    )
}

export default Provider