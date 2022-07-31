import React, { useState, useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { postPosts } from "../store/postsReducer";
import { Field, reduxForm, getFormValues } from "redux-form";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const New = (props) => {
  const formValues = useSelector(
    (state) => getFormValues(props.form)(state) || {}
  );
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [menber_id, setMenberId] = useState();
  const history = useHistory();

  console.log(formValues.name);

  const onPost = (e) => {
    console.log(props);
    e.preventDefault();
    const postData = {
      name,
      menber_id,
    };
    dispatch(postPosts(postData)).then(() => {
      history.push("/"); // ここでcreateのactionが終わった後でpushする
    });
  };

  console.log(useSelector((state) => state.postsReducer.posts.derivice));

  return (
    <>
      <div>
        <h2>This is New file. You name?</h2>
        <Link to="/">TOP画面</Link>
        <form onSubmit={onPost}>
          <div>
            <Field
              label="name"
              name="name"
              type="text"
              component={renderField}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <Field
              label="menber_id"
              name="menber_id"
              type="text"
              component={renderField}
              onChange={(e) => setMenberId(e.target.value)}
            />
          </div>
          <input type="submit" value="Submit" disabled={false} />
        </form>
        <Link to="/">キャンセル</Link>
      </div>
    </>
  );
};

const renderField = (field) => {
  const {
    input,
    label,
    type,
    meta: { touched, error },
  } = field;

  return (
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  );
};

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "名前が入力されていません";
  }
  if (!values.menber_id) {
    errors.menber_id = "名前IDが入力されていません";
  }
  return errors;
};

//ここでReduxに上手く渡せていない。
const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: () => {
      dispatch(postPosts());
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(reduxForm({ validate, form: "NewForm" })(New));
