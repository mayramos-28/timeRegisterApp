export interface Project {
    id?: string;
    user: string;
    name: string;
    description: string;
    image: string;
    date: Date;
}

export interface Task {
    id?: string;
    name: string;
    projectId: string;
    description: string;
    date: Date;

}

export interface subTask {
    id?: string;
    name: string;
    taskId: string;
    description: string;
    date: Date;
}

export interface TimeRegister {
    id?: string;
    parentId: string;
    isTask: boolean;
    date: string;
    startTime: string;
    stopTime: string;
    totalTime: string;

}