import React from "react";
import {HeaderComponent} from "../components/header/header.component";
import {ReactNode} from "../shared/interfaces/elements.interface";


interface Props {
    children: ReactNode
}
export class PageWrapper extends React.Component<Props, any>{
    render() {
        return (
            <div>
             <HeaderComponent/>
                {this.props.children}
            </div>
        )
    }
}