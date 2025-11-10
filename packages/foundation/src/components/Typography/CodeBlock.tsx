import * as React from "react"
import { cn } from "@utils"

export type CodeBlockProps = React.HTMLAttributes<HTMLElement> & {
  children: React.ReactNode
}

export const CodeBlock = ({ className, children, ...props }: CodeBlockProps) => (
  <pre className={cn("bg-muted p-4 rounded font-mono text-sm overflow-x-auto", className)} {...props}>
    <code className="block">{children}</code>
  </pre>
)
