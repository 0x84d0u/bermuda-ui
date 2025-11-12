
import {
    Shell,
} from "@bermuda-ui/application";


export default function Home() {
    return <Shell 
        footerContent={<div> Footer </div>}
        headerActionsContent={<div> Actions </div>}
        headerToolbarContent={<div> Toolbar </div>}
        headerBrandingContent={<div> Branding </div>}
        sidebarContent={<div> Sidebar </div>}
        sidebarHeaderContent={<div> Sidebar header </div>}
        sidebarFooterContent={<div> Sidebar footer </div>}
    />
}