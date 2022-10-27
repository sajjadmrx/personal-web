import React from "react";

export class FooterComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <footer className="mx-auto text-center my-8">
                    <p className="text-gray-500" dir="ltr">
                        تمامی حقوق این سایت محفوظ است.
                    </p>
                </footer>
            </div>
        )
    }
}