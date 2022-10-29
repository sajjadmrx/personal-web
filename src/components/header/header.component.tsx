import React from "react";
import {Navbar} from "flowbite-react";

export class HeaderComponent extends React.Component<any, any> {
    render() {
        return (
            <header dir={"ltr"} color={"dark"} className={"mb-5 dark"}>
                <Navbar
                    fluid={true}
                    rounded={true}
                >
                    <Navbar.Brand href="#">
                        <img
                            src="/assets/icons/logo.png"
                            className="mr-3 h-6 sm:h-9 rounded"
                            alt="Flowbite Logo"
                        />
                        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      sajjadmrx.ir
    </span>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse>
                        <Navbar.Link
                            href="https://github.com/sajjadmrx/personal-web"
                        >
                            لینک سورس سایت
                        </Navbar.Link>

                    </Navbar.Collapse>
                </Navbar>
            </header>
        )
    }
}