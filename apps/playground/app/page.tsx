import { Button, Container } from "@bermuda-ui/foundation";
import { ThemeModeToggle } from "@bermuda-ui/theme/client";
import { Page, Section } from "@bermuda-ui/application";
import { Shell , Drawer} from "@bermuda-ui/application/client";


import ComponentPlayground from "./ComponentPlayground";

export default function Home() {
    return <Shell
        headerIsEnabled
        footerIsEnabled
        sidebarIsEnabled

        headerIsFixed
        headerIsBordered
        // sidebarPosition="left"

        headerLeftContent={<ThemeModeToggle />}
        headerRightContent={<Drawer
            title="Cart"
            placement="right"
        // triggerProps={{
        //     iconOnly: "ShoppingBasket",
        //     showBadge: true
        // }}
        >
            <p>Your content here</p>
        </Drawer>}
        headerMidContent={<div> Branding </div>}
        sidebarContent={<div> Sidebar </div>}
        sidebarHeaderContent={<div> Sidebar header </div>}
        sidebarFooterContent={<div> Sidebar footer </div>}

        footerContent={<div> Footer </div>}
    >

        <Page
            title="Page title"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        >


            <Container size="laptop" className="py-12">
            </Container>

            <Container size="laptop" className="py-12">
                <ComponentPlayground />
            </Container>

            <Container size="laptop" className="py-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum repellendus numquam dolore officia aspernatur quam atque pariatur maxime nostrum error, sequi eos. Commodi, quis eius doloribus minus sint unde rerum!
            </Container>

            <div className="p-10 space-y-10">
                <Section title="Kind / Variant">
                    <Row>
                        <Button kind="button" variant="primary" label="Primary button" />
                        <Button kind="button" variant="secondary" label="Secondary button" />
                        <Button kind="button" variant="danger" label="Danger button" />
                        <Button kind="button" variant="ghost" label="Ghost button" />
                    </Row>
                    <Row>
                        <Button kind="link" variant="inline" label="Unline link" />
                        <Button kind="link" variant="breadcrumb" label="Breadcrumb link" />
                        <Button kind="link" variant="toc" label="Toc link" />
                        <Button kind="link" variant="navbar" label="Navbar link" />
                    </Row>
                </Section>

                <Section title="Large button">
                    <Row>
                        <Button kind="button" size="large" label="Large button" />
                    </Row>
                </Section>

                <Section title="Large button">
                    <Row>
                        <Button kind="button" size="large" label="Large button" />
                        <Button kind="button" curve="circle" label="Circle button" />
                        <Button kind="button" shape="fullwidth" label="Full width button" />
                        <Button kind="button" shape="square" label="Square" />
                    </Row>
                </Section>

            </div>

        </Page>


    </Shell>
}

function Row({ children }: { children: React.ReactNode }) {
    return <div className="flex flex-wrap gap-4">{children}</div>;
}