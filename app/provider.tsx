'use client'
import React from 'react'
import {
    LiveblocksProvider,
    ClientSideSuspense,
} from "@liveblocks/react/suspense";
import Loader from '@/components/loader';
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
            <ClientSideSuspense fallback={<Loader />}>
                {children}
            </ClientSideSuspense>
        </LiveblocksProvider>
    )
}

export default Provider