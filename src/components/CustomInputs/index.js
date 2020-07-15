import React from "react";

import MaskedInput from 'react-text-mask'
import { phoneMask, cepMask, dateMask } from '../../utils/masks.js'

const PhoneInput = ( props ) => (
  <MaskedInput 
    { ...props } 
    type="text"
    mask={ phoneMask }
  />
);

const CepInput = ( props ) => (
  <MaskedInput 
    { ...props } 
    type="text"
    mask={ cepMask }
  />
);

const DateInput = ( props ) => (
  <MaskedInput 
    { ...props } 
    type="text"
    mask={ dateMask }
  />
);

export { PhoneInput, CepInput, DateInput };