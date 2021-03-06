import {list} from 'utils';
import {message} from 'antd';

const validateFileTypes = async (file, type = 'image', extensions = ['png', 'jpeg'], mbLimit = 2) => {
  const isValidType = extensions.some((extension) => `${type}/${extension}` === file.type);

  if (!isValidType) message.error(`Sólo está permitido subir imágenes en formato: ${list(extensions)}`);

  const isLessThanMbLimit = file.size / 1024 / 1024 < mbLimit;

  if (!isLessThanMbLimit) message.error(`La imagen debe medir menos de ${mbLimit} mb`);

  return isValidType && isLessThanMbLimit;
};

const downloadFile = (url, name) => {
  const link = document.createElement('a');
  link.download = name;
  link.href = url;
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export {validateFileTypes, downloadFile};
