// import {munch} from '/png/munch.png';
// import {snapshots} from '/png/snapshots.png';

export const ProjectImage = (project) => {
    const projectID = project.toLowerCase();
    switch (projectID) {
        case 'munch':
        return '/png/munch.png';
        case 'iiitu-snapshots-frontend':
        return '/png/snapshots.png';
        default:
        return null;
    }
    };