export class Question {
  id: string;
  questionsName: string;
  questionsContent: string;
  createTime: number;
}

export class Money {
  gifts: Gifts;	// 赠品集合只有分期套餐返回
  id: string;  // 商品Id
  periods: number;		// 期数只有分期套餐返回
  salePrice: number; // 商品售价
  shopPrice: number; // 品价格
  stock: number; // 库存数量
  tags: Tags; // 商品标签集合
}

export class Gifts {
  id: string; // 赠品Id
  shopDetail: string; // 赠品说明
  shopName: string; // 赠品名称
  shopNumber: number; // 赠品数量
  shopPrice: number; // 赠品价格
}

export class Tags {
  tagImgUrl: string; // 标签图片地址
  tagName: string; // 标签名称
}


export class AddOrder {
  message: string;
  objData: string;
  status: string;
}
