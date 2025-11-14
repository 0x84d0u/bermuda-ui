"use client";

import { Shell as UncontrolledShell } from "./Shell"
import { ShellProvider, useShell } from "./ShellProvider.client"

import * as ShellTypes from "./Shell.types";


const Hooked = (props: ShellTypes.ShellProps) => {
    const ctx = useShell();
    return <UncontrolledShell {...ctx} {...props} />
}

export const Shell = ({ ...shellProps }: ShellTypes.ShellProps) => <ShellProvider>
    <Hooked {...shellProps} />
</ShellProvider>
