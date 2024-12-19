import {
  ProForm,
  ProFormRadio,
  ProFormText,
  ProFormTreeSelect,
  ProTable,
  type ActionType,
  type ProColumns,
} from '@ant-design/pro-components';
import { Button,  message, Modal } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { addUser, deleteUser, editUser, queryUserList } from '@/services/user';
import { FormInstance } from 'antd/lib';
import {queryDepartList} from '@/services/swagger/depart';

const TableList: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const [currentRow, setCurrentRow] = useState<API.Sys.UserInfo>();
  const [openModal, setOpenModal] = useState(false);
  const fromRef = useRef<FormInstance>();
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [departments,setDepartments]=useState<any[]>([]);

  const convertToTree=(data:any[],parentId:number|null=null):any[]=>{
    return data
    .filter((item)=> item.parent_id===parentId)
   .map((item)=>({
    ...item,
    title:item.department_name,
    value:item.department_id,
    chidren:convertToTree(data,item.department_id),

   }));
  };

useEffect(()=>{
  const fetchDepartments=async()=>{
    const res=await queryDepartList({
      pageNo:1,
      pageSize:100,
    });
    if(res.code===0){
      setDepartments(convertToTree(res.data||[]));
    }
  };
  fetchDepartments();
},[]);

 const getDepartmentNameById=(departmentId:number|undeined)=>{
  const department=departments.find((dept)=>dept.value===departmentId)
  return department?department.title:'';

 };




  const columns: ProColumns<API.Sys.UserInfo>[] = [

    {
      title: '用户id',
      dataIndex: 'user_id',
      hideInSearch: true,
      align: 'center',
    },
    {
      title: '用户名',
      dataIndex: 'username',
    },
    {
      title: '登录手机号',
      dataIndex: 'phone_number',
      hideInSearch: true,

    },

    {
      title: '登录账号',
      dataIndex: 'login_account',
      hideInSearch: true,
      align: 'center',
    },

    {
      title: '创建时间',
      dataIndex: 'created_time',
      valueType: 'dateTime',
    },

    {
      title: '最后登录时间',
      dataIndex: 'updated_time',
      valueType: 'dateTime',
      hideInSearch: true,

    },
    {
      title: '账号状态',
      dataIndex: 'status',
      hideInSearch: true,

      valueEnum: {
        0: {text: '禁用', status: 'Error'},
        1: {text: '启用', status: 'Success'},
      },
    },
    {
      title:'部门',
      dataIndex: 'department_name',
      align:'center',
      hideInSearch: true,

      render:(_,record)=>getDepartmentNameById(record.department_id),
      },
    {
      title: '操作',
      valueType: 'option',
      render: (_, record) => [
        <a
          key="edit"
          type="link"
          onClick={() => {
            setCurrentRow(record);
            setOpenModal(true);
          }}
        >
          编辑
        </a>,
        <a
          key="delete"
          onClick={() => {
            setCurrentRow(record);
            setDeleteModalVisible(true);
          }}
        >
          删除
        </a>
      ],
    },
  ];

  const headerSubmit = async (values: any) => {
    console.log(values);
    const hide = message.loading('保存中...');
    try {
      if (currentRow) {
        editUser({ ...currentRow, ...values }).then((res) => {
          hide();
          if (res.code === 0) {
            message.success('修改成功');
            actionRef.current?.reload();
          }
          setOpenModal(false);
          setCurrentRow(undefined);
        });
      } else {
        addUser({ ...(currentRow || {}), ...values }).then((res) => {
          hide();
          if (res.code === 0) {
            message.success('新增成功');
            actionRef.current?.reload();
          }
          setOpenModal(false);
        });
      }
    } catch (error) {
      hide();
      message.error('新增失败');
      hide();
      return false;
    }
  };
  const handleDeleteUser = async () => {
    const hide = message.loading('删除中...');
    console.log(currentRow);
    deleteUser(currentRow?.user_id || 0).then((res) => {
      hide();
      if (res.code === 0) {
        message.success('删除成功');
        actionRef.current?.reload();
        setDeleteModalVisible(false);
      } else {
        message.error('删除失败');
      }
    });
  };
  return (
    <>
      <ProTable
        columns={columns}
        actionRef={actionRef}
        scroll={{ x: 800 }}
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
          const res = await queryUserList({
            ...params,
            pageNo: params.current,
            pageSize: params.pageSize,
          });
          return {
            data: res.data,
            success: res.code == 0,
            total: res.data?.length,
          };
        }}
      />
      {openModal && (
        <Modal
          title="新增用户"
          open={openModal}
          onCancel={() => {
            setOpenModal(false);
            fromRef.current?.resetFields();
          }}
          onOk={() => {
            fromRef.current?.submit();
          }}
        >
          <ProForm
            formRef={fromRef}
            submitter={false}
            initialValues={currentRow}
            onFinish={headerSubmit}
          >
            <ProFormText name="username" label="用户名" />
            <ProFormText name="phone_number" label="手机号" />
            <ProFormText name="login_account" label="登录账号" />
            <ProFormRadio.Group
              name="status"
              label="状态"
              options={[
                { label: '启用', value: 1 },
                { label: '禁用', value: 0 },
              ]}
            />
            {currentRow?.user_id ? <></> : <ProFormText name="login_password" label="密码" />}
          <ProFormTreeSelect
           label="部门"
           name="department_id"
           request={async()=>departments}
                 />
          </ProForm>
        </Modal>
      )}
      <Modal
        open={deleteModalVisible}
        onCancel={() => setDeleteModalVisible(false)}
        onOk={handleDeleteUser}
      >
        <p>确定要删除用户吗</p>
      </Modal>
    </>
  );
};

export default TableList;
