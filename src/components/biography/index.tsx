import React from "react";

export class BiographyComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <div className="mb-10">
                    <div className="flex items-center text-gray-700 dark:text-gray-300 mb-2">
                        <h2 className="mx-2 text-2xl font-semi-bold dark:text-gray-100">
                            👋
                            به سایت شخصی من خوش آمدید
                        </h2>
                    </div>
                </div>
            </div>
        )
    }
}
