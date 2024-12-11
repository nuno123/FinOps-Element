'use client';

import { useState, useEffect } from 'react';
import { DateRangePicker } from '@/components/date-range-picker';
import { Card, CardContent } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function CostAllocation() {
  const [costData, setCostData] = useState<any>(null);
  const [dateRange, setDateRange] = useState({
    from: new Date(new Date().setDate(1)),
    to: new Date()
  });

  async function fetchCostData() {
    try {
      const response = await fetch(
        `/api/cost-allocation?startDate=${dateRange.from.toISOString().split('T')[0]}&endDate=${dateRange.to.toISOString().split('T')[0]}`
      );
      const data = await response.json();
      setCostData(data);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  }

  useEffect(() => {
    fetchCostData();
  }, [dateRange]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Alocação de Custos</h1>
      
      <div className="mb-6">
        <DateRangePicker
          from={dateRange.from}
          to={dateRange.to}
          onChange={({ from, to }) => setDateRange({ from, to })}
        />
      </div>

      <Card>
        <CardContent className="p-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Ambiente</TableHead>
                <TableHead>Projeto</TableHead>
                <TableHead>Custo</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {costData?.ResultsByTime?.map((period: any, i: number) =>
                period.Groups.map((group: any, j: number) => (
                  <TableRow key={`${i}-${j}`}>
                    <TableCell>{group.Keys[0].replace('Environment$', '')}</TableCell>
                    <TableCell>{group.Keys[1].replace('Project$', '')}</TableCell>
                    <TableCell>
                      {parseFloat(group.Metrics.UnblendedCost.Amount).toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: group.Metrics.UnblendedCost.Unit
                      })}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
} 