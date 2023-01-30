import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Alert, Spinner} from "flowbite-react";
import {GithubReposComponent} from "./repos";
import {GithubRepo} from "../../../shared/interfaces/github.interface";
import {GithubUserService} from "../../../shared/services/github/github-user.service";
import {faGithub} from '@fortawesome/free-brands-svg-icons'

interface State {
    repos: GithubRepo[],
    error: string | null
}

export class OpenSourceGithubComponent extends React.Component<any, State> {
    state: State = {
        repos: [],
        error: null
    }

    async componentDidMount() {
        try {
            const username: string = 'sajjadmrx'
            const githubUserService = new GithubUserService(username);
            const repos: Array<GithubRepo> = await githubUserService.getRepos()

            const easyExpressRouter: GithubRepo | undefined = repos.find(rep => rep.id == 551021489)
            if (easyExpressRouter)
                repos.unshift(easyExpressRouter)
            const tops = repos.sort((a, b) => b.stargazers_count - a.stargazers_count)
            this.setState({
                repos: tops
            })
        } catch (e) {
            this.setState({
                repos: [],
                error: 'خطا در دریافت دیتا'
            })
        }
    }

    render() {
        return (
            <div>
                <div className="flex items-center mb-5">
                    <FontAwesomeIcon icon={faGithub} size={"2x"}/>
                    <h2 className="mx-2 text-2xl font-semibold">
                        پروژهای متن باز
                    </h2>
                </div>
                <div>
                    {this.state.error ? OpenSourceGithubComponent.Error(this.state.error) : this.state.repos.length ?
                        <GithubReposComponent repos={this.state.repos}/> : <this.Loading/>}
                </div>
            </div>
        )
    }

    private Loading() {
        return (
            <div className={"text-center"}>
                <Spinner
                    color="success"
                    aria-label="Failure spinner"
                />
            </div>
        )
    }

    static Error(text: string) {
        return (
            <div className={"mx-4"}>
                <Alert
                    color="failure"
                    withBorderAccent={true}
                >
  <span>
{text}
  </span>
                </Alert>
            </div>
        )
    }
}