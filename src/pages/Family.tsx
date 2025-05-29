import React, { useState } from "react";
import { DsTabs, DsTab, DsBox, styled } from "@am92/react-design-system";
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

interface FamilyProps {
  config?: { fields?: FieldConfig[] };
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
 const Family = ({ config = {}, onTabChange }: FamilyProps) => {
  const [formData, setFormData] = useState<Record<string, string | boolean>>({
    fatherName: "",
    fatherLastName: "",
    motherName: "",
    motherLastName: "",
    nomineeRelationship: "",
    nomineeName: "",
    nomineeDob: "", // Default to current date (07:48 PM IST, May 28, 2025)
    nomineeFlatSquare: "",
    nomineeStreet: "",
    nomineeAddressLine3: "",
    nomineePin: "",
    nomineeCity: "",
    nomineeState: "",
    nomineeLandmark: "",
    nomineeCountry: "",
    nomineeDeclaration: false,
    guardianName: "",
    guardianRelationship: "",
    guardianFlat: "",
    guardianStreet: "",
    guardianLandmark: "",
    guardianPin: "",
    guardianCity: "",
    guardianState: "",
    guardianCountry: "",
    guardianAddressLine3: "",
  });

  const handleChange = (e: any) => {
    const { name, value, checked, type }: any = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const defaultConfig: FieldConfig[] = [
    { type: "text", label: "FATHER'S NAME", name: "fatherName" },
    { type: "text", label: "FATHER'S LAST NAME", name: "fatherLastName" },
    { type: "text", label: "MOTHER'S NAME", name: "motherName" },
    { type: "text", label: "MOTHER'S LAST NAME", name: "motherLastName" },
    {
      type: "text",
      label: "NOMINEE RELATIONSHIP WITH APPLICANT",
      name: "nomineeRelationship",
    },
    { type: "text", label: "NOMINEE NAME", name: "nomineeName" },
    { type: "text", label: "NOMINEE DOB", name: "nomineeDob" },
    {
      type: "text",
      label: "NOMINEE FLAT NUMBER/BUILDING NAME",
      name: "nomineeFlat",
    },
    {
      type: "text",
      label: "NOMINEE STREET/AREA/SECTOR",
      name: "nomineeStreet",
    },
    {
      type: "text",
      label: "NOMINEE ADDRESS LINE 3",
      name: "nomineeAddressLine3",
    },
    { type: "text", label: "NOMINEE AREA PIN CODE", name: "nomineePin" },
    { type: "text", label: "NOMINEE CITY", name: "nomineeCity" },
    { type: "text", label: "NOMINEE STATE", name: "nomineeState" },
    { type: "text", label: "NOMINEE LANDMARK", name: "nomineeLandmark" },
    { type: "text", label: "NOMINEE COUNTRY", name: "nomineeCountry" },
    {
      type: "checkbox",
      label: "NOMINEE DECLARATION",
      name: "nomineeDeclaration",
    },
    { type: "text", label: "GUARDIAN FULL NAME", name: "guardianName" },
    {
      type: "text",
      label: "GUARDIAN RELATIONSHIP WITH MINOR",
      name: "guardianRelationship",
    },
    {
      type: "text",
      label: "GUARDIAN FLAT NO/BUILDING NAME",
      name: "guardianFlat",
    },
    {
      type: "text",
      label: "GUARDIAN STREET/AREA/SECTOR",
      name: "guardianStreet",
    },
    {
      type: "text",
      label: "GUARDIAN LANDMARK (OPTIONAL)",
      name: "guardianLandmark",
    },
    { type: "text", label: "GUARDIAN AREA PIN CODE", name: "guardianPin" },
    { type: "text", label: "GUARDIAN CITY", name: "guardianCity" },
    { type: "text", label: "GUARDIAN STATE", name: "guardianState" },
    { type: "text", label: "GUARDIAN COUNTRY", name: "guardianCountry" },
    {
      type: "text",
      label: "GUARDIAN ADDRESS LINE 3",
      name: "guardianAddressLine3",
    },
    { type: "button", label: "NEXT", name: "next" },
  ];

  const mergedConfig = [...defaultConfig, ...(config.fields || [])];

  return (
    <FormContainer>
      <DsTabs
        value={1}
        onChange={(_e: React.ChangeEvent<{}>, newValue: number) =>
          onTabChange(newValue)
        }
        centered
      >
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

export default Family
