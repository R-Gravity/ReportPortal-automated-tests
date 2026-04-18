import { defaultTestOptions, defaultLaunchOptions } from "../testData/defaultData";
import { TestRequestStructure, TestResponseStructure, LaunchRequestStructure, LaunchResponseStructure } from "../utils/handler";

export async function generateTest(options: TestRequestStructure = defaultTestOptions): Promise<TestResponseStructure> {
  const response =  // Make API call to create a test with the provided options
  console.log('Test created with ID:', response.id, 'From options: ', options);
  return response;
}

export async function generateLaunch(options: LaunchRequestStructure = defaultLaunchOptions): Promise<LaunchResponseStructure> {
  const response =  // Make API call to create a launch with the provided options
  console.log('Launch created with ID:', response.id, 'From options: ', options);
  return response;
}
