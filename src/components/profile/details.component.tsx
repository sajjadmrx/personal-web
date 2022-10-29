import React from "react";
import {Avatar} from "flowbite-react";

interface State {
    avatarUrl: string
}

export class DetailsComponent extends React.Component<any, any> {
    state: State = {
        avatarUrl: 'https://avatars.githubusercontent.com/u/66132114'
    }

    render() {
        return (
            <div className={'text-center'}>

                <Avatar bordered={true}
                        img={this.state.avatarUrl}
                        size={"xl"}
                        className=" mb-6"
                        status="online"
                        alt={"sajjadmrx avatar"}
                >

                </Avatar>
                <h1 className="text-2xl text-white font-medium mb-2 ">سجاد</h1>
                <h6 className="text-1xl text-white font-medium mb-2">(NodeJs developer (Backend</h6>
                <div className="flex flex-wrap justify-center mb-2">
                    <span className="badge">توسعه دهنده وب</span>
                    <span className="badge">توسعه دهنده ربـات</span>
                </div>
            </div>
        )
    }
}
