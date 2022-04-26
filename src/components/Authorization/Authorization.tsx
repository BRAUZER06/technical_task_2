import React from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks/useAppSelector";
import { fetchAllPostsAction } from "../../redux/ducks/comment/actionCreators";

import Button from "../../pages/Buttons/Button";
import Input from "../../pages/Input/Input";
import InputList from "../../pages/InputList/InputList";

import { Formik } from "formik";

import styles from "./Authorization.module.scss";
import fetchJson from "../../cities.json";
import { validationsSchema } from "./validation";

const Authorization = () => {
  const dispatch = useDispatch();
  const { error, loading, posts } = useAppSelector((state) => state.post);
  const [checkedStatusRedact, setCheckedStatusRedact] = React.useState(false);
  const [statusInputValue, setStatusInputValue] = React.useState(
    "Прежде чем действовать, надо понять"
  );

  //нужно доделать
  const inputRef = React.useRef<any>(false);

  React.useEffect(() => {
    dispatch(fetchAllPostsAction());
  }, []);

  const onClickStatusRedact = () => {
    //нужно доделать
    inputRef.current.focus();
    setCheckedStatusRedact(true);
  };
  const onChangeInputValue = (event: any) => {
    setStatusInputValue(event.target.value);
  };

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
          cityName: "",
          universityName: "",
          password: "",
          confirmPassword: "",
          email: "",
          iAgree: false,
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
            <div className={styles.container__nameUser}>
              <h2>
                Здравствуйте, <strong>Человек №3596941</strong>
              </h2>
              <a onClick={onClickStatusRedact} href="/#">
                Сменить статус
              </a>
            </div>

            <div className={styles.container__status}>
              <input
                ref={inputRef}
                onChange={onChangeInputValue}
                value={statusInputValue}
              />
            </div>

            <div className={styles.container__inputs}>
              <div className={styles.container__inputs_list}>
                <p className={styles.container_all_p}>Ваш город</p>

                <InputList
                  name="cityName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.cityName}
                  defaltValue={fetchJson
                    .filter((item: any) => item.population > 5000)
                    .map((item) => item.city)}
                  error={touched.cityName && errors.cityName}
                  placeholder="Ваш город..."
                />
              </div>

              <div className={styles.container__inputs_list}>
                <p className={styles.container_all_p}>Ваш университет</p>
                <InputList
                  name="universityName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.universityName}
                  defaltValue={posts.map((item) => item.name)}
                  error={touched.universityName && errors.universityName}
                  placeholder="Ваш университет..."
                />
              </div>

              <hr className={styles.container__inputs_hr} />
              <div className={styles.container__inputs_text}>
                <p className={styles.container_all_p}>Пароль</p>
                <Input
                  type="password"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  error={touched.password && errors.password}
                  placeholder="Введите пароль..."
                />
                <p className={styles.container_all_p_gray}>
                  Ваш новый пароль должен содержать не менее 5 символов.
                </p>
              </div>

              <div className={styles.container__inputs_text}>
                <p className={styles.container_all_p}>Пароль еще раз</p>
                <Input
                  type="password"
                  name="confirmPassword"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.confirmPassword}
                  error={touched.confirmPassword && errors.confirmPassword}
                  placeholder="Введите пароль еще раз..."
                />
                <p className={styles.container_all_p_gray}>
                  Повторите пароль, пожалуйста, это обезопасит вас с нами на
                  случай ошибки.
                </p>
              </div>

              <hr className={styles.container__inputs_hr} />
              <div className={styles.container__inputs_text}>
                <p className={styles.container_all_p}>Электронная почта</p>
                <Input
                  type="text"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  error={touched.email && errors.email}
                  placeholder="Введите почту..."
                />
                <p className={styles.container_all_p_gray}>
                  Можно изменить адрес, указанный при регистрации.{" "}
                </p>
              </div>
            </div>

            <div className={styles.container__iAgree}>
              <p className={styles.container_all_p}>Я согласен</p>
              <div className={styles.container__iAgree__input}>
                <input
                  name="iAgree"
                  checked={values.iAgree}
                  onChange={handleChange}
                  type="checkbox"
                />
                <p>принимать актуальную информацию на емейл</p>
              </div>
            </div>

            <div className={styles.container__button}>
              <Button disabled={!isValid && !dirty} onClick={handleSubmit}>
                Изменить
              </Button>
              <p>последние изменения{}</p>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Authorization;
