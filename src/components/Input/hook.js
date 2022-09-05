import {useField} from 'formik';

function useContainer({name}) {
  const [field, meta] = useField(name);

  return {
    field,
    meta,
  };
}

export default useContainer;
