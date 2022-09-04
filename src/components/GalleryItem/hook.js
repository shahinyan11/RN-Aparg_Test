import {useField} from 'formik';

function useContainer({name, numbersOnly}) {
  const [field, meta] = useField(name);
  /**
   * Handle input key down event
   */
  // const onKeyDown = useImmutableCallback(event => {
  //   // workaround for https://stackoverflow.com/q/31706611
  //   const isNotAllowed = all(code => event.keyCode !== code)(ALLOWED_KEY_CODES);
  //
  //   if (
  //     (numbersOnly && isNotAllowed && Number.isNaN(Number(event.key))) ||
  //     (numbersOnly && event.keyCode === SPACE_CODE)
  //   ) {
  //     event.preventDefault();
  //   }
  // });

  return {
    field,
    meta,
  };
}

export default useContainer;
