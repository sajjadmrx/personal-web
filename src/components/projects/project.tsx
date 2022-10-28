import React from "react";
import {Project} from "../../shared/interfaces/project.interface";

import {Button} from 'react-daisyui'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExternalLink} from '@fortawesome/free-solid-svg-icons'
import axios from "axios";


interface Prop {
    project: Project
}

interface StatusState {
    isOnline: boolean | undefined
}

export class ProjectComponent extends React.Component<Prop, StatusState> {
    state: StatusState = {
        isOnline: undefined
    }

    async componentWillUnmount() {
        try {
            const url: string = this.props.project.checkUrl
            await axios.get(url, {
                timeout: 1000
            })
            this.setState({
                isOnline: true
            })
        } catch (e) {
            this.setState({
                isOnline: false
            })
        }
    }

    componentDidMount() {
    }

    render() {

        return (
            <div>
                <div className="indicator w-60 cursor-pointer">
                    <div className="">

                        {this.state.isOnline == undefined ?
                            <span
                                className="indicator-item indicator-top indicator-end badge badge-warning">نامعلوم</span>
                            : this.state.isOnline ? <span
                                    className="indicator-item indicator-top indicator-end badge badge-accent">در دسترس</span> :
                                <span
                                    className="indicator-item indicator-top indicator-end badge badge-error">آفلاین</span>
                        }

                        <img alt={this.props.project.names.eng + " Logo"} className="rounded-[1rem]"
                             src={this.props.project.image}/>
                        <div className="card bg-secondary/80  -left-0 -top-[160px] py-2">
                            <div className="cad-header text-center">
                                {this.props.project.names.farsi}
                            </div>
                            <div
                                className="card-body">
                                <div
                                    className="mr-4 scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-500 rounded-md">
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
                                        <Button className={""} color={"ghost"}>
                                            <FontAwesomeIcon icon={faExternalLink} className="ml-3"/>
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