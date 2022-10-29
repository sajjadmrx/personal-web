import React from "react";
import {Table} from "flowbite-react";
import {TableItemComponent} from "./table-item";
import {GithubRepo} from "../../../shared/interfaces/github.interface";

interface Props {
    repos: Array<GithubRepo>
}

export class GithubRepTableComponent extends React.Component<Props, any> {
    render() {
        return (
            <div>
                <Table hoverable={true}>
                    <Table.Head className={"bg-gray-300"}>
                        <Table.HeadCell>
                            📦 Repository name
                        </Table.HeadCell>
                        <Table.HeadCell>
                            👤owner
                        </Table.HeadCell>
                        <Table.HeadCell>
                            📝description
                        </Table.HeadCell>
                        <Table.HeadCell>
                            🌟 stargazers
                        </Table.HeadCell>
                        <Table.HeadCell>
      <span className="sr-only">
        ....
      </span>
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {
                            this.props.repos.map((rep) => {
                                return <TableItemComponent repo={rep} key={rep.id}/>
                            })
                        }
                    </Table.Body>
                </Table>
            </div>
        )
    }
}