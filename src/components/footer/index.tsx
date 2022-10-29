import React from "react";

export class FooterComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <footer className="mx-auto text-center my-8">
                    <p className="text-gray-500">
                        قدرت گرفته از ☕ و 💛️
                    </p>
                    <p>
                        <a href={"https://github.com/sajjadmrx/personal-web"}>
                            لینک سورس
                        </a>
                    </p>
                </footer>
            </div>
        )
    }
}