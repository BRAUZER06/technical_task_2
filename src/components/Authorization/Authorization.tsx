import React from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks/useAppSelector";
import Button from "../../pages/Buttons/Button";
import Input from "../../pages/Input/Input";
import InputList from "../../pages/InputList/InputList";
import { fetchAllPostsAction } from "../../redux/ducks/comment/actionCreators";
import styles from "./Authorization.module.scss";

const Authorization = () => {
  const { error, loading, posts } = useAppSelector((state) => state.post);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchAllPostsAction());
  }, []);
  console.log(posts);

  const onChangeInput = (e: any) => {
    console.log(e.target.value);
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.container__nameUser}>
          <h2>
            Здравствуйте, <strong>Человек №3596941</strong>
          </h2>
          <a href="#"> Сменить статус</a>
        </div>
        <div className={styles.container__status}>
          <p>Прежде чем действовать, надо понять</p>
        </div>
        <div className={styles.container__inputs}>
          <div className={styles.container__inputs_list}>
            <p className={styles.container_all_p}>Ваш город</p>
            <InputList />
          </div>
          <div className={styles.container__inputs_list}>
            <p className={styles.container_all_p}>Ваш университет</p>{" "}
            <InputList />
          </div>

          <hr />
          <div className={styles.container__inputs_text}>
            <p className={styles.container_all_p}>Пароль</p>
            <Input onChange={onChangeInput} />
            <p className={styles.container_all_p_gray}>Ваш новый пароль должен содержать не менее 5 символов.</p>
          </div>
          <div className={styles.container__inputs_text}>
            <p className={styles.container_all_p}>Пароль еще раз</p>
            <Input onChange={onChangeInput} />
            <p className={styles.container_all_p_gray}>
              Повторите пароль, пожалуйста, это обезопасит вас с нами на случай
              ошибки.
            </p>
          </div>
          <hr />
          <div className={styles.container__inputs_text}>
            <p className={styles.container_all_p}>Электронная почта</p>
            <Input onChange={onChangeInput} />
            <p className={styles.container_all_p_gray}>Можно изменить адрес, указанный при регистрации. </p>
          </div>
        </div>
        <div className={styles.container__iAgree}>
          <p className={styles.container_all_p}>Я согласен</p>
          <div className={styles.container__iAgree__input}>
            <input type="checkbox" />
            <p >принимать актуальную информацию на емейл</p>
          </div>
        </div>
        <div className={styles.container__button}>
          <Button value="Изменить" />
          <p>последние изменения 15 мая 2012 в 14:55:17</p>
        </div>
      </div>
    </div>
  );
};

export default Authorization;
