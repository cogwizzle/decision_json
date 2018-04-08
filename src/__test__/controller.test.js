import { promptInit } from '../controller';
import prompt from 'prompt';

describe('PromptInit.', () => {

  jest.genMockFromModule('prompt');

  it('PromptInit shall prompt the user for initial information about the decision tree.', () => {
    
    const startTriggered = jest.spyOn(prompt, 'start');
    const informationTrigger = jest.spyOn(prompt, 'get');
    const results = promptInit();

    expect(startTriggered).toHaveBeenCalled();
    expect(informationTrigger).toHaveBeenCalled();
    expect(results).toBe(undefined);
  });
});