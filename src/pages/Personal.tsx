import React, { useState } from "react";
import {
  DsTypography,
  DsTabs,
  DsTab,
  DsBox,
  DsButton,
} from "@am92/react-design-system";
import { styled } from "@am92/react-design-system";
import FormComponent from "../components/FormComponent";

// Define types for the configuration object
interface Option {
  value: string;
  label: string;
}

interface FieldConfig {
  type: "text" | "select" | "checkbox" | "button";
  label: string;
  name: string;
  options?: Option[];
}

interface PersonalProps {
  config?: any;
  onTabChange: (newTab: number) => void;
}

const FormContainer = styled(DsBox)({
  maxWidth: "400px",
  margin: "0 auto",
  padding: "var(--ds-spacing-pleasant)",
  backgroundColor: "var(--ds-colour-backgroundLight)",
  borderRadius: "var(--ds-borderRadius-medium)",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
});

 const Personal = ({ config = {}, onTabChange }: PersonalProps) => {
  const [formData, setFormData] = useState<Record<string, string>>({
    email: "",
    maritalStatus: "",
    education: "",
    occupation: "",
    yearsInEmployment: "",
    sourceOfFunds: "",
    occupationIndustry: "",
    natureOfBusiness: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const defaultConfig: FieldConfig[] = [
    { type: "text", label: "EMAIL", name: "email" },
    {
      type: "select",
      label: "MARITAL STATUS",
      name: "maritalStatus",
      options: [
        { value: "", label: "Select" },
        { value: "Unmarried", label: "Unmarried" },
        { value: "Married", label: "Married" },
        { value: "Divorced", label: "Divorced" },
      ],
    },
    {
      type: "select",
      label: "EDUCATIONAL QUALIFICATION",
      name: "education",
      options: [
        { value: "", label: "Select" },
        { value: "Post Graduate", label: "Post Graduate" },
        { value: "Graduate", label: "Graduate" },
        { value: "High School", label: "High School" },
      ],
    },
    {
      type: "select",
      label: "OCCUPATION TYPE",
      name: "occupation",
      options: [
        { value: "", label: "Select" },
        { value: "Salaried", label: "Salaried" },
        { value: "Self-Employed", label: "Self-Employed" },
      ],
    },
    {
      type: "text",
      label: "NO. OF YEARS IN EMPLOYMENT ORGANISATION",
      name: "yearsInEmployment",
    },
    { type: "text", label: "SOURCE OF FUNDS", name: "sourceOfFunds" },
    { type: "text", label: "OCCUPATION INDUSTRY", name: "occupationIndustry" },
    { type: "text", label: "NATURE OF BUSINESS", name: "natureOfBusiness" },
    { type: "button", label: "NEXT", name: "NEXT" },
  ];

  const mergedConfig = [...defaultConfig, ...(config.fields || [])];

  return (
    <FormContainer>
      <DsTabs
        value={0}
        onChange={(_e: React.ChangeEvent<{}>, newValue: number) =>
          onTabChange(newValue)
        }
        centered
      >
        <DsTab label="PERSONAL" />
        <DsTab label="FAMILY" />
        <DsTab label="ADDRESS" />
      </DsTabs>

      <DsBox display="flex" alignItems="center" mb={3} mt={2}>
        <DsBox ml={2}>
          <DsTypography variant="headingBoldMedium" fontSize="18px">
            USER NAME
          </DsTypography>
          <DsTypography
            variant="supportRegularInfo"
            color="var(--ds-colour-textSecondary)"
          >
            +91 PHONE NUMBER
          </DsTypography>
        </DsBox>
      </DsBox>

      <FormComponent
        config={mergedConfig}
        formData={formData}
        handleChange={handleChange}
      />
      <DsButton onClick={function Ga() {}} onFocusVisible={function Ga() {}}>
        Save and Next
      </DsButton>
    </FormContainer>
  );
};

export default Personal;
