export interface TestRequestStructure {
    name: string;
    description: string;
    runStatus: 'PASSED' | 'FAILED' | 'SKIPPED';
}

export interface TestResponseStructure {
    id: string;
    name: string;
    description?: string;
    runStatus: string;
}

export interface LaunchRequestStructure {
    name: string;
    initiator?: string;
    suite: string;
}

export interface LaunchResponseStructure {
    id: string;
    name: string;
    initiator?: string;
    suite: string;
    testsExecuted: number;
    testsPassed: number;
    testsFailed: number;
    testsSkipped: number;
}