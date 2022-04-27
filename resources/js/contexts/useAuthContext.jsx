import React, { Suspense } from 'react';

export const userContext = React.createContext(
    { loggedin: true, auth:{username:'Edgar Wanjala'} }
)