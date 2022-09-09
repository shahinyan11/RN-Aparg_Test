import {useField} from 'formik';

function useContainer({name, numbersOnly}) {
  const [field, meta] = useField(name);

  return {
    field,
    meta,
  };
}

export default useContainer;
