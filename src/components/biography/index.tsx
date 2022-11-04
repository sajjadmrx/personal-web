import React from "react";

export class BiographyComponent extends React.Component<any, any> {
    render() {
        const aboutMe: string = ``;
        return (
            <div>
                <div className="mb-10">
                    <div className="flex items-center  dark:text-gray-300 mb-2">
                        <h1 className="mx-0  font-semibold text-3xl  ">
                            👋
                            به سایت شخصی من خوش آمدید
                        </h1>

                    </div>
                    <div className={'mx-6 mt-5 '}>
                        <p className={'text-sm'}>
                            {aboutMe}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
