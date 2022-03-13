// Types
import { TValidatorRequired } from './types';

class ValidatorManager {
  required: TValidatorRequired = (value) =>
    [NaN, null, undefined].includes(+value) || value.toString().trim() === '';
}

export const validators = new ValidatorManager();
