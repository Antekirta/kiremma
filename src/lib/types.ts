export type ExperiencePosition = {
    title: string;
    year: string;
    description: string;
    skills: string[];
};

export type Experience = {
    company: string;
    link: string;
    positions: ExperiencePosition[];
};
