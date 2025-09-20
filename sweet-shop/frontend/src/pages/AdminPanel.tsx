import React, { useState, useEffect } from 'react';
import { Sweet, getAllSweets, createSweet, updateSweet, deleteSweet } from '../services/sweets';
import { restockSweet } from '../services/inventory';
import SweetForm from '../components/SweetForm';

const AdminPanel: React.FC = () => {
  const [sweets, setSweets] = useState<Sweet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editingSweet, setEditingSweet] = useState<Sweet | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [restockQuantity, setRestockQuantity] = useState<{ [key: number]: number }>({});

  useEffect(() => {
    fetchSweets();
  }, []);

  const fetchSweets = async () => {
    try {
      setLoading(true);
      const data = await getAllSweets();
      setSweets(data);
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to fetch sweets');
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (data: any) => {
    try {
      await createSweet(data);
      setShowForm(false);
      fetchSweets();
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to create sweet');
    }
  };

  const handleUpdate = async (data: any) => {
    if (!editingSweet) return;
    
    try {
      await updateSweet(editingSweet.id, data);
      setEditingSweet(null);
      fetchSweets();
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to update sweet');
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this sweet?')) return;
    
    try {
      await deleteSweet(id);
      fetchSweets();
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to delete sweet');
    }
  };

  const handleRestock = async (id: number) => {
    const quantity = restockQuantity[id] || 1;
    if (quantity <= 0) {
      setError('Quantity must be positive');
      return;
    }

    try {
      await restockSweet(id, quantity);
      setRestockQuantity(prev => ({ ...prev, [id]: 0 }));
      fetchSweets();
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to restock sweet');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
        <button
          onClick={() => setShowForm(true)}
          className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700"
        >
          Add New Sweet
        </button>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {showForm && (
        <SweetForm
          onSubmit={handleCreate}
          onCancel={() => setShowForm(false)}
        />
      )}

      {editingSweet && (
        <SweetForm
          sweet={editingSweet}
          onSubmit={handleUpdate}
          onCancel={() => setEditingSweet(null)}
        />
      )}

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Quantity
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sweets.map((sweet) => (
              <tr key={sweet.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {sweet.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {sweet.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ${sweet.price.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {sweet.quantity}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  <button
                    onClick={() => setEditingSweet(sweet)}
                    className="text-primary-600 hover:text-primary-900"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(sweet.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                  <div className="inline-flex items-center space-x-2">
                    <input
                      type="number"
                      min="1"
                      value={restockQuantity[sweet.id] || ''}
                      onChange={(e) => setRestockQuantity(prev => ({
                        ...prev,
                        [sweet.id]: parseInt(e.target.value) || 0
                      }))}
                      className="w-16 px-2 py-1 border border-gray-300 rounded-md text-sm"
                      placeholder="Qty"
                    />
                    <button
                      onClick={() => handleRestock(sweet.id)}
                      className="text-green-600 hover:text-green-900 text-sm"
                    >
                      Restock
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {sweets.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No sweets found</p>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;