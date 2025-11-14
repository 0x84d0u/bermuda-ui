
import { Page } from "@bermuda-ui/application";
import { Shell } from "@bermuda-ui/application/client";
import { Button, Container } from "@bermuda-ui/foundation";
import { Drawer } from "@bermuda-ui/foundation/client";
import { ThemeModeToggle } from "@bermuda-ui/theme/client";

export default function Home() {
    return <Shell
        headerIsEnabled
        footerIsEnabled
        sidebarIsEnabled

        headerIsFixed
        headerIsBordered
        sidebarPosition="left"

        headerLeftContent={<ThemeModeToggle />}
        headerRightContent={<Drawer
            title="Cart"
            placement="right"
            triggerProps={{
                iconOnly: "ShoppingBasket",
                showBadge: true
            }}
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum repellendus numquam dolore officia aspernatur quam atque pariatur maxime nostrum error, sequi eos. Commodi, quis eius doloribus minus sint unde rerum!
            </Container>

            <Container size="laptop" className="py-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum repellendus numquam dolore officia aspernatur quam atque pariatur maxime nostrum error, sequi eos. Commodi, quis eius doloribus minus sint unde rerum!
            </Container>


            <Container size="laptop" className="py-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum repellendus numquam dolore officia aspernatur quam atque pariatur maxime nostrum error, sequi eos. Commodi, quis eius doloribus minus sint unde rerum!
            </Container>


            <Container className="space-y-3">
                {/* <Button isLoading> Hello </Button> */}
                <div className="flex gap-2 items-center">
                    <b className="w-24"> Color </b>
                    <Button label="Default" color="default" />
                    <Button label="Accent" color="accent" />
                    <Button label="Danger" color="danger" />
                    <Button label="Ghost" color="ghost" />
                </div>
                <div className="flex gap-2 items-center">
                    <b className="w-24"> Size </b>
                    <Button label="Small" color="default" size="small" />
                    <Button label="Default" color="default" size="default" />
                    <Button label="Large" color="default" size="large" />
                </div>

                <div className="flex gap-2 items-center">
                    <b className="w-24"> FullWidth </b>
                    <Button label="Default" color="default" fullWidth />
                </div>

                <div className="flex gap-2 items-center">
                    <b className="w-24"> Badge </b>
                    <Button label="Badge" showBadge />
                    <Button label="Badge pulse" showBadge badgePulse />
                </div>

                <div className="flex gap-2 items-center">
                    <b className="w-24"> Circle </b>
                    <Button label="Default" color="default" isCircle />
                </div>

                <div className="flex gap-2 items-center">
                    <b className="w-24"> State </b>
                    <Button label="Active" isActive />
                    <Button label="Disabled" isDisabled />
                    <Button label="Loading" isLoading />
                </div>

                <div className="flex gap-2 items-center">
                    <b className="w-24"> Icon </b>
                    <Button label="Icon only" iconOnly="User" />
                    <Button label="Start" iconStart="Download" />
                    <Button label="End" iconEnd="ArrowRight" />
                    <Button label="Transition" iconsOnly={['AArrowDown', 'AArrowUp']} />
                </div>

                <div className="flex gap-2 items-center">
                    <b className="w-24"> Size </b>
                    <Button iconOnly="Usb" size="small" />
                    <Button iconOnly="Usb" size="default" />
                    <Button iconOnly="Usb" size="large" />
                </div>

            </Container>

        </Page>


    </Shell>
}