
import { AppHeader } from "@bermuda-ui/application";
import { Button } from "@bermuda-ui/foundation";


export default function Home() {
    return <main className="h-svh flex flex-col gap-12 items-center justify-center">
        
        <AppHeader />
        <section>
            <h2> Button </h2>
            <div className="flex gap-6`">

                <div className="flex flex-col gap-3">
                    <h3 className="mb-3"> Color </h3>
                    <Button > Default </Button>
                    <Button color="primary"> Primary </Button>
                    <Button color="secondary"> Secondary </Button>
                    <Button color="destructive"> Destructive </Button>
                    <Button color="outline"> Outline</Button>
                </div>


            </div>
        </section>


    </main>
}

// import { Badge, Box, Button, Heading, Spinner, Text } from "@bermuda-ui/foundation";


// export default function Home() {
//   return (
//     <main className="min-h-screen p-8 bg-background">
//       <div className="max-w-6xl mx-auto space-y-12">

//         {/* Header */}
//         <section className="space-y-4">
//           <Heading as="h1">Bermuda UI Playground 🏝️</Heading>
//           <Text size="lg" variant="muted">
//             Testing ground for all Bermuda UI components
//           </Text>
//         </section>

//         {/* Buttons */}
//         <section className="space-y-4">
//           <Heading as="h2">Buttons</Heading>

//           <Button color="secondary" size="small">
//             Small Secondary
//           </Button>

//           <Button color="destructive" leftIcon={<span>🔥</span>}>
//             Delete
//           </Button>

//           <Button as="a" href="/login" color="outline" rightIcon={<span>➡️</span>}>
//             Login
//           </Button>

//           <Button isLoading>Submitting...</Button>
//           <Box className="space-y-4">
//             <div>
//               <Text size="sm" variant="muted" className="mb-2">Default Button</Text>
//               <Button>Default Button</Button>

//             </div>
//             <div>
//               <Text size="sm" variant="muted" className="mb-2">Variants</Text>
//               <div className="flex flex-wrap gap-3">
//                 <Button >Primary</Button>
//                 <Button color="secondary">Secondary</Button>
//                 <Button color="destructive">Destructive</Button>
//                 <Button color="outline">Outline</Button>
//                 <Button color="ghost">Ghost</Button>
//                 <Button color="">Link</Button>
//               </div>
//             </div>

//             <div>
//               <Text size="sm" variant="muted" className="mb-2">Sizes</Text>
//               <div className="flex items-center flex-wrap gap-3">
//                 {/* <Button size="sm">Small</Button>
//                 <Button size="md">Medium</Button>
//                 <Button size="lg">Large</Button> */}
//               </div>
//             </div>

//             <div>
//               <Text size="sm" variant="muted" className="mb-2">States</Text>
//               <div className="flex flex-wrap gap-3">
//                 {/* <Button disabled>Disabled</Button>
//                 <Button loading>Loading</Button>
//                 <Button loading loadingText="Please wait...">
//                   Loading with text
//                 </Button> */}
//               </div>
//             </div>
//           </Box>
//         </section>

//         {/* Typography */}
//         <section className="space-y-4">
//           <Heading as="h2">Typography</Heading>

//           <Box className="space-y-4">
//             <div>
//               <Text size="sm" variant="muted" className="mb-2">Headings</Text>
//               <div className="space-y-2">
//                 <Heading as="h1">Heading 1</Heading>
//                 <Heading as="h2">Heading 2</Heading>
//                 <Heading as="h3">Heading 3</Heading>
//                 <Heading as="h4">Heading 4</Heading>
//                 <Heading as="h5">Heading 5</Heading>
//                 <Heading as="h6">Heading 6</Heading>
//               </div>
//             </div>

//             <div>
//               <Text size="sm" variant="muted" className="mb-2">Text Sizes</Text>
//               <div className="space-y-2">
//                 <Text size="xs">Extra small text</Text>
//                 <Text size="sm">Small text</Text>
//                 <Text size="base">Base text (default)</Text>
//                 <Text size="lg">Large text</Text>
//                 <Text size="xl">Extra large text</Text>
//               </div>
//             </div>

