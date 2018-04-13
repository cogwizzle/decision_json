import { promptInit, writeDecisionTree } from '../controller';

describe('PromptInit.', () => {

  it('PromptInit shall prompt the user for initial information about the decision tree.', () => {
    
    const startTriggered = jest.spyOn(prompt, 'start');
    const informationTrigger = jest.spyOn(prompt, 'get');
    const results = promptInit();

    expect(startTriggered).toHaveBeenCalled();
    expect(informationTrigger).toHaveBeenCalled();
    expect(results).toBe(undefined);
  });
});

describe('WriteFile.', () => {
 
  it('Writefile shall call the functions to write a file to the system.', () => {
    const writeTrigger = jest.spyOn(fs, 'writeFile');
    const stringifyTrigger = jest.spyOn(JSON, 'stringify');
    const results = writeDecisionTree('test.json', {});

    expect(writeTrigger).toHaveBeenCalled();
    expect(stringifyTrigger).toHaveBeenCalled();
    expect(results).toBe(undefined);
  });
});