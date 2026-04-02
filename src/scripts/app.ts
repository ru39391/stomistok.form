import Twig, { type Template } from 'twig';
import { submitForm } from './modules/forms';
import Modal from './modules/modal';
import { FORM_SELECTORS } from './utils/constants';

const renderData = (tpl: Template): Node[] => {
  const parser = new DOMParser();

  const { body } = parser.parseFromString(
    tpl.render(),
    'text/html'
  );

  return Array.from(body.children);
}

const fetchTemplate = async (): Promise<Template | undefined> => {
  try {
    const res = await fetch('src/assets/templates/tpl.twig');
    const data = await res.text();

    return Twig.twig({ data });
  } catch(err) {
    console.error(err);
  }
}

const init = () => {
  submitForm();
  new Modal({
    btnSel: '.js-modal-btn',
    overlayClass: 'modal-overlay',
    titleSel: FORM_SELECTORS.formTitle,
    inputSel: FORM_SELECTORS.inputTitle
  });
};

const initApp = async () => {
  const wrapper = document.querySelector<HTMLDivElement>('#app');

  [
    'https://stomistok.ru/css/bootstrap.min.css',
    'https://stomistok.ru/css/styles.min.css',
    'https://stomistok.ru/css/theme.min.css'
  ].forEach((value) => {
    const link = document.createElement('link');

    link.rel = 'stylesheet';
    link.href = value;
    wrapper?.append(link);
  });

  try {
    const tpl = await fetchTemplate();
    const arr = renderData(tpl as Template);

    arr.forEach(item => wrapper?.append(item));
    init();
  } catch(err) {
    console.error(err);
  }
};

export {
  init,
  initApp
}
