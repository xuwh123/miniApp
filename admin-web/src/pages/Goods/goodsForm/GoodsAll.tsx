import { addGoods, editGoods, queryGoodsAllList } from '@/services/swagger/goodsAll';
import { ActionType, ProColumns, ProForm, ProFormText, ProTable } from '@ant-design/pro-components';
import { Button, message, Modal, Space } from 'antd';
import { useRef, useState } from 'react';
import { Navigate } from '@umijs/max';
const GoodsAll: React.FC = () => {
  const [currentRow, setCurrentRow] = useState();
  const [openModal, setOpenModal] = useState(false);
  const fromRef=useRef<ActionType>();

const headerSubmit =async (values: any) => {
    const hide= message.loading('保存中...');
    try {
      if (currentRow) {
        editGoods({...currentRow, ...values}).then((res) => {
            hide();
            if (res.code === 0) {
              message.success('修改成功');
              fromRef.current?.reload();
            }
            setOpenModal(false);
            setCurrentRow(undefined);
        });
      }else{
        addGoods({...(currentRow||{}),...values}).then((res)=>{
            hide();
            if (res.code === 0) {
              message.success('新增成功');
              fromRef.current?.reload();
            }

        })
      }
    }catch (error) {
      hide()
      message.error('保存失败');
    }
  };




  const columns: ProColumns[] = [
    {
      title: 'ID',
      dataIndex: 'goods_id',
    },
    {
      title: '排序',
      dataIndex: 'sort',
    },
    {
      title: '分类',
      dataIndex: 'category_id',
    },
    {
      title: '商品名称',
      dataIndex: 'goods_name',
    },
    {
      title: '售价',
      dataIndex: 'sale_price',
    },
    {
      title: '库存',
      dataIndex: 'total_stock',
    },
    {
      title: '已售',
      dataIndex: 'virtual_sales',
    },
    {
      title: '状态',
      dataIndex: 'status',
    },
    {
      title: '添加时间',
      dataIndex: 'created_time',
    },
    {
      title: '操作',
      dataIndex: 'action',
      render: (_, record) => {
        <Space>
          <a
            type="link"
            onClick={() => {
              setCurrentRow(record)
              setOpenModal(true)
            }}
          >编辑</a>
        </Space>;
      },
    },
  ];

  return (
    <>
      <ProTable
        columns={columns}

        headerTitle={<Button type="primary"
          onClick={()=>{
            setCurrentRow(undefined);
            setOpenModal(true);
          }}>添加商品</Button>}
        request={async (params: any) => {
          const res = await queryGoodsAllList({
            ...params,
            pageNo: params.current,
            pageSize: params.pageSize,
          });
          return {
            data: res.data,
            success: res.code == 0,
            total: res.data.length,
          };
        }}
      ></ProTable>
      <Modal
       open={openModal}
       onCancel={()=>{
        setOpenModal(false)
       }}
       onOk={()=>{

       }}>

      </Modal>

    </>
  );
};
export default GoodsAll;
