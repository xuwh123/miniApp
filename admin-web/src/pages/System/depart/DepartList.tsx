import { editDepart, addDepart, queryDepartList, deleteDepart } from '@/services/swagger/depart';
import { ActionType, ProColumns, ProForm, ProFormText, ProFormTreeSelect, ProTable } from '@ant-design/pro-components';
import { Button, message, Modal, Popconfirm, Space } from 'antd';
import { FormInstance } from 'antd/lib';
import { useRef, useState } from 'react';

 const convertToTree=(data:any[],parentId:number| null=null):any[]=>{
   return data
   .filter((item)=> item.parent_id===parentId)
    .map((item)=> ({
      ...item,
     title:item.department_name,
     value:item.department_id,
      children:convertToTree(data,item.department_id),
    }));
   };
const DepartListPage: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [currentRow, setCurrentRow] = useState();
  const formRef = useRef<FormInstance>();
  const actionRef = useRef<ActionType>();

  const handleDelete = async (id: number) => {
    const hide = message.loading('删除中...');
    try {
      const res = await deleteDepart(id);
      hide();
      if (res.code === 0) {
        message.success('删除成功');
      }
      actionRef.current?.reload();
    } catch (error) {
      hide();
      message.error('删除失败');
    }
  };

  const columns: ProColumns[] = [
    {
      title: '部门编号',
      dataIndex: 'department_id',
    },
    {
      title: '部门名称',
      dataIndex: 'department_name',
    },
    {
       title: '上级部门',
       dataIndex:'parent_id',
       valueType: 'treeSelect',
      },
    {
      title: '操作',
      dataIndex: 'action',
      align:'center',
      render: (_, record) => (
        <Space>
          <a
            type="link"
            onClick={() => {
              setCurrentRow(record);
              setOpenModal(true);
            }}
          >
            编辑
          </a>
          <Popconfirm
        title="确定要删除该部门吗?"
        onConfirm={() => {
          handleDelete(record.department_id);
        }}
        okText="确定"
        cancelText="取消"
      >
        <a key="delete">删除</a>
      </Popconfirm>
        </Space>
      ),
    },
  ];
  const handerFinish = async (values: any) => {
    console.log(values);
    const hide = message.loading('保存中...');
    try {
      if (currentRow) {
        editDepart({ ...currentRow, ...values }).then((res) => {
          hide();
          if (res.code === 0) message.success('修改成功');
          actionRef.current?.reload();
        });
        setOpenModal(false);
      } else {
        addDepart({ ...(currentRow || {}), ...values }).then((res) => {
          hide();
          if (res.code === 0) message.success('新增成功');
          actionRef.current?.reload();
        });
      }
      setOpenModal(false);
      formRef.current?.resetFields();
    } catch (error) {
      hide();
      message.error('新增失败');
      return false;
    }
  };

  return (
    <>
      <ProTable
        columns={columns}
        key={'department_id'}
        headerTitle={
          <Button
            type="primary"
            onClick={() => {
              setCurrentRow(undefined);
              setOpenModal(true);
            }}
          >
            新增
          </Button>
        }
        request={async (params: any) => {
          const res = await queryDepartList({
            ...params,
            pageNo: params.current,
            pageSize: params.pageSize,
          });
          return {
            data: convertToTree(res.data||[]),
            success: res.code == 0,
            total: res.data?.length,
          };
        }}
        actionRef={actionRef}
      />
      {openModal&&(
      <Modal
        title={currentRow ? '编辑部门' : '新增部门'}
        open={openModal}
        onCancel={() => {
          setOpenModal(false);
          formRef.current?.resetFields();
        }}
        onOk={() => {
          formRef.current?.submit();
        }}
      >
        <ProForm
          submitter={false}
          formRef={formRef}
          initialValues={currentRow}
          onFinish={handerFinish}
        >
            <ProFormTreeSelect
              label="上级部门"
              name="parent_id"
              request={async () => {
                const res = await queryDepartList({
                  pageNo: 1,
                  pageSize: 100,
                });
                return convertToTree(res.data||[]);
                }}
           />

          <ProFormText label="部门名称" name="department_name" />
        </ProForm>
      </Modal>)}

    </>
  );
};
export default DepartListPage;
