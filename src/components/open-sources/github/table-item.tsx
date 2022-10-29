import React from "react";
import {Table} from "flowbite-react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExternalLink} from "@fortawesome/free-solid-svg-icons";
import {GithubRepo} from "../../../shared/interfaces/github.interface";

interface Prop {
    repo: GithubRepo
}

export class TableItemComponent extends React.Component<Prop, any> {
    render() {
        return (
            <Table.Row className="bg-green-100 text-gray-900 font-mono">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {this.props.repo.full_name}
                </Table.Cell>
                <Table.Cell>
                    {this.props.repo.owner.login}
                </Table.Cell>
                <Table.Cell className={"text-ellipsis"}>
                    {this.props.repo.description}
                </Table.Cell>
                <Table.Cell>
                    {this.props.repo.stargazers_count}
                </Table.Cell>
                <Table.Cell>
                    <a
                        href={this.props.repo.html_url}
                        target={"_blank"}
                        rel={"noreferrer"}
                        className="font-medium text-blue-600 dark:text-blue-500 cursor-pointer"
                    >
                        <FontAwesomeIcon icon={faExternalLink}/>
                    </a>
                </Table.Cell>
            </Table.Row>
        )
    }
}