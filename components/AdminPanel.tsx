
import React, { useState, useEffect } from 'react';

interface Post {
  id: string;
  title: string;
  category: string;
  image: string;
  content: string;
  date: string;
}

const AdminPanel: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'add' | 'manage'>('overview');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [posts, setPosts] = useState<Post[]>([]);
  
  // Form State
  const [formData, setFormData] = useState({
    title: '',
    category: 'Free Istikhara',
    image: '',
    content: ''
  });
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('rohani_posts');
    if (saved) setPosts(JSON.parse(saved));
  }, []);

  const savePosts = (newPosts: Post[]) => {
    setPosts(newPosts);
    localStorage.setItem('rohani_posts', JSON.stringify(newPosts));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Updated credentials as requested: Mustafa / Mustafame
    if (username === 'Mustafa' && password === 'Mustafame') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials. Please enter correct Admin Name and Code.');
    }
  };

  const handleAddPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      const updated = posts.map(p => p.id === editingId ? { ...p, ...formData } : p);
      savePosts(updated);
      setEditingId(null);
    } else {
      const newPost: Post = {
        id: Date.now().toString(),
        ...formData,
        date: new Date().toLocaleDateString()
      };
      savePosts([newPost, ...posts]);
    }
    setFormData({ title: '', category: 'Free Istikhara', image: '', content: '' });
    setActiveTab('manage');
  };

  const deletePost = (id: string) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      savePosts(posts.filter(p => p.id !== id));
    }
  };

  const editPost = (post: Post) => {
    setFormData({
      title: post.title,
      category: post.category,
      image: post.image,
      content: post.content
    });
    setEditingId(post.id);
    setActiveTab('add');
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-emerald-100">
          <div className="bg-emerald-800 p-8 text-center">
            <div className="w-16 h-16 bg-emerald-500 rounded-2xl mx-auto flex items-center justify-center text-white text-3xl mb-4 shadow-lg">
              <i className="fa-solid fa-lock"></i>
            </div>
            <h2 className="text-2xl font-bold text-white">Rohani Admin Login</h2>
            <p className="text-emerald-200 text-sm mt-1">Management Portal Access</p>
          </div>
          <form onSubmit={handleLogin} className="p-8 space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Admin Name</label>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                placeholder="Enter Name"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Admin Code</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                placeholder="••••••••"
              />
            </div>
            <button type="submit" className="w-full py-4 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl shadow-lg transition-all active:scale-95">
              Enter Dashboard
            </button>
            <button type="button" onClick={onBack} className="w-full py-2 text-slate-400 text-sm hover:text-slate-600">
              Return to Website
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-slate-300 hidden md:flex flex-col">
        <div className="p-6 border-b border-slate-800 flex items-center gap-3">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white">
            <i className="fa-solid fa-shield-halved"></i>
          </div>
          <span className="font-bold text-white tracking-tight">ADMIN PANEL</span>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'overview' ? 'bg-emerald-600 text-white shadow-lg' : 'hover:bg-slate-800'}`}
          >
            <i className="fa-solid fa-chart-pie w-5 text-center"></i>
            <span className="font-semibold text-sm">Dashboard</span>
          </button>
          <button 
            onClick={() => { setActiveTab('add'); setEditingId(null); setFormData({ title: '', category: 'Free Istikhara', image: '', content: '' }); }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'add' ? 'bg-emerald-600 text-white shadow-lg' : 'hover:bg-slate-800'}`}
          >
            <i className="fa-solid fa-plus w-5 text-center"></i>
            <span className="font-semibold text-sm">Add New Post</span>
          </button>
          <button 
            onClick={() => setActiveTab('manage')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'manage' ? 'bg-emerald-600 text-white shadow-lg' : 'hover:bg-slate-800'}`}
          >
            <i className="fa-solid fa-list-check w-5 text-center"></i>
            <span className="font-semibold text-sm">Manage Blogs</span>
          </button>
        </nav>
        <div className="p-4 border-t border-slate-800">
          <button onClick={onBack} className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-400/10 rounded-xl transition-all">
            <i className="fa-solid fa-right-from-bracket w-5 text-center"></i>
            <span className="font-semibold text-sm">Exit Admin</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 h-20 flex items-center justify-between px-8 sticky top-0 z-20">
          <h2 className="text-xl font-bold text-slate-800 capitalize">
            {activeTab === 'overview' ? 'Dashboard Overview' : activeTab === 'add' ? (editingId ? 'Edit Post' : 'Create New Post') : 'Blog Management'}
          </h2>
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-slate-900">Mustafa</p>
              <p className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest">Administrator</p>
            </div>
            <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">
              <i className="fa-solid fa-user text-slate-400"></i>
            </div>
          </div>
        </header>

        <div className="p-8">
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <i className="fa-solid fa-newspaper text-xl"></i>
                  </div>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Total Posts</p>
                  <h3 className="text-3xl font-black text-slate-900 mt-1">{posts.length}</h3>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
                    <i className="fa-solid fa-eye text-xl"></i>
                  </div>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Live Status</p>
                  <h3 className="text-3xl font-black text-emerald-600 mt-1">Active</h3>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                  <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-4">
                    <i className="fa-solid fa-comments text-xl"></i>
                  </div>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Queries</p>
                  <h3 className="text-3xl font-black text-slate-900 mt-1">0</h3>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                  <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-4">
                    <i className="fa-solid fa-clock-rotate-left text-xl"></i>
                  </div>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Recent Activity</p>
                  <h3 className="text-lg font-bold text-slate-900 mt-1">Updated Today</h3>
                </div>
              </div>
              
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
                <h4 className="font-bold text-slate-800 mb-6">Recent Blogs</h4>
                {posts.length === 0 ? (
                  <p className="text-slate-400 text-center py-12">No blogs found. Start by adding a new one.</p>
                ) : (
                  <div className="space-y-4">
                    {posts.slice(0, 5).map(post => (
                      <div key={post.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                        <div className="flex items-center gap-4">
                          <img src={post.image || 'https://images.unsplash.com/photo-1519834125748-958a846c483c'} className="w-12 h-12 rounded-lg object-cover" />
                          <div>
                            <p className="font-bold text-slate-800">{post.title}</p>
                            <p className="text-xs text-slate-500">{post.category} • {post.date}</p>
                          </div>
                        </div>
                        <button onClick={() => editPost(post)} className="text-emerald-600 font-bold text-xs uppercase hover:underline">Edit</button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'add' && (
            <div className="max-w-4xl mx-auto">
              <form onSubmit={handleAddPost} className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="col-span-2">
                    <label className="block text-sm font-bold text-slate-700 mb-2">Blog Title</label>
                    <input 
                      required
                      value={formData.title}
                      onChange={e => setFormData({ ...formData, title: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
                      placeholder="e.g. Surah Muzammil For Hardships"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Category</label>
                    <select 
                      value={formData.category}
                      onChange={e => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
                    >
                      <option>Free Istikhara</option>
                      <option>Love Marriage</option>
                      <option>Black Magic</option>
                      <option>Family Problems</option>
                      <option>Health</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Feature Image URL</label>
                    <input 
                      value={formData.image}
                      onChange={e => setFormData({ ...formData, image: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Blog Content (Rich Text Simulation)</label>
                  <textarea 
                    required
                    value={formData.content}
                    onChange={e => setFormData({ ...formData, content: e.target.value })}
                    rows={12}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none font-arabic text-xl text-right"
                    dir="rtl"
                    placeholder="یہاں بلاگ کا مواد لکھیں..."
                  />
                </div>
                <div className="flex gap-4 pt-4">
                  <button type="submit" className="flex-1 py-4 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl shadow-lg transition-all">
                    {editingId ? 'Update Post' : 'Publish Blog'}
                  </button>
                  <button type="button" onClick={() => setActiveTab('manage')} className="px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold rounded-xl transition-all">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          {activeTab === 'manage' && (
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 border-b border-slate-100">
                    <tr>
                      <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-widest">Image</th>
                      <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-widest">Title</th>
                      <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-widest">Category</th>
                      <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-widest">Date</th>
                      <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-widest text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {posts.map(post => (
                      <tr key={post.id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4">
                          <img src={post.image || 'https://images.unsplash.com/photo-1519834125748-958a846c483c'} className="w-10 h-10 rounded-lg object-cover" />
                        </td>
                        <td className="px-6 py-4 font-bold text-slate-700 text-sm">{post.title}</td>
                        <td className="px-6 py-4 text-xs font-bold">
                          <span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-md">{post.category}</span>
                        </td>
                        <td className="px-6 py-4 text-slate-500 text-xs">{post.date}</td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex justify-end gap-2">
                            <button onClick={() => editPost(post)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-all"><i className="fa-solid fa-pen-to-square"></i></button>
                            <button onClick={() => deletePost(post.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-all"><i className="fa-solid fa-trash-can"></i></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {posts.length === 0 && (
                <div className="p-16 text-center text-slate-400">
                  <i className="fa-solid fa-folder-open text-5xl mb-4 opacity-20"></i>
                  <p>No posts available to manage.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminPanel;
