import {
  ProForm,
  ProFormGroup,
  ProFormSwitch,
  ProFormText,
  ProFormTreeSelect,
  ProFormUploadButton,
} from '@ant-design/pro-components';
import { Form, InputNumber, InputNumberProps, message, Card, Button } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { addGoods, queryGoodsById } from '@/services/swagger/goodsAll';
import { FormInstance } from 'antd/lib';
import { history, useParams } from '@umijs/max';
import { IDomEditor, IEditorConfig, IToolbarConfig } from '@wangeditor/editor';
import { Editor, Toolbar } from '@wangeditor/editor-for-react';
import '@wangeditor/editor/dist/css/style.css'; // 引入 css
import { queryGoodsCategoryList } from '@/services/swagger/goodsCategory';

interface GoodsAllEditFormProps {
  onSubmit: (values: any) => void;
}

const GoodsAllEditForm: React.FC<GoodsAllEditFormProps> = () => {
  const formRef = useRef<FormInstance>();
  const { id } = useParams<{ id: string }>();
  const [currInfo, setCurrInfo] = useState();
  const [editor, setEditor] = useState<IDomEditor | null>(null); // TS 语法
  const [html, setHtml] = useState('<p>hello</p>');
  // 工具栏配置
  const toolbarConfig: Partial<IToolbarConfig> = {}; // TS 语法
  // 编辑器配置
  const editorConfig: Partial<IEditorConfig> = {
    placeholder: '请输入内容...',
  };

  useEffect(() => {
    if (id) {
      const goodsId = Number(id);
      if (goodsId) {
        queryGoodsById(goodsId).then((res) => {
          if (res.code === 0) {
            setHtml(res.data.content);
            setCurrInfo({ ...res.data });
          }
        });
      } else {
        setCurrInfo({});
      }
    } else {
      setCurrInfo({});
    }
  }, [id]);

  const handleSubmit = (values: any) => {
    // form.validateFields().then((values) => {

    // });

    values.content = html;
    if (values.images.length > 0) {
      values.main_image = '111';
      values.images = values.images.map((t) => {
        return { url: './server-api/upLoads', filename: '.png' };
      });
    }
    // 提交数据到后台
    addGoods(values).then((res) => {
      if (res.code === 0) {
        message.success('添加成功');
        history.push(`/goods/list`);
      }
    });
  };
  const convertToTree = (data: any[], category_id: number | null = null): any[] => {
    return data
      .filter((item) => item.parent_id === category_id)
      .map((item) => {
        let childrens = convertToTree(data, item.category_id);
        return {
          ...item,
          label: item.category_name,
          value: item.category_id,
          children: childrens.length > 0 ? childrens : undefined,

        };
      });
  };

  const onChange: InputNumberProps['onChange'] = (values) => {
    console.log('changed', values);
  };

  return currInfo ? (
    <Card
      title="商品编辑"
      extra={
        <Button
          type="primary"
          onClick={() => {
            history.push(`/goods/list`);
          }}
        >
          返回
        </Button>
      }
    >
      <ProForm formRef={formRef} initialValues={currInfo} onFinish={handleSubmit} >
        <ProFormTreeSelect
          label="商品分类"
          name="category_id"
          request={async () => {
            const res = await queryGoodsCategoryList({
              pageNo: 1,
              pageSize: 100,
            });
            return [{ value: 0, label: '顶级分类', children: convertToTree(res.data || [], 0) }];
          }}
        />
        <ProFormText
          width={800}
          name="goods_name"
          label="商品名称"
          rules={[{ required: true, message: '请输入商品名称' }]}
        />

        <ProFormText width={800} name="goods_features" label="商品特点" />

        <ProFormUploadButton
          name="images"
          label="商品轮播图(多张)"
          max={9}
          fieldProps={{
            name: 'file',
            listType: 'picture-card',
            headers: {
              Authorization: `${localStorage.getItem('token')}`,
            },
          }}
          action="/api/upload/file"
          extra="第一张图片为封面图,其它图片为轮播图,建议像素750*750,可拖拽使其改变顺序,最多支持上传9张"
          rules={[{ required: true, message: '请上传图片' }]}
        />

        <ProFormText
          width={800}
          name="sort"
          label="排序"
          rules={[{ required: true, message: '请输入排序' }]}
        />

        <ProFormGroup>
          <ProFormSwitch label="上架状态:" name="status" />
        </ProFormGroup>

        <ProFormText
          width={800}
          name="total_stock"
          label="商品总库存"
          rules={[{ required: true, message: '请输入商品总库存' }]}
        />

        <ProFormText width={800} name="goods_id" label="商品货号" />
        <Form.Item
          label="商品重量"
          name="weight"
          rules={[{ required: true, message: '请输入商品重量' }]}
        >
          <InputNumber
            style={{ width: 800 }}
            min={0}
            max={Number.MAX_SAFE_INTEGER}
            defaultValue={1}
            onChange={onChange}
            addonAfter="克"
          />
        </Form.Item>
        <Form.Item
          label="售价"
          name="sale_price"
          rules={[{ required: true, message: '请输入商品售价' }]}
        >
          <InputNumber
            style={{ width: 800 }}
            min={1}
            max={Number.MAX_SAFE_INTEGER}
            defaultValue={1}
            onChange={onChange}
            addonAfter="元"
          />
        </Form.Item>
        <Form.Item
          label="市场价"
          name="market_price"
          rules={[{ required: true, message: '请输入商品市场价' }]}
        >
          <InputNumber
            style={{ width: 800 }}
            min={1}
            max={Number.MAX_SAFE_INTEGER}
            defaultValue={1}
            onChange={onChange}
            addonAfter="元"
          />
        </Form.Item>
        <ProFormText
          width={800}
          label="单位"
          name="unit"
          rules={[{ required: true, message: '请输入单位' }]}
        />

        <ProFormText width={800} label="商品总销量" name="virtual_sales" />

        {/* <ProFormTextArea width={800} colProps={{ span: 24 }} label="商品详情" name="description" /> */}

        <Form.Item label="商品详情">
          <>
            <div style={{ border: '1px solid #ccc', zIndex: 100 }}>
              <Toolbar
                editor={editor}
                defaultConfig={toolbarConfig}
                mode="default"
                style={{ borderBottom: '1px solid #ccc' }}
              />
              <Editor
                defaultConfig={editorConfig}
                value={html}
                onCreated={setEditor}
                onChange={(editor) => setHtml(editor.getHtml())}
                mode="default"
                style={{ height: '500px', overflowY: 'hidden' }}

              />
            </div>
          </>
        </Form.Item>
      </ProForm>
    </Card>
  ) : null;
};

export default GoodsAllEditForm;
