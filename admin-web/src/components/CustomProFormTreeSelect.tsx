// components/CustomProFormTreeSelect.tsx

import React, { useEffect, useState } from 'react';
import { ProFormTreeSelect } from '@ant-design/pro-components';
import { queryGoodsCategoryList } from '@/services/swagger/goodsCategory';
import { convertToTree } from '@/pages/Goods/utils/treeUtils';

interface CustomProFormTreeSelectProps {
  name: string;
  label: string;
  placeholder?: string;
  rules?: any[];
  request?: () => Promise<any>;
  treeData?: any[];
}

const CustomProFormTreeSelect: React.FC<CustomProFormTreeSelectProps> = ({
  name,
  label,
  placeholder = '请选择',
  rules = [],
  request = async () => {
    const res = await queryGoodsCategoryList({
      pageNo: 1,
      pageSize: 100,
    });
    return res.data || [];
  },
  treeData = [],
}) => {
  const [treeDataState, setTreeDataState] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await request();
      const tree = convertToTree(data, 0);
      setTreeDataState(tree);
    };

    if (treeData.length === 0) {
      fetchData();
    } else {
      setTreeDataState(treeData);
    }
  }, [request, treeData]);

  return (
    <ProFormTreeSelect
      name={name}
      label={label}
      placeholder={placeholder}
      rules={rules}
      request={async () => {
        return treeDataState.map((item) => ({
          ...item,
          label: item.category_name,
          value: item.category_id,
        }));
      }}
    />
  );
};

export default CustomProFormTreeSelect;
