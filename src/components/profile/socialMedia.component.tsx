import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai"
import { FaTelegramPlane } from "react-icons/fa"

export class SocialMediaComponent extends React.Component<any, any> {
    render() {
        const username: string = 'sajjadmrx'
        return (
            <div>
                <div className="flex flex-row-reverse mb-6 gap-2">
                    <a href={`https://t.me/${username}`} target="_blank" rel={'noreferrer'}>
                        <FaTelegramPlane size={30} />
                    </a>
                    <a href={`https://twitter.com/${username}`} target="_blank" rel={'noreferrer'}>
                        <AiOutlineTwitter size={30} />
                    </a>
                    <a href={`https://inkedin.com/in/${username}`} target="_blank" rel={'noreferrer'}>
                        <AiFillLinkedin size={30} />
                    </a>
                    <a href={`https://github.com/${username}`} target="_blank" rel={'noreferrer'}>
                        <AiFillGithub size={30} />
                    </a>
                </div>
            </div>
        )
    }
}