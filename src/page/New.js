import { useState, useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { postPosts } from "../store/postsReducer";
import { Field, reduxForm, Fields, touch } from "redux-form";
import { Link } from "react-router-dom";
import { values } from "redux-form";

const New = (props) => {
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [menber_id, setMenberId] = useState();

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

  const onPost = (e) => {
    e.preventDefault();
    const postData = {
      name: "山田",
      menber_id: 1,
    };
    dispatch(postPosts(postData));
  };

  return (
    <>
      <div>
        <h2>This is New file. You name?</h2>
        <form onSubmit={onPost}>
          <Link to="/">TOP画面</Link>
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
              name={menber_id}
              type="text"
              component={renderField}
              onChange={(e) => setMenberId(e.target.value)}
            />
          </div>
          <input type="submit" value="Submit" disabled={false} />
          <Link to="/">キャンセル</Link>
        </form>
      </div>
    </>
  );
};

//const mapDispatchToProps = (dispatch) => ({ postNew });
const validate = (values) => {
  const errors = {};

  console.log(values.name);

  if (!values.name) {
    errors.name = "名前が入力されていません";
  }
  if (!values.menber_id) {
    errors.menber_id = "名前IDが入力されていません";
  }

  return errors;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (values) => {
      dispatch(postPosts(values));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(reduxForm({ validate, form: "NewForm" })(New));
