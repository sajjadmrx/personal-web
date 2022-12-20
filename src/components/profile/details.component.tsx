import React from "react";
import {Avatar} from "flowbite-react";
import {Badge} from "react-daisyui";

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

                <Avatar
                    img={this.state.avatarUrl}
                    size={"xl"}
                    className={'mb-6'}
                    alt={"sajjadmrx avatar"}
                >

                </Avatar>
                <h1 className="text-2xl text-white font-medium mb-2 ">سجاد</h1>
                <h6 className="text-1xl text-white font-medium mb-2">(NodeJs developer (Backend</h6>
                <div className="flex flex-wrap justify-center mb-2 gap-2">
                    <Badge color={"ghost"}>توسعه دهنده وب</Badge>
                    <Badge color={"ghost"}>توسعه دهنده ربات</Badge>
                </div>
            </div>
        )
    }
}
