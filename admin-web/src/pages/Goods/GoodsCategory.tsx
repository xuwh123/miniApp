import {
  ProColumns,
  ProForm,
  ProFormRadio,
  ProFormText,
  ProFormTreeSelect,
  ProTable,
} from '@ant-design/pro-components';
import { Button, message, Modal, Popconfirm, Space } from 'antd';
import React, { useRef, useState } from 'react';
import moment from 'moment';
import {
  addCategory,
  deleteCategory,
  editCategory,
  queryGoodsCategoryList,
} from '@/services/swagger/goodsCategory';

const GoodsPage: React.FC = () => {
  const actionRef = useRef();
  const [currentRow, setCurrentRow] = useState();
  const [openModal, setOpenModal] = useState(false);
  const formRef = useRef();

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
  const handleDelete = async (id: number) => {
    const hide = message.loading('删除中...');
    try {
      const res = await deleteCategory(id);
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

  const handerFinish = async (values: any) => {
    const hide = message.loading('保存中...');
    try {
      if (currentRow) {
        editCategory({ ...currentRow, ...values }).then((res) => {
          hide();
          if (res.code === 0) message.success('修改成功');
          actionRef.current?.reload();
        });
        setOpenModal(false);
      } else {
        addCategory({ ...(currentRow || {}), ...values }).then((res) => {
          hide();
          if (res.code === 0) message.success('新增成功');
          actionRef.current?.reload();
        });
      }
    } catch (error) {
      hide();
      message.error('提交失败');
      return false;
    }
  };

  const columns: ProColumns[] = [
    {
      title: 'ID',
      hideInSearch: true,
      dataIndex: 'category_id',
    },

    {
      title: '分类名称',
      dataIndex: 'category_name',
    },

    {
      title: '排序',
      dataIndex: 'sort',
      hideInSearch: true,
    },

    {
      title: '状态',
      dataIndex: 'status',
      hideInSearch: true,
      valueEnum: {
        1: {
          text: '启用',
          status: 'Success',
        },
        0: {
          text: '禁用',
          status: 'Error',
        },
      },
    },

    {
      title: '添加时间',
      dataIndex: 'created_time',
      valueType: 'dateRange',
      render: (_, record) => {
        return moment(record.created_time).format('YYYY-MM-DD HH:mm:ss');
      },
      search: {
        transform: (value) => {
          return {
            start_time: value[0],
            end_time: value[1],
          };
        },
      },
    },
    {
      title: '操作',
      hideInSearch: true,
      dataIndex: 'action',
      render: (_, record) => {
        return (
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
                handleDelete(record.category_id);
              }}
              okText="确定"
              cancelText="取消"
            >
              <a key="detele">删除</a>
            </Popconfirm>
          </Space>
        );
      },
    },
  ];

  return (
    <>
      <ProTable
        columns={columns}
        headerTitle={
          <Button
            type="primary"
            onClick={() => {
              setCurrentRow(undefined);
              setOpenModal(true);
            }}
          >
            添加分类
          </Button>
        }
        request={async (params: any) => {
          const res = await queryGoodsCategoryList({
            ...params,
            pageNo: params.current,
            pageSize: params.pageSize,
          });
          return {
            data: convertToTree(res.data || [], 0),
            success: res.code === 0,
            total: res.data?.length,
          };
        }}
        actionRef={actionRef}
      ></ProTable>

      {openModal ? (
        <Modal
          title={currentRow ? '编辑' : '新增'}
          open={openModal}
          onCancel={() => {
            setOpenModal(false);
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
            <ProFormText
              name="category_name"
              label="分类名称"
              rules={[{ required: true, message: '请输入分类名称' }]}
            />

            <ProFormTreeSelect
              label="父级分类"
              name="parent_id"
              request={async () => {
                const res = await queryGoodsCategoryList({
                  pageNo: 1,
                  pageSize: 100,
                });
                return [
                  { value: 0, label: '顶级分类', children: convertToTree(res.data || [], 0) },
                ];
              }}
            />
            {/* <ProFormUploadButton
              name="main_image"
              label="分类图标"
              max={9}
              fieldProps={{
                name: 'file',
                listType: 'picture-card',
                headers: {
                  Authorization: `${localStorage.getItem('token')}`,
                },
              }}
              action="/api/upload/file"
              rules={[{ required: true, message: '请上传图片' }]}
            />
            <ProFormUploadButton
              name="main_image"
              label="分类图标"
              max={9}
              fieldProps={{
                name: 'file',
                listType: 'picture-card',
                headers: {
                  Authorization: `${localStorage.getItem('token')}`,
                },
              }}
              action="/api/upload/file"
              rules={[{ required: true, message: '请上传图片' }]}
            /> */}
            <ProFormRadio.Group
              name="status"
              label="状态"
              options={[
                { label: '启用', value: 1 },
                { label: '禁用', value: 0 },
              ]}
            />
          </ProForm>
        </Modal>
      ) : null}
    </>
  );
};

export default GoodsPage;
