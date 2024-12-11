import type { NextApiRequest, NextApiResponse } from 'next';
import { getCostAllocation } from '@/services/cloudProviders/aws';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  const { startDate, endDate } = req.query;

  try {
    const data = await getCostAllocation(
      startDate as string,
      endDate as string
    );
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar dados de alocação de custos' });
  }
} 