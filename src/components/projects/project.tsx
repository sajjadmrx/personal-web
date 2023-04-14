import React from "react";
import { Project } from "../../shared/interfaces/project.interface";

import { Badge, Button } from 'react-daisyui'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";
import { AiFillGithub } from "react-icons/ai"
import { HiOutlineStatusOnline } from "react-icons/hi"
interface Prop {
    project: Project
}

enum status {
    ONLINE,
    OFFLINE,
    LOADING
}

interface StatusState {
    projectStatus: status
}

export class ProjectComponent extends React.Component<Prop, StatusState> {
    state: StatusState = {
        projectStatus: status.LOADING
    }

    async componentDidMount() {
        try {
            const url: string = this.props.project.checkUrl
            await axios.get(url, {
                timeout: 1000
            })

        } catch (e: any) {
            const res = e.response
            if (res.status == 404) {
                this.setState({
                    projectStatus: status.ONLINE
                })
                return;
            }
            this.setState({
                projectStatus: status.OFFLINE
            })
        }
    }


    render() {

        return (
            <div>
                <div className="indicator w-60 cursor-pointer">
                    <div className="">
                        <div className=" ">
                            {this.state.projectStatus == status.LOADING ?
                                <Badge className="indicator-item" color="warning">نامعلوم</Badge>
                                : this.state.projectStatus == status.ONLINE ? <Badge color="success" className="indicator-item gap-1">
                                    <HiOutlineStatusOnline />
                                    در دسترس</Badge> :
                                    <Badge className="indicator-item" color="error">آفلاین</Badge>
                            }
                            {
                                this.props.project.openSource.supported ?
                                    <Badge color="info" className="indicator-item gap-1  indicator-top indicator-start badge badge-secondary"
                                    >
                                        <AiFillGithub />
                                        متن باز</Badge> : ""
                            }
                        </div>


                        <img alt={this.props.project.names.eng + " Logo"} className="rounded-[1rem]"
                            src={this.props.project.image} />
                        <div className="card bg-secondary/80  -left-0 -top-[160px] py-2">
                            <div className="cad-header text-center text-gray-300">
                                {this.props.project.names.farsi}
                            </div>
                            <div
                                className="card-body scrollbar scrollbar-thumb-gray-900 ">
                                <div
                                    className="mr-4  text-gray-400  rounded-md">
                                    <div className="h-[100px]">
                                        <span>
                                            {this.props.project.description}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="grid grid-cols-1">
                                    <a href={this.props.project.url} target={"_blank"} rel="noreferrer">
                                        <Button className={"text-gray-300"} color={"ghost"}>
                                            <FontAwesomeIcon icon={faExternalLink} className="ml-3" />
                                            <span> لینک سایت</span>
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}