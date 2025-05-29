"use client"
import { Edit2, Trash2, Check, X } from 'lucide-react';
import { useState } from "react";
import { ICat } from "../types";
import { formatSalary } from './utils';

export function CatListItem({ initialData }: { initialData: ICat }) {
  const [cat, setCat] = useState<ICat | null>(initialData)
  const [editSalary, setEditSalary] = useState('');

  if (!cat) return null

  const handleEditStart = (cat: ICat) => {
    setEditSalary(cat.salary.toString());
  };

  const handleEditSave = () => {
    const newSalary = parseInt(editSalary);
    if (isNaN(newSalary) || newSalary < 0) {
      alert('Please enter a valid salary amount');
      return;
    }
    setCat({ ...cat, salary: newSalary })
    setEditSalary('');
  };

  const handleEditCancel = () => {
    setEditSalary('');
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this cat?')) {
      setCat(null)
    }
  };

  return (
    <tr key={cat.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
      <td className="py-4 px-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
            {cat.name.charAt(0)}
          </div>
          <span className="font-medium text-gray-800">{cat.name}</span>
        </div>
      </td>
      <td className="py-4 px-6">
        {editSalary ? (
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={editSalary}
              onChange={(e) => setEditSalary(e.target.value)}
              className="w-24 px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Salary"
            />
            <button
              onClick={handleEditSave}
              className="p-1 text-green-600 hover:bg-green-100 rounded transition-colors"
            >
              <Check size={16} />
            </button>
            <button
              onClick={handleEditCancel}
              className="p-1 text-red-600 hover:bg-red-100 rounded transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        ) : (
          <span className="font-semibold text-green-600">
            {formatSalary(cat.salary)}
          </span>
        )}
      </td>
      <td className="py-4 px-6">
        <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
          {cat.breed_name}
        </span>
      </td>
      <td className="py-4 px-6">
        <div className="flex items-center justify-center gap-2">
          {!editSalary && (
            <>
              <button
                onClick={() => handleEditStart(cat)}
                className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
                title="Edit Salary"
              >
                <Edit2 size={18} />
              </button>
              <button
                onClick={() => handleDelete()}
                className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
                title="Delete Cat"
              >
                <Trash2 size={18} />
              </button>
            </>
          )}
        </div>
      </td>
    </tr>

  )
}
