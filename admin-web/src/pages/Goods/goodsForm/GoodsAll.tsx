import { addGoods, editGoods, queryGoodsAllList } from '@/services/swagger/goodsAll';
import { ActionType, ProColumns, ProForm, ProFormText, ProTable } from '@ant-design/pro-components';
import { Button, message, Modal, Space } from 'antd';
import { useRef, useState } from 'react';
import { history, request } from '@umijs/max';
const GoodsAll: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const actionRef = useRef();

  const columns: ProColumns[] = [
    {
      title: 'ID',
      dataIndex: 'goods_id',
    },

    {
      title: '商品名称',
      dataIndex: 'goods_name',
    },
    {
      title: '分类',
      dataIndex: 'category_id',
    },
    {
      title: '售价',
      dataIndex: 'sale_price',
      valueType: 'money',
    },
    {
      title: '库存',
      dataIndex: 'total_stock',
      valueType: 'digit',
    },
    {
      title: '已售',
      dataIndex: 'virtual_sales',
      valueType: 'digit',
    },
    {
      title: '状态',
      dataIndex: 'status',
    },
    {
      title: '排序',
      dataIndex: 'sort',
    },
    {
      title: '添加时间',
      dataIndex: 'created_time',
      valueType: 'dateTime',
    },
    {
      title: '操作',
      dataIndex: 'action',
      render: (_, record) => {
        return (
          <Space>
            <a
              type="link"
              onClick={() => {
                history.push(`/goods/edit/${record.goods_id}`);
              }}
            >
              编辑
            </a>
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
              history.push(`/goods/edit`);
            }}
          >
            添加商品
          </Button>
        }
        params={{ status: 1 }}
        request={async (params: any) => {
          const res = await queryGoodsAllList({
            ...params,
            pageNo: params.current,
            pageSize: params.pageSize,
          });
          return {
            data: res.data,
            success: res.code === 0,
            total: res.totalCount,
          };
        }}
        actionRef={actionRef}
      ></ProTable>
      <Modal
        open={openModal}
        onCancel={() => {
          setOpenModal(false);
        }}
        onOk={() => {
          setOpenModal(false);
        }}
      ></Modal>
    </>
  );
};
export default GoodsAll;
