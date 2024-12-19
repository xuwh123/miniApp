import { ModalForm, ProForm, ProFormDependency, ProFormTreeSelect, ProTable } from '@ant-design/pro-components';
import { Form, Input, Modal, Table, TreeSelect } from 'antd';
import Title from 'antd/es/skeleton/Title';
import React from 'react';
import TableList from '../TableList';

interface GoodsAllEditFormProps {
  currentRow?: any;
  onSubmit: (values: any) => void;
}

const GoodsAllEditForm: React.FC<GoodsAllEditFormProps> = ({ currentRow, onSubmit }) => {
  const [form] = Form.useForm();

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      onSubmit(values);
    });
  };

  return (
    <>
      <ProForm
      submitter={false}
      >

        <ProFormTreeSelect
          initialValue={['0.0.0']}
           label="商品分类"
          width={800}
          fieldProps={{
            fieldNames:{
              label:'title',
            },
            treeData:currentRow,
            treeCheckable:true,
            showCheckedStrategy:TreeSelect.SHOW_PARENT,
            placeholder:'请选择分类'
          }}

      />

      </ProForm>
</>
  )
};

export default GoodsAllEditForm;