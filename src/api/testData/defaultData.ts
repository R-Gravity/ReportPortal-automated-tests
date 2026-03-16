import { LaunchRequestStructure, TestRequestStructure } from "../utils/handler";

export const defaultTestOptions: TestRequestStructure = {
  name: 'Test',
  description: 'Description',
  runStatus: 'PASSED',
}

export const defaultLaunchOptions: LaunchRequestStructure = {
  name: 'Launch',
  initiator: 'AQA-Test',
  suite: 'api-tests'
}