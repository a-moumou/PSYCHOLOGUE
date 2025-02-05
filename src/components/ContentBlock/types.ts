import { TFunction } from "react-i18next";

export interface ContentBlockProps {
  icon?: string;
  title: string;
  content: string;
  section?: {
    title: string;
    content: string;
    icon: string;
  }[];
  button?: (
    | {
      title: string;
      color?: undefined;
      textColor?: string | undefined;
      id?: string;
    }
    | {
      title: string;
      color: string;
      textColor?: string | undefined;
      id?: string;
    }
  )[];
  t: TFunction;
  id: string;
  direction: "left" | "right";
  className?: string;
}