//             <div>
//               <Text size="sm" variant="muted" className="mb-2">Text Variants</Text>
//               <div className="space-y-2">
//                 <Text variant="default">Default text</Text>
//                 <Text variant="muted">Muted text</Text>
//                 <Text variant="primary">Primary text</Text>
//                 <Text variant="destructive">Destructive text</Text>
//               </div>
//             </div>

//             <div>
//               <Text size="sm" variant="muted" className="mb-2">Text Weights</Text>
//               <div className="space-y-2">
//                 <Text weight="normal">Normal weight</Text>
//                 <Text weight="medium">Medium weight</Text>
//                 <Text weight="semibold">Semibold weight</Text>
//                 <Text weight="bold">Bold weight</Text>
//               </div>
//             </div>
//           </Box>
//         </section>

//         {/* Badges */}
//         <section className="space-y-4">
//           <Heading as="h2">Badges</Heading>

//           <Box className="space-y-4">
//             <div>
//               <Text size="sm" variant="muted" className="mb-2">Variants</Text>
//               <div className="flex flex-wrap gap-3">
//                 <Badge variant="default">Default</Badge>
//                 <Badge variant="secondary">Secondary</Badge>
//                 <Badge variant="destructive">Destructive</Badge>
//                 <Badge variant="success">Success</Badge>
//                 <Badge variant="outline">Outline</Badge>
//               </div>
//             </div>

//             <div>
//               <Text size="sm" variant="muted" className="mb-2">Sizes</Text>
//               <div className="flex items-center flex-wrap gap-3">
//                 <Badge size="sm">Small</Badge>
//                 <Badge size="md">Medium</Badge>
//                 <Badge size="lg">Large</Badge>
//               </div>
//             </div>
//           </Box>
//         </section>

//         {/* Spinner */}
//         <section className="space-y-4">
//           <Heading as="h2">Spinner</Heading>

//           <Box className="space-y-4">
//             <div>
//               <Text size="sm" variant="muted" className="mb-2">Sizes</Text>
//               <div className="flex items-center gap-6">
//                 <Spinner size="sm" />
//                 <Spinner size="md" />
//                 <Spinner size="lg" />
//               </div>
//             </div>

//             <div>
//               <Text size="sm" variant="muted" className="mb-2">With Button</Text>
//               <Button>
//                 <Spinner size="sm" variant="current" />
//                 Loading...
//               </Button>
//             </div>
//           </Box>
//         </section>

//         {/* Box / Layout */}
//         <section className="space-y-4">
//           <Heading as="h2">Box (Layout)</Heading>

//           <Box className="space-y-4">
//             <div>
//               <Text size="sm" variant="muted" className="mb-2">Basic Box</Text>
//               <Box className="p-6 bg-accent rounded-lg border border-border">
//                 <Text>This is a Box component with custom styling</Text>
//               </Box>
//             </div>

//             <div>
//               <Text size="sm" variant="muted" className="mb-2">Nested Boxes</Text>
//               <Box className="p-4 bg-accent rounded-lg">
//                 <Text className="mb-3">Parent Box</Text>
//                 <Box className="p-4 bg-background rounded border border-border">
//                   <Text>Child Box</Text>
//                 </Box>
//               </Box>
//             </div>
//           </Box>
//         </section>

//         {/* Dark Mode Test */}
//         <section className="space-y-4">
//           <Heading as="h2">Color System</Heading>

//           <Box className="space-y-4">
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//               <Box className="p-4 bg-primary text-primary-foreground rounded-lg">
//                 <Text weight="semibold">Primary</Text>
//               </Box>
//               <Box className="p-4 bg-secondary text-secondary-foreground rounded-lg">
//                 <Text weight="semibold">Secondary</Text>
//               </Box>
//               <Box className="p-4 bg-destructive text-destructive-foreground rounded-lg">
//                 <Text weight="semibold">Destructive</Text>
//               </Box>
//               <Box className="p-4 bg-accent text-accent-foreground rounded-lg">
//                 <Text weight="semibold">Accent</Text>
//               </Box>
//             </div>

//             <Box className="p-4 bg-card text-card-foreground rounded-lg border border-border">
//               <Text>Card background with border</Text>
//             </Box>

//             <Box className="p-4 bg-muted text-muted-foreground rounded-lg">
//               <Text>Muted background</Text>
//             </Box>
//           </Box>
//         </section>

//       </div>
//     </main>
//   );
// }