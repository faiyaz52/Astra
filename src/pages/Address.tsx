import React, { useState } from 'react';
import { DsTabs, DsTab, DsBox,styled } from '@am92/react-design-system';

import FormComponent from '../components/FormComponent';

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

interface AddressProps {
  config?: { fields?: FieldConfig[] };
  onTabChange: (newTab: number) => void;
}

const FormContainer = styled(DsBox)({
  maxWidth: '400px',
  margin: '0 auto',
  padding: 'var(--ds-spacing-pleasant)',
  backgroundColor: 'var(--ds-colour-backgroundLight)',
  borderRadius: 'var(--ds-borderRadius-medium)',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
});

 const Address = ({ config = {}, onTabChange }: AddressProps) => {
  const [formData, setFormData] = useState<Record<string, string>>({
    residenceType: '',
    communicationAddress1: '',
    communicationAddress2: '',
    communicationAddress3: '',
    communicationAddress4: '',
    communicationAddress5: '',
    communicationAddress6: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const defaultConfig: FieldConfig[] = [
    {
      type: 'select',
      label: 'PERMANENT RESIDENCE TYPE',
      name: 'residenceType',
      options: [
        { value: '', label: 'Select' },
        { value: 'Owned', label: 'Owned' },
        { value: 'Rented', label: 'Rented' },
      ],
    },
    { type: 'text', label: 'COMMUNICATION ADDRESS LINE 1', name: 'communicationAddress1' },
    { type: 'text', label: 'COMMUNICATION ADDRESS LINE 2', name: 'communicationAddress2' },
    { type: 'text', label: 'COMMUNICATION ADDRESS LINE 3', name: 'communicationAddress3' },
    { type: 'text', label: 'COMMUNICATION ADDRESS LINE 4', name: 'communicationAddress4' },
    { type: 'text', label: 'COMMUNICATION ADDRESS LINE 5', name: 'communicationAddress5' },
    { type: 'text', label: 'COMMUNICATION ADDRESS LINE 6', name: 'communicationAddress6' },
    { type: 'button', label: 'Procced',name:"next" },
  ];

  const mergedConfig = [...defaultConfig, ...(config.fields || [])];

  return (
    <FormContainer>
      <DsTabs value={2} onChange={(_e: React.ChangeEvent<{}>, newValue: number) => onTabChange(newValue)} centered>
        <DsTab label="PERSONAL" />
        <DsTab label="FAMILY" />
        <DsTab label="ADDRESS" />
      </DsTabs>

      <FormComponent
        config={mergedConfig}
        formData={formData}
        handleChange={handleChange}
      />
    </FormContainer>
  );
};

export default Address