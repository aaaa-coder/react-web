import "./index.scss";
import { useRef, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Breadcrumb,
  Radio,
  Select,
  Button,
  Form,
  Input,
  message,
  Modal,
  Upload,
} from "antd";
import { addArticle } from "@/apis/publish";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useChannel } from "@/hooks/useChannel";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const Publish = () => {
  // ------------------------- 表单提交功能 -----------------
  // form组件实例
  const acticleFormRef = useRef();

  /**
   * 重置表单
   */
  const resetForm = () => {
    setRadioValue(0);
    acticleFormRef.current.resetFields();
  };

  /**
   * 输入表单
   */
  const onFinish = async (formData) => {
    formData.cover = {
      type: radioValue,
      images: [],
    };
    console.log(fileList);
    const { message: resMessage } = await addArticle(formData);
    if (resMessage === "OK") {
      message.success("新增文章成功");
      resetForm();
    }
  };

  // ----------------- 单选功能 ----------------
  const [radioValue, setRadioValue] = useState(0);
  const handleRadioChange = (props) => {
    setRadioValue(props.target.value);
  };

  // ------------- 频道功能 ------------------
  const { Option } = Select;

  let channelList = useChannel();

  // ---------------- 上传图片功能 -----------------------
  const [fileList, setFileList] = useState([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const handleCancel = () => {
    setPreviewOpen(false);
  };

  return (
    <div className="publish_wrapper">
      <Breadcrumb
        items={[
          {
            title: <a href="/home">首页</a>,
          },
          {
            title: "发表文章",
          },
        ]}
      />

      <div className="publish_content">
        <Form
          ref={acticleFormRef}
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{ channel_id: "" }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="标题"
            name="title"
            rules={[
              {
                required: true,
                message: "请输入标题",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="频道"
            name="channel_id"
            rules={[
              {
                required: true,
                message: "请选择频道",
              },
            ]}
          >
            <Select>
              {channelList.map((item) => (
                <Option key={item.id} value={item.id}>
                  {item.name}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item label="封面">
            <Radio.Group onChange={handleRadioChange} value={radioValue}>
              <Radio value={1}>一张</Radio>
              <Radio value={3}>三张</Radio>
              <Radio value={0}>无图</Radio>
            </Radio.Group>

            {radioValue > 0 && (
              <div>
                <Upload
                  action={"http://geek.itheima.net/v1_0/upload"}
                  listType="picture-card"
                  fileList={fileList}
                  onPreview={handlePreview}
                  onChange={handleChange}
                >
                  {fileList.length >= radioValue ? null : (
                    <div>
                      <PlusOutlined />
                      <div
                        style={{
                          marginTop: 8,
                        }}
                      >
                        上传封面
                      </div>
                    </div>
                  )}
                </Upload>
                <Modal
                  open={previewOpen}
                  title={previewTitle}
                  footer={null}
                  onCancel={handleCancel}
                >
                  <img
                    alt="example"
                    style={{
                      width: "100%",
                    }}
                    src={previewImage}
                  />
                </Modal>
              </div>
            )}

            {/* { radioValue } */}
          </Form.Item>

          <Form.Item label="内容" name="content">
            <ReactQuill
              theme="snow"
              placeholder="请输入内容"
              className="textarea_wrapper"
            />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              发布
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Publish;
