import React from "react";
import {GithubRepTableComponent} from "./repo-table";
import {GithubRepo} from "../../../shared/interfaces/github.interface";

interface Props {
    repos: Array<GithubRepo>
}

export class GithubReposComponent extends React.Component<Props, any> {
    render() {
        return (
            <div className={"mx-4 w-auto"} dir={"ltr"}>
                <GithubRepTableComponent repos={this.props.repos}/>
            </div>
        )
    }
}