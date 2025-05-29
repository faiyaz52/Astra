import React from 'react';
import {
  DsTextField,
  DsSelect,
  DsMenuItem,
  DsFormControl,
  DsCheckbox,
  DsFormControlLabel,
  DsBox,
} from '@am92/react-design-system';

// Define a simplified SelectChangeEvent type (if not provided by react-design-system)
// type SelectChangeEvent<T = unknown> = {
//   target: { value: T; name: string };
// };

// Define types for the configuration object
interface Option {
  value: string;
  label: string;
}

interface FieldConfig {
  type: 'text' | 'select' | 'checkbox' | 'button';
  label: string;
  name: string;
  options?: Option[];
}

interface FormComponentProps {
  config: FieldConfig[];
  formData: Record<string, string | boolean>;
  handleChange: (
    e: any
  ) => void;
}

const FormComponent: React.FC<FormComponentProps> = ({
  config,
  formData,
  handleChange,
}) => {

  return (
    <DsBox>
      {config.map((field, index) => {
        switch (field.type) {
          
          case 'text':
            return (
              <DsBox key={index} mb={2}>
                <DsTextField
                  label={field.label}
                  name={field.name}
                  value={(formData[field.name] as string) || ''}
                  onChange={handleChange}
                  fullWidth
                //   labelProps={{ shrink: true }}
                />
              </DsBox>
            );
          case 'select':
            return (
              <DsBox key={index} mb={2}>
                <DsFormControl fullWidth>
                  {/* <DsSelect
                   label={field.label}
                    name={field.name}
                    // value={(formData[field.name] as string) || ''}
                    onChange={handleChange} // Now compatible with SelectChangeEvent
                    displayEmpty options={[]}                  >
                    {field.options?.map((option, idx) => (
                      <DsMenuItem key={idx} value={option.value}>
                        {option.label}
                      </DsMenuItem>
                    ))}
                  </DsSelect> */}
                   <DsSelect
                    label={field.label}
                    name={field.name}
                    value={formData[field.name] as string || ''}
                    onChange={handleChange}
                    displayEmpty options={[]}    
                  >
                    {field?.options?.map((option, idx) => (
                      <DsMenuItem key={idx} value={option.value}>
                        {option.label}
                      </DsMenuItem>
                    ))}
                  </DsSelect>
                </DsFormControl>
              </DsBox>
             
            );
          case 'checkbox':
            return (
              <DsBox key={index} mb={2}>
                <DsFormControlLabel
                  control={
                    <DsCheckbox
                      name={field.name}
                      checked={(formData[field.name] as boolean) || false}
                      onChange={handleChange}
                    />
                  }
                  label={field.label}
                  labelPlacement="end"
                />
              </DsBox>
            );
          // case 'button':
          //   return (
          //     <DsBox key={index} mb={2}>
          //       <DsButton
          //         variant="contained"
          //         fullWidth
          //         sx={{
          //           backgroundColor: 'var(--ds-colour-actionPrimary)',
          //           color: 'var(--ds-colour-white)',
          //           '&:hover': { backgroundColor: 'var(--ds-colour-actionSecondary)' },
          //         }}
          //       >
          //         {field.label}
          //       </DsButton>
          //     </DsBox>
          //   );
          default:
            return null;
        }
      })}
    </DsBox>
  );
};

export default FormComponent;