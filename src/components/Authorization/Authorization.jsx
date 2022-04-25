import React from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks/useAppSelector";
import Button from "../../pages/Buttons/Button";
import Input from "../../pages/Input/Input";
import InputList from "../../pages/InputList/InputList";
import { fetchAllPostsAction } from "../../redux/ducks/comment/actionCreators";
import styles from "./Authorization.module.scss";
import { Formik } from "formik";
import * as yup from "yup";

const Authorization = () => {
  const dispatch = useDispatch();
  const { error, loading, posts } = useAppSelector((state) => state.post);
  const validationsSchema = yup.object().shape({
    password: yup
      .string()
      .typeError("Должно быть строкой")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
        "Пароль не надежный "
      )
      .min(5, "Используйте не менее 5 символов")
      .max(100, "Слишком большой пароль")
      .required("Укажите пароль"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Пароли не совпадают")
      .min(5, "Используйте не менее 5 символов")
      .max(100, "Слишком большой пароль")
      .required("Это поле обязательно"),
    email: yup
      .string()
      .email("Введите верный email")
      .matches(
        /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/gm,
        "Введите корректные данные "
      )
      .min(5, "Используйте не менее 7 символов")
      .max(100, "Слишком много символов")
      .required("Укажите E-mail"),
  });

  // React.useEffect(() => {
  //   dispatch(fetchAllPostsAction());
  // }, []);
  // console.log(posts);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className={styles.wrapper}>
      <Formik
        initialValues={{
          password: "",
          confirmPassword: "",
          email: "",
        }}
        validateOnBlur
        onSubmit={(value) => {
          console.log(value);
        }}
        validationSchema={validationsSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty,
        }) => (
          <div className={styles.container}>
            {console.log(errors)}
            <div className={styles.container__nameUser}>
              <h2>
                Здравствуйте, <strong>Человек №3596941</strong>
              </h2>
              <a href="/#"> Сменить статус</a>
            </div>
            <div className={styles.container__status}>
              <p>Прежде чем действовать, надо понять</p>
            </div>

            <div className={styles.container__inputs}>
              <div className={styles.container__inputs_list}>
                <p className={styles.container_all_p}>Ваш город</p>
                <InputList name={"city"} />
              </div>
              <div className={styles.container__inputs_list}>
                <p className={styles.container_all_p}>Ваш университет</p>{" "}
                <InputList name={"university"} />
              </div>

              <hr className={styles.container__inputs_hr} />
              <div className={styles.container__inputs_text}>
                <p className={styles.container_all_p}>Пароль</p>
                <Input
                  type="password"
                  name="password"
                  onBlur={handleBlur}
                  values={values.password}
                  onChange={handleChange}
                />
                <p className={styles.container_all_p_gray}>
                  Ваш новый пароль должен содержать не менее 5 символов.
                </p>
              </div>
              {touched.password && errors.password && <p>{errors.password}</p>}
              <div className={styles.container__inputs_text}>
                <p className={styles.container_all_p}>Пароль еще раз</p>
                <Input
                  type="password"
                  name="confirmPassword"
                  onBlur={handleBlur}
                  values={values.confirmPassword}
                  onChange={handleChange}
                />
                <p className={styles.container_all_p_gray}>
                  Повторите пароль, пожалуйста, это обезопасит вас с нами на
                  случай ошибки.
                </p>
              </div>
              {touched.confirmPassword && errors.confirmPassword && (
                <p>{errors.confirmPassword}</p>
              )}
              <hr className={styles.container__inputs_hr} />
              <div className={styles.container__inputs_text}>
                <p className={styles.container_all_p}>Электронная почта</p>
                <Input
                  type="text"
                  onBlur={handleBlur}
                  name="email"
                  values={values.email}
                  onChange={handleChange}
                />
                <p className={styles.container_all_p_gray}>
                  Можно изменить адрес, указанный при регистрации.{" "}
                </p>
              </div>
              {touched.email && errors.email && <p>{errors.email}</p>}
            </div>
            <div className={styles.container__iAgree}>
              <p className={styles.container_all_p}>Я согласен</p>
              <div className={styles.container__iAgree__input}>
                <input
                  name="iAgree"
                  value={values.iAgree}
                  onChange={handleChange}
                  type="checkbox"
                />
                <p>принимать актуальную информацию на емейл</p>
              </div>
            </div>
            <div className={styles.container__button}>
              <Button
                disabled={!isValid && !dirty}
                onClick={handleSubmit}
                type="submit"
                value="Изменить"
              >
                Изменить
              </Button>

              <p>последние изменения 15 мая 2012 в 14:55:17</p>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Authorization;
