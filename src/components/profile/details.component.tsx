import React from "react";

export class DetailsComponent extends React.Component<any, any> {
    render() {
        return (
            <div className={'text-center'}>
                <img alt="a faceless man" className="w-full max-w-[250px] mb-6 rounded-lg"
                     src="/assets/images/profile.jpg"/>
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
