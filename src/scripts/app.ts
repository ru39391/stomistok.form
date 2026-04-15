import Twig, { type Template } from 'twig';
import { showFormItems, submitForm } from './modules/forms';
import Modal from './modules/modal';
import { FORM_SELECTORS } from './utils/constants';

const renderTemplate = (tpl: Template): Node[] => {
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

const initApp = () => {
  const modals = new Modal({
    btnSel: '.js-modal-btn',
    overlayClass: 'popup-overlay',
    titleSel: FORM_SELECTORS.formTitle,
    inputSel: FORM_SELECTORS.inputTitle,
    handleOpen: (item) => showFormItems(item)
  });

  submitForm(modals);
};

const renderData = async () => {
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
    const arr = renderTemplate(tpl as Template);

    arr.forEach(item => wrapper?.append(item));
    initApp();
  } catch(err) {
    console.error(err);
  }
};

const init = () => {
  import.meta.env.VITE_APP_ENV === 'development' ? renderData() : initApp();
};

export {
  init
};
