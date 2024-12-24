// utils/treeUtils.ts

export const convertToTree = (data: any[], parentId: number | string = 0): any[] => {
  return data
    .filter((item) => item.parent_id === parentId)
    .map((item) => ({
      ...item,
      children: convertToTree(data, item.category_id),
    }))
    .filter((item) => item.children.length > 0 || item.parent_id === parentId);
};
