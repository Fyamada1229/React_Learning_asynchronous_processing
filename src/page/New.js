import { useState, useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { getPosts } from "../store/postsReducer";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

const New = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const test = (field) => {
    const {
      input,
      label,
      type,
      meta: { touched, error },
    } = field;
    return <div></div>;
  };

  return (
    <>
      <div>
        <h2>This is New file.</h2>
        <Link to="/">TOP画面</Link>
        <form>
          <div>
            <Field
              label="Title"
              name="title"
              type="text"
              component={this.test}
            />
            <Field label="Body" name="body" type="text" component={this.test} />
          </div>
          <div>
            <input type="submit" value="Submit" disabled={false} />
            <Link to="/">キャンセル</Link>
          </div>
        </form>
      </div>
    </>
  );
};

//const mapDispatchToProps = (dispatch) => ({ postNew });
const validate = (values) => {
  const errors = {};
  return errors;
};

export default connect(null, null)(reduxForm({ validate, form: "New" }))(New);
