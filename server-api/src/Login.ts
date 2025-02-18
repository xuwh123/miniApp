// import { PrismaClient } from '@prisma/client';
// import axios from 'axios';
// import Jwt from 'jsonwebtoken';

// const prisma = new PrismaClient();
// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse,
// ) {
//   if (req.method === 'POST') {
//     const { code } = req.body;
//     const appId = 'wx8e63e6bcda927f89';
//     const appSecret = 'efe1f0dca3c28297de295af00a804348';
//     const url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${appSecret}$js_code=${code}$grant_type=authorization_code`;
//     try {
//       const response = await axios.get(url);
//       const { openid, session_key } = response.data;

//       const user = await findUserByOpenId(openid);

//       if (user) {
//         const token = generateToken(user);
//         res.status(200).json({ success: true, token });
//       } else {
//         res.status(200).json({ success: false, needBindPhone: true });
//       }
//     } catch (error) {
//       console.error('微信登录失败', error);
//       res.status(500).json({ success: false, message: '微信登录失败' });
//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method}Not Allowed`);
//   }
// }
// async function findUserByOpenId(openid: string) {
//   try {
//     const user = await prisma.user.findUnique({
//       where: {
//         openid,
//       },
//     });
//     return user;
//   } catch (error) {
//     console.error('查询用户失败', error);
//     return null;
//   }
// }

// function generateToken(user: any) {
//   const token = Jwt.sign({ userId: user.id }, 'your_jwt_secret', {
//     expiresIn: '1h',
//   });
//   return token;
// }
