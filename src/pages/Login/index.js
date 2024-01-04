import { Button, Form, Input, message } from "antd";
import "./index.scss";
import { useDispatch } from "react-redux";
import { handleLogin } from "@/store/modules/user";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  /**
   * 验证表单成功
   * @param { object } value
   */
  const onFinish = async (value) => {
    const res = await dispatch(handleLogin(value));
    console.log(res);
    navigate("/");
    message.success("登录成功");
  };

  const onFinishFailed = () => {
    console.log(999);
  };
  return (
    <div className="login_wrapper">
      <div className="login_form">
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          validateTrigger="onBlur"
          autoComplete="off"
        >
          <Form.Item
            label="手机号"
            name="mobile"
            rules={[
              {
                required: true,
                message: "请输入手机号!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="验证码"
            name="code"
            rules={[
              {
                required: true,
                message: "请输入验证码!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
