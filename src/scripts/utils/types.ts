import { type Template } from 'twig';

export type TTemplateData = {
  tpl: Template | undefined;
  isSucceed: boolean;
};

export type TEmbedData = {
  video?: string;
  content?: string;
  modalClass?: string;
  isHeaderHidden?: number;
  isFooterHidden?: number;
};

export type TProjectData = {
  id: number;
  name: string;
  introtext: string;
  content: string;
  bg: string;
  logo: string;
  picture: string;
  fill: string;
  list: string[];
};

export type TModalOptions<T> = {
  btnSel: string;
  overlayClass: string;
  titleSel: string;
  inputSel: string;
  handleOpen: ((data: T) => void) | null;
};
