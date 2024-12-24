import { PageContainer, ProColumns, ProTable } from '@ant-design/pro-components';
import { Button, Card, message, Popconfirm, Space, Tabs } from 'antd';
import React, { useRef, useState } from 'react';
import { history } from '@umijs/max';
import { deleteGoods, queryGoodsAllList } from '@/services/swagger/goodsAll';
import moment from 'moment';
import { queryGoodsCategoryList } from '@/services/swagger/goodsCategory';
const GoodsPage: React.FC = () => {
  const [activeTabKey, setActiveTabKey] = useState('-1');
  const actionRef = useRef();
  const handleDelete = async (id: number) => {
    const hide = message.loading('删除中...');
    try {
      const res = await deleteGoods(id);
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
      title: 'ID',
      hideInSearch: true,
      dataIndex: 'goods_id',
    },

    {
      title: '商品名称',
      dataIndex: 'goods_name',
    },
    {
      title: '分类',
      dataIndex: 'category_id',
      valueType: 'treeSelect',
      proFieldProps: {
        request: async () => {
          const { data } = await queryGoodsCategoryList({});
          let rst = data.map((item: any) => {
            console.log(item);
            return {
              label: item.category_name,
              value: item.category_id,
              key: item.category_id,
              // children: item.children.map((child: any) => {
              //   return {
              //     label: child.category_name,
              //   }
              // })
            };
          });
          console.log('rst');
          return rst;
        },
      },
    },

    {
      title: '售价',
      dataIndex: 'sale_price',
      valueType: 'money',
      hideInSearch: true,
    },
    {
      title: '库存',
      dataIndex: 'total_stock',
      valueType: 'digit',
      hideInSearch: true,
    },
    {
      title: '已售',
      dataIndex: 'virtual_sales',
      valueType: 'digit',
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
      title: '排序',
      dataIndex: 'sort',
      hideInSearch: true,
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
                history.push(`/goods/edit/${record.goods_id}`);
              }}
            >
              编辑
            </a>
            <Popconfirm
              title="确定要删除该商品吗?"
              onConfirm={() => {
                handleDelete(record.goods_id);
              }}
              okText="确定"
              cancelText="取消"
            >
              <a>删除</a>
            </Popconfirm>
          </Space>
        );
      },
    },
  ];

  return (
    <PageContainer title={false}>
      <Card bordered={false} styles={{ header: { display: 'none' } }}>
        <Tabs
          activeKey={activeTabKey}
          onTabClick={(e) => {
            setActiveTabKey(e);
          }}
          items={[
            {
              label: '全部',
              key: '-1',
              children: <></>,
            },
            {
              label: '销售中',
              key: '1',
              children: <></>,
            },
            {
              label: '下架中',
              key: '0',
              children: <></>,
            },
          ]}
        ></Tabs>
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
          params={{ status: activeTabKey }}
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
      </Card>
    </PageContainer>
  );
};

export default GoodsPage;
