import React, { Component } from "react";
import 'devicon';
import { Skill } from "../../shared/interfaces/skill.interface";
import { SkillsSection } from "./Skills.section";


interface Prop {
}

interface State {
    isLoading: boolean;
    skills: Skill[];
}

const storeUrl = () => `https://raw.githubusercontent.com/sajjadmrx/sajjadmrx/main/skills.json?time=${Date.now()}`


export class SkillsComponent extends Component<Prop, State> {
    constructor(props: Prop) {
        super(props);
        this.state = {
            isLoading: true,
            skills: []
        };
    }

    componentDidMount() {
        fetch(storeUrl())
            .then(response => response.json())
            .then(data => {
                this.setState({ skills: data, isLoading: false });
            })
            .catch(error => console.error("Error fetching skills data:", error));
    }

    render() {
        const { isLoading, skills } = this.state;



        return (
            <div>
                <SkillsSection skills={skills} isLoading={isLoading} />
            </div>
        );
    }
}

