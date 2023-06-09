import {AppBar, Container, Toolbar} from "@mui/material";
import Logo from "@/modules/header/components/logo";
import NavTabs from "@/modules/header/components/navTabs";
import SignIn from "src/modules/header/components/sign-in";
import SignOut from "@/modules/header/components/sign-out";
import useToken from "@/hooks/useToken";

export default function Header() {
    const token = useToken();

    return (
        <AppBar position={"static"}>
            <Container maxWidth={"xl"}>
                <Toolbar disableGutters>
                    <Logo />
                    <NavTabs/>
                    {!token ? <SignIn/> : <SignOut/>}
                </Toolbar>
            </Container>
        </AppBar>
    )
}
