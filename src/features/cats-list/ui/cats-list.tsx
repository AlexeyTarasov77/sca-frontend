import { use } from 'react';
import { CatListItem } from './cat';
import { formatSalary } from './utils';
import { catsApi } from '@/src/entities/cats/api/cats-api';
import Link from 'next/link';

export function CatsDashboard() {
  const resp = use(catsApi.getAll())
  if (!resp.success) {
    return <p className="text-red-500 text-lg mx-auto my-auto">{resp.message}</p>
  }
  const cats = resp.data.objects

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-6">
            <Link href="/" className="text-3xl font-bold text-white flex items-center gap-3 transition-colors hover:text-cyan-300">
              🐱 Spy Cats
            </Link>
            <p className="text-purple-100 mt-2">Manage your spy cats</p>
          </div>

          <div className="p-8">
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-6 font-semibold text-gray-700 text-lg">Name</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-700 text-lg">Salary</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-700 text-lg">Breed</th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-700 text-lg">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {cats.map((cat) => (
                    <CatListItem key={cat.id} initialData={cat} />
                  ))}
                </tbody>
              </table>
            </div>

            {cats.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">😿</div>
                <p className="text-gray-500 text-lg">No spy cats yet</p>
              </div>
            )}

            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>Total Cats: {cats.length}</span>
                <span>
                  Total Payroll: {formatSalary(cats.reduce((sum, cat) => sum + parseInt(cat.salary), 0))}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

