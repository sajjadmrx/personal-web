import React from "react";
import {HeaderComponent} from "../components/header/header.component";
import {ReactNode} from "../shared/interfaces/elements.interface";
import {FooterComponent} from "../components/footer";


interface Props {
    children: ReactNode
}

export class PageWrapper extends React.Component<Props, any> {
    render() {
        return (
            <div>
                <HeaderComponent/>
                {this.props.children}
                <FooterComponent/>
            </div>
        )
    }
}