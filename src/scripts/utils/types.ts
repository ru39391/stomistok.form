import { type Template } from 'twig';

export type TCaptionOptions = {
  sel: string;
};

export type TCounterOptions = {
  sectionSel: string;
  counterSel: string;
};

export type TCounterData = {
  items: HTMLElement[];
  values: number[];
};

export type TPanelOptions = {
  sel: string;
};

export type TSectionOptions = {
  sel: string;
};

export type TTogglerOptions = {
  itemSel: string;
  btnSel: string;
};

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

export type TModalOptions = {
  btnSel: string;
  overlayClass: string;
  titleSel: string;
  inputSel: string;
};
