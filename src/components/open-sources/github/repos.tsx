import React from "react";
import {GithubRepTableComponent} from "./repo-table";
import {GithubRepo} from "../../../shared/interfaces/github.interface";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCodeFork, faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons";
import {Link, Tooltip} from "react-daisyui";

interface Props {
    repos: Array<GithubRepo>
}

export class GithubReposComponent extends React.Component<Props, any> {
    private repos: Array<GithubRepo> = this.props.repos

    render() {
        return (
            <div className={"mx-4 w-auto rounded py-5 p-5 "} dir={"ltr"}>
                <div className="grid grid-cols-2 gap-4">
                    {this.repos.map((rep) => {
                        return (
                            <Tooltip message={rep.description || "no description"}>
                                <div
                                    className={"text-center py-5 border border-1 border-[#59595947] rounded-lg hover:shadow"}>
                                    <div className="flex">
                                        <div className="flex-auto">
                                            <p className="text-clip overflow-hidden">{rep.name}</p>

                                        </div>
                                        <div className="flex-1 w-64">
                                            <span>⭐</span>
                                            <span>{rep.stargazers_count}</span>
                                        </div>
                                        <div className="flex-1 w-32">
                                            <FontAwesomeIcon icon={faCodeFork} className={"mr-2"}/>
                                            <span>{rep.forks_count}</span>
                                        </div>
                                        <div className="flex-1 w-32">
                                            <Link href={rep.html_url}>
                                                <FontAwesomeIcon icon={faExternalLinkAlt}/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Tooltip>
                        )
                    })}
                </div>
            </div>
        )
    }
}