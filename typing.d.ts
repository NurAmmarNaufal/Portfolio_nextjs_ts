interface SanityBody {
    _createdAt: string;
    _updatedAt: string;
    _id: string;
    _rev: string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    }
}

export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    address: string;
    backgroundInformation: string;
    email: string;
    role: string;
    heroImage: Image;
    name: string;
    phoneNumber: string;
    profilePicture: Image;
}

export interface Technology extends SanityBody {
    _type: "skill";
    image: Image;
    progress: number;
    titles: string;
}

export interface Skill extends SanityBody {
    _type: "skill";
    image: Image;
    progress: number;
    titles: string;
}

export interface Project extends SanityBody {
    title: string;
    _type: "project";
    image: Image;
    linkToBuild: string;
    summary: string;
    technologies: Technology[];
}

export interface Experience extends SanityBody {
    _type: "experience";
    company: string;
    companyImage: Image;
    dateStarted: string;
    dateEnded: string;
    isCurrentlyWorkingHere: boolean;
    jobTitle: string;
    points: string[];
    technologies: Technology[];
}

export interface Social extends SanityBody {
    _type: "social";
    title: string;
    url: string;
}