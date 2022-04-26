import React from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks/useAppSelector";
import { fetchAllPostsAction } from "../../redux/ducks/comment/actionCreators";

import Button from "../../pages/Buttons/Button";
import Input from "../../pages/Input/Input";
import InputList from "../../pages/InputList/InputList";
import WrapperInput from "../../pages/WrapperComponent/WrapperInput";

import { Formik } from "formik";

import styles from "./Authorization.module.scss";
import fetchJson from "../../cities.json";
import { validationsSchema } from "./validation";

const Authorization: React.FC = () => {
  const dispatch = useDispatch();
  const { error, loading, posts } = useAppSelector((state) => state.post);
  const [checkedStatusRedact, setCheckedStatusRedact] = React.useState(false);
  const [statusInputValue, setStatusInputValue] = React.useState(
    "Прежде чем действовать, надо понять"
  );

  const inputRef = React.useRef<any>(false);

  React.useEffect(() => {
    dispatch(fetchAllPostsAction());
  }, []);

  const onClickStatusRedact = () => {
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
          dataRedact: new Date(),
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
              <h2 className={styles.container__nameUser_helloUser}>
                Здравствуйте, <strong>Человек №3596941</strong>
              </h2>
              <a
                onClick={onClickStatusRedact}
                className={styles.container__nameUser_statusBtn}
                href="/#"
              >
                Сменить статус
              </a>
            </div>

            <div className={styles.container__statusDiv}>
              <input
                ref={inputRef}
                onChange={onChangeInputValue}
                value={statusInputValue}
                className={styles.container__statusDiv_input}
              />
            </div>

            <div className={styles.container__inputs}>
              <WrapperInput leftText="Ваш город">
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
              </WrapperInput>

              <WrapperInput leftText="Ваш университет">
                <InputList
                  name="universityName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.universityName}
                  defaltValue={posts.map((item) => item.name)}
                  error={touched.universityName && errors.universityName}
                  placeholder="Ваш университет..."
                />
              </WrapperInput>

              <hr className={styles.container__inputs_hr} />
              <WrapperInput
                leftText="Пароль"
                rightText="Ваш новый пароль должен содержать не менее 5 символов."
              >
                <Input
                  type="password"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  error={touched.password && errors.password}
                  placeholder="Введите пароль..."
                />
              </WrapperInput>

              <WrapperInput
                leftText="Пароль еще раз"
                rightText="Повторите пароль, пожалуйста, это обезопасит вас с нами
                            на случай ошибки."
              >
                <Input
                  type="password"
                  name="confirmPassword"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.confirmPassword}
                  error={touched.confirmPassword && errors.confirmPassword}
                  placeholder="Введите пароль еще раз..."
                />
              </WrapperInput>

              <hr className={styles.container__inputs_hr} />

              <WrapperInput
                leftText="Электронная почта"
                rightText="Можно изменить адрес, указанный при регистрации. "
              >
                <Input
                  type="text"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  error={touched.email && errors.email}
                  placeholder="Введите почту..."
                />
              </WrapperInput>
            </div>

            <div className={styles.container__iAgree}>
              <p className={styles.container__iAgree_text}>Я согласен</p>
              <div className={styles.container__iAgree__inputDiv}>
                <input
                  name="iAgree"
                  checked={values.iAgree}
                  onChange={handleChange}
                  type="checkbox"
                  className={styles.container__iAgree__inputDiv_input}
                />
                <p className={styles.container__iAgree__inputDiv_p}>
                  принимать актуальную информацию на емейл
                </p>
              </div>
            </div>

            <div className={styles.container__button}>
              <Button disabled={!isValid && !dirty} onClick={handleSubmit}>
                Изменить
              </Button>
              <p className={styles.container__button_data}>
                последние изменения 15 мая 2012 в 14:55:17
              </p>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Authorization;
