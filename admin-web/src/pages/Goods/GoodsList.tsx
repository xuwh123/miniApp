import { PageContainer } from '@ant-design/pro-components';
import { Card, Tabs } from 'antd';
import React, { useState } from 'react';
import GoodsAll from './goodsForm/GoodsAll';
import GoodsOnSale from './goodsForm/GoodsOnSale';
import GoodsTaking from './goodsForm/GoodsTaking';
import BeAllSoldOut from './goodsForm/BeAllSoldOut';

const GoodsPage: React.FC = () => {
  const [activeTabKey, setActiveTabKey] = useState('GoodsAll');

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
              label:'全部',
              key: 'GoodsAll',
              children: <GoodsAll></GoodsAll>,
            },
            {
              label:'销售中',
              key: 'GoodsOnSale',
              children: <GoodsOnSale></GoodsOnSale>,
            },
            {
              label:'下架中',
              key: 'GoodsTaking',
              children: <GoodsTaking></GoodsTaking>,
            },
            {
              label:'售空',
              key: 'BeAllSoldOut',
              children: <BeAllSoldOut></BeAllSoldOut>,
            },
          ]}
        ></Tabs>
      </Card>
    </PageContainer>
  );
};

export default GoodsPage;
